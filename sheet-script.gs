/**
 * Google Apps Script for Imisi Healthcare Waitlist
 * Updated with Enhanced CORS Support
 *
 * Instructions:
 * 1. Create a new Google Sheet with the following headers in row 1:
 *    A1: "Timestamp", B1: "Full Name", C1: "Email", D1: "Phone", E1: "Category"
 *
 * 2. Open Google Apps Script (script.google.com)
 * 3. Create a new project and paste this code
 * 4. Save the project with a meaningful name (e.g., "Imisi Healthcare Waitlist")
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose "Web app" as type
 *    - Set "Execute as" to "Me"
 *    - Set "Who has access" to "Anyone"
 *    - Click "Deploy"
 * 6. Copy the Web App URL and paste it in the googleSheets.js service file
 * 7. Set GOOGLE_SHEETS_CONFIG.enabled to true in googleSheets.js
 *
 * IMPORTANT: After pasting this code, you MUST redeploy as a NEW deployment
 * for the CORS headers to take effect!
 */

/**
 * Helper function to add CORS headers to any response
 * This is the CRITICAL function for fixing CORS issues
 */
function addCorsHeaders(response) {
	return response
		.setHeader('Access-Control-Allow-Origin', '*')
		.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
		.setHeader('Access-Control-Allow-Headers', 'Content-Type')
		.setHeader('Access-Control-Max-Age', '3600');
}

/**
 * Handle OPTIONS requests (CORS preflight) - CRITICAL for CORS
 * This function MUST exist and be properly configured
 */
function doOptions(e) {
	console.log('Handling OPTIONS preflight request');
	const response = ContentService
		.createTextOutput('')
		.setMimeType(ContentService.MimeType.TEXT);
	return addCorsHeaders(response);
}

/**
 * Handle POST requests (form submissions)
 */
function doPost(e) {
	try {
		// Ensure we have post data
		if (!e || !e.postData || !e.postData.contents) {
			throw new Error('No post data received');
		}
		
		// Log the incoming request for debugging
		console.log('Received POST request');
		
		// Parse the incoming JSON data
		const data = JSON.parse(e.postData.contents);
		console.log('Parsed data:', data);
		// Get the active sheet
		const sheet = SpreadsheetApp.getActiveSheet();
		const lastRow = sheet.getLastRow();
		const numEntries = lastRow > 1 ? lastRow - 1 : 0; // Exclude header row
		// Validate required fields
		if (!data.fullName || !data.email || !data.phone || !data.category) {
			const errorResponse = ContentService.createTextOutput(
				JSON.stringify({
					success: false,
					message: "Missing required fields",
					numEntries: numEntries,
				})
			).setMimeType(ContentService.MimeType.JSON);
			return addCorsHeaders(errorResponse);
		}
		// Check for duplicate emails
		if (lastRow > 1) {
			// Only check if there are entries beyond the header
			const emailColumn = sheet
				.getRange(2, 3, lastRow - 1, 1)
				.getValues(); // Column C (Email)
			for (let i = 0; i < emailColumn.length; i++) {
				if (emailColumn[i][0] === data.email) {
					const duplicateResponse = ContentService.createTextOutput(
						JSON.stringify({
							success: false,
							message: "Email already exists in waitlist",
							numEntries: numEntries,
						})
					).setMimeType(ContentService.MimeType.JSON);
					return addCorsHeaders(duplicateResponse);
				}
			}
		}
		// Create timestamp
		const date = new Date();
		const timestamp = date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
		// Add the new row
		sheet.appendRow([
			timestamp,
			data.fullName,
			data.email,
			data.phone,
			data.category,
		]);
		console.log("Successfully added entry for:", data.email);
		// Return success response
		const successResponse = ContentService.createTextOutput(
			JSON.stringify({
				success: true,
				message: "Successfully added to waitlist",
				numEntries: numEntries + 1,
			})
		).setMimeType(ContentService.MimeType.JSON);
		return addCorsHeaders(successResponse);
	} catch (error) {
		console.error("Error in doPost:", error);
		// Return error response
		const errorResponse = ContentService.createTextOutput(
			JSON.stringify({
				success: false,
				message: "Error processing request: " + error.toString(),
				numEntries: 0,
			})
		).setMimeType(ContentService.MimeType.JSON);
		return addCorsHeaders(errorResponse);
	}
}

/**
 * Handle GET requests (get waitlist count)
 * This function is called when someone visits the Apps Script URL directly
 * or when GET requests are made to the endpoint
 */
