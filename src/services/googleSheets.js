/**
 * Google Sheets Service
 * Handles form submissions to Google Sheets via Google Apps Script
 */

// Configuration - Replace with your Google Apps Script URL
const GOOGLE_SHEETS_CONFIG = {
	// Paste your NEW Google Apps Script Web App URL here (after redeployment)
	url: "https://script.google.com/macros/s/AKfycbz26xLJmOfZGSfq42FbJesbODWqyYACh-Lb8kJllnfm9fnFGwgQHqpdq8Rsuj9L7aqbTg/exec",
	// Development proxy URL (when running locally)
	devUrl: "/api/sheets",
	// Set to true when you have configured the URL above
	enabled: true,
	// Use proxy in development only
	useProxy: true, // Only used in development
};

/**
 * Submit waitlist form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @param {string} formData.fullName - User's full name
 * @param {string} formData.email - User's email address
 * @param {string} formData.phone - User's phone number
 * @param {string} formData.category - User category (patient, provider, facility, stakeholder)
 * @returns {Promise<Object>} Response from the Google Apps Script
 */
export const submitToGoogleSheets = async (formData) => {
	if (!GOOGLE_SHEETS_CONFIG.enabled) {
		console.log(
			"Google Sheets integration is disabled. Form data:",
			formData
		);
		// Return a mock success response for development
		return {
			success: true,
			message:
				"Google Sheets integration is not configured. Form data logged to console.",
			numEntries: 1,
		};
	}

	if (
		!GOOGLE_SHEETS_CONFIG.url ||
		GOOGLE_SHEETS_CONFIG.url === "REPLACE_WITH_YOUR_GOOGLE_APPS_SCRIPT_URL"
	) {
		throw new Error(
			"Google Sheets URL is not configured. Please update GOOGLE_SHEETS_CONFIG.url"
		);
	}

	// Determine which URL to use
	const isDevelopment = import.meta.env.DEV;
	const submitUrl =
		isDevelopment && GOOGLE_SHEETS_CONFIG.useProxy
			? GOOGLE_SHEETS_CONFIG.devUrl
			: GOOGLE_SHEETS_CONFIG.url;

	// In production, always use the direct URL
	if (!isDevelopment) {
		// For production, make sure we're using the direct Google Apps Script URL
		console.log('Production mode: using direct Google Apps Script URL');
	}

	console.log("Submitting to Google Sheets:", {
		url: submitUrl,
		isDevelopment,
		useProxy: GOOGLE_SHEETS_CONFIG.useProxy,
		formData: formData,
	});

	try {
		const requestBody = {
			fullName: formData.fullName,
			email: formData.email,
			phone: formData.phone,
			category: formData.category,
			timestamp: new Date().toISOString(),
		};

		console.log("Request body:", requestBody);

		const response = await fetch(submitUrl, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		});

		console.log("Response status:", response.status);
		console.log("Response headers:", response.headers);

		if (!response.ok) {
			const errorText = await response.text();
			console.error("Response error text:", errorText);
			throw new Error(
				`HTTP error! status: ${response.status}, message: ${errorText}`
			);
		}

		const result = await response.json();
		console.log("Response result:", result);

		return {
			success: true,
			message: result.message || "Successfully added to waitlist",
			numEntries: result.numEntries || 0,
		};
	} catch (error) {
		console.error("Detailed error submitting to Google Sheets:", {
			name: error.name,
			message: error.message,
			stack: error.stack,
			url: submitUrl,
		});

		// Provide more specific error messages
		if (
			error.name === "TypeError" &&
			error.message.includes("Failed to fetch")
		) {
			throw new Error(
				"Network error: Unable to connect to Google Sheets. This might be due to:\n" +
					"1. CORS policy restrictions\n" +
					"2. Network connectivity issues\n" +
					"3. Google Apps Script deployment issues\n" +
					"4. Incorrect URL configuration\n\n" +
					"Please check your Google Apps Script deployment settings."
			);
		}

		throw new Error(`Failed to submit to Google Sheets: ${error.message}`);
	}
};

/**
 * Get the current number of waitlist entries
 * @returns {Promise<number>} Number of entries in the waitlist
 */
export const getWaitlistCount = async () => {
	if (!GOOGLE_SHEETS_CONFIG.enabled) {
		return 0;
	}

	if (
		!GOOGLE_SHEETS_CONFIG.url ||
		GOOGLE_SHEETS_CONFIG.url === "REPLACE_WITH_YOUR_GOOGLE_APPS_SCRIPT_URL"
	) {
		return 0;
	}

	try {
		const response = await fetch(GOOGLE_SHEETS_CONFIG.url, {
			method: "GET",
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result.numEntries || 0;
	} catch (error) {
		console.error("Error getting waitlist count:", error);
		return 0;
	}
};

/**
 * Configure the Google Sheets integration
 * @param {string} url - The Google Apps Script Web App URL
 */
export const configureGoogleSheets = (url) => {
	GOOGLE_SHEETS_CONFIG.url = url;
	GOOGLE_SHEETS_CONFIG.enabled = true;
	console.log("Google Sheets integration configured with URL:", url);
};
