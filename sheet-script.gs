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
 */
function addCorsHeaders(response) {
  return response
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    .setHeader('Access-Control-Allow-Credentials', 'false');
}

/**
 * Handle POST requests (form submissions)
 */
function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e);
    
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    const lastRow = sheet.getLastRow();
    const numEntries = lastRow > 1 ? lastRow - 1 : 0; // Exclude header row
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.phone || !data.category) {
      const errorResponse = ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: "Missing required fields",
          numEntries: numEntries
        }))
        .setMimeType(ContentService.MimeType.JSON);
      return addCorsHeaders(errorResponse);
    }
    
    // Check for duplicate emails
    if (lastRow > 1) { // Only check if there are entries beyond the header
      const emailColumn = sheet.getRange(2, 3, lastRow - 1, 1).getValues(); // Column C (Email)
      for (let i = 0; i < emailColumn.length; i++) {
        if (emailColumn[i][0] === data.email) {
          const duplicateResponse = ContentService
            .createTextOutput(JSON.stringify({
              success: false,
              message: "Email already exists in waitlist",
              numEntries: numEntries
            }))
            .setMimeType(ContentService.MimeType.JSON);
          return addCorsHeaders(duplicateResponse);
        }
      }
    }
    
    // Create timestamp
    const date = new Date();
    const timestamp = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Add the new row
    sheet.appendRow([
      timestamp,
      data.fullName,
      data.email,
      data.phone,
      data.category
    ]);
    
    console.log('Successfully added entry for:', data.email);
    
    // Return success response
    const successResponse = ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Successfully added to waitlist",
        numEntries: numEntries + 1
      }))
      .setMimeType(ContentService.MimeType.JSON);
    return addCorsHeaders(successResponse);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    // Return error response
    const errorResponse = ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: "Error processing request: " + error.toString(),
        numEntries: 0
      }))
      .setMimeType(ContentService.MimeType.JSON);
    return addCorsHeaders(errorResponse);
  }
}

/**
 * Handle OPTIONS requests (CORS preflight)
 * This is CRITICAL for CORS to work properly
 */
function doOptions() {
  console.log('Handling OPTIONS (preflight) request');
  const response = ContentService
    .createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    .setHeader('Access-Control-Allow-Credentials', 'false')
    .setHeader('Access-Control-Max-Age', '3600');
  return response;
}

/**
 * Handle GET requests (get waitlist count)
 */
function doGet() {
  try {
    console.log('Handling GET request');
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    const lastRow = sheet.getLastRow();
    const numEntries = lastRow > 1 ? lastRow - 1 : 0; // Exclude header row
    
    // Return the count of entries
    const response = ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        numEntries: numEntries,
        message: "Waitlist count retrieved successfully"
      }))
      .setMimeType(ContentService.MimeType.JSON);
    return addCorsHeaders(response);
      
  } catch (error) {
    console.error('Error in doGet:', error);
    // Return error response
    const errorResponse = ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        numEntries: 0,
        message: "Error retrieving waitlist count: " + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
    return addCorsHeaders(errorResponse);
  }
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
    category: "patient"
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log("Test result:", result.getContent());
}