function doGet(e) {
	try {
		console.log('Handling GET request from:', e ? e.parameter : 'unknown');
		
		// Try to get the spreadsheet - with better error handling
		let sheet;
		try {
			// First try to get active sheet
			sheet = SpreadsheetApp.getActiveSheet();
		} catch (sheetError) {
			console.error('Could not get active sheet:', sheetError);
			// If that fails, try to get the first sheet of the active spreadsheet
			try {
				const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
				sheet = spreadsheet.getSheets()[0];
			} catch (spreadsheetError) {
				console.error('Could not get any spreadsheet:', spreadsheetError);
				throw new Error('No spreadsheet available. Please ensure this script is bound to a Google Sheet.');
			}
		}
		
		if (!sheet) {
			throw new Error('Could not access spreadsheet. Please check permissions.');
		}
		
		console.log('Successfully accessed sheet:', sheet.getName());
		
		// Get row count with safety check
		const lastRow = sheet.getLastRow() || 0;
		const numEntries = Math.max(0, lastRow - 1); // Exclude header row, ensure non-negative
		
		console.log('Sheet stats - Last row:', lastRow, 'Entries:', numEntries);
		
		// Return success response
		const response = ContentService.createTextOutput(
			JSON.stringify({
				success: true,
				numEntries: numEntries,
				message: `Waitlist count retrieved successfully. Total entries: ${numEntries}`,
				sheetName: sheet.getName(),
				lastRow: lastRow
			})
		).setMimeType(ContentService.MimeType.JSON);
		return addCorsHeaders(response);
		
	} catch (error) {
		console.error('Error in doGet:', error.toString());
		console.error('Error stack:', error.stack);
		
		// Return detailed error response
		const errorResponse = ContentService.createTextOutput(
			JSON.stringify({
				success: false,
				numEntries: 0,
				message: `Error retrieving waitlist count: ${error.toString()}`,
				errorType: error.name || 'UnknownError',
				timestamp: new Date().toISOString(),
				debugInfo: {
					hasActiveSpreadsheet: !!SpreadsheetApp.getActiveSpreadsheet,
					scriptId: ScriptApp.newTrigger ? 'ScriptApp available' : 'ScriptApp unavailable'
				}
			})
		).setMimeType(ContentService.MimeType.JSON);
		return addCorsHeaders(errorResponse);
	}
}

/**
 * Setup function to create and bind to a specific spreadsheet
 * Run this ONCE to set up your spreadsheet with proper headers
 */
function setupSpreadsheet() {
	try {
		console.log('Setting up spreadsheet...');
		
		// Create a new spreadsheet or get the active one
		let spreadsheet;
		try {
			spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
			console.log('Using existing spreadsheet:', spreadsheet.getName());
		} catch (e) {
			// Create a new spreadsheet if none exists
			spreadsheet = SpreadsheetApp.create('Imisi Healthcare Waitlist');
			console.log('Created new spreadsheet:', spreadsheet.getName());
		}
		
		// Get the first sheet
		const sheet = spreadsheet.getSheets()[0];
		sheet.setName('Waitlist');
		
		// Set up headers in row 1
		const headers = ['Timestamp', 'Full Name', 'Email', 'Phone', 'Category'];
		sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
		
		// Format the header row
		const headerRange = sheet.getRange(1, 1, 1, headers.length);
		headerRange.setFontWeight('bold');
		headerRange.setBackground('#f0f0f0');
		
		// Auto-resize columns
		sheet.autoResizeColumns(1, headers.length);
		
		console.log('Spreadsheet setup completed!');
		console.log('Spreadsheet ID:', spreadsheet.getId());
		console.log('Spreadsheet URL:', spreadsheet.getUrl());
		
		return {
			success: true,
			message: 'Spreadsheet setup completed',
			spreadsheetId: spreadsheet.getId(),
			spreadsheetUrl: spreadsheet.getUrl(),
			sheetName: sheet.getName()
		};
		
	} catch (error) {
		console.error('Error setting up spreadsheet:', error);
		return {
			success: false,
			message: 'Failed to setup spreadsheet: ' + error.toString()
		};
	}
}

/**
 * Test the doGet function specifically
 */
function testDoGet() {
	console.log('Testing doGet function...');
	try {
		const result = doGet();
		console.log('doGet test result:', result.getContent());
		return JSON.parse(result.getContent());
	} catch (error) {
		console.error('doGet test failed:', error);
		return { success: false, error: error.toString() };
	}
}

/**
 * Test CORS headers - Run this to verify CORS is working
 */
function testCorsHeaders() {
	console.log('Testing CORS headers...');
	
	// Test OPTIONS request
	const optionsResult = doOptions();
	console.log('OPTIONS response:', optionsResult.getContent());
	
	// Test POST request
	const testData = {
		fullName: "CORS Test User",
		email: "cors-test@example.com",
		phone: "+1234567890",
		category: "patient",
	};

	const mockEvent = {
		postData: {
			contents: JSON.stringify(testData),
		},
	};

	const postResult = doPost(mockEvent);
	console.log('POST response:', postResult.getContent());
	
	console.log('CORS test completed. Check the execution transcript for headers.');
}

/**
 * Test function to check if the script is working
 * You can run this in the Apps Script editor to test
 */
function testScript() {
	const testData = {
		fullName: "Test User",
		email: "test@example.com",
		phone: "+1234567890",
		category: "patient",
	};

	const mockEvent = {
		postData: {
			contents: JSON.stringify(testData),
		},
	};

	const result = doPost(mockEvent);
	console.log("Test result:", result.getContent());
}
