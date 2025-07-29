import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitToGoogleSheets } from "../../services/googleSheets";

const WaitlistModal = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		category: "stakeholder",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState("");
	const [emailDomain, setEmailDomain] = useState("");
	const [isPrivateDomain, setIsPrivateDomain] = useState(false);

	// List of common public email domains
	const publicDomains = [
		"gmail.com",
		"yahoo.com",
		"hotmail.com",
		"outlook.com",
		"aol.com",
		"icloud.com",
		"protonmail.com",
		"yandex.com",
		"mail.com",
		"zoho.com",
		"live.com",
		"msn.com",
		"rediffmail.com",
		"fastmail.com",
		"gmx.com",
	];

	// Function to check if email domain is private
	const checkEmailDomain = (email) => {
		const domain = email.split("@")[1]?.toLowerCase();
		if (domain) {
			setEmailDomain(domain);
			setIsPrivateDomain(!publicDomains.includes(domain));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		try {
			// Check email domain before submitting
			const domain = formData.email.split("@")[1]?.toLowerCase();
			const isPrivateEmail = domain && !publicDomains.includes(domain);

			// If private domain, open thesis download in new tab
			if (isPrivateEmail) {
				window.open(
					"https://drive.google.com/file/d/1DnZLMg-uxSgX_8WukRvoYF9TrbvvjlwQ/view?usp=drive_link",
					"_blank"
				);
			}

			// Submit to Google Sheets (for both public and private domains)
			const result = await submitToGoogleSheets(formData);

			if (result.success) {
				setIsSubmitting(false);
				setIsSubmitted(true);

				// Reset form after showing success message
				setTimeout(() => {
					setIsSubmitted(false);
					setFormData({
						fullName: "",
						email: "",
						phone: "",
						category: "stakeholder",
					});
					setError("");
					setEmailDomain("");
					setIsPrivateDomain(false);
					onClose();
				}, 3000);
			} else {
				throw new Error(result.message || "Failed to submit form");
			}
		} catch (err) {
			console.error("Form submission error:", err);
			// setError(err.message || 'Something went wrong. Please try again.');
			setIsSubmitting(false);
			setIsSubmitted(true);
			// Reset form after showing success message
			setTimeout(() => {
				setIsSubmitted(false);
				setFormData({
					fullName: "",
					email: "",
					phone: "",
					category: "stakeholder",
				});
				setError("");
				setEmailDomain("");
				setIsPrivateDomain(false);
				onClose();
			}, 3000);
		}
	};

	const handleChange = (e) => {
		const newFormData = {
			...formData,
			[e.target.name]: e.target.value,
		};
		setFormData(newFormData);

		// Check email domain when email changes
		if (e.target.name === "email" && e.target.value.includes("@")) {
			checkEmailDomain(e.target.value);
		}
	};

	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
				className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
			>
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.9, opacity: 0 }}
					onClick={(e) => e.stopPropagation()}
					className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
				>
					{isSubmitted ? (
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							className="text-center space-y-4"
						>
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
								<svg
									className="w-8 h-8 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900">
								You're on the list!
							</h3>
							<p className="text-gray-600">
								Thank you for joining our waitlist. We'll keep
								you updated on our progress.
							</p>
						</motion.div>
					) : (
						<>
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-2xl font-bold text-gray-900">
									Partner With Us
								</h2>
								<button
									onClick={onClose}
									className="p-2 hover:bg-gray-100 rounded-full transition-colors"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>

							{error && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4"
								>
									<div className="flex items-center space-x-2">
										<svg
											className="w-5 h-5 text-red-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
											/>
										</svg>
										<p className="text-sm text-red-700">
											{error}
										</p>
									</div>
								</motion.div>
							)}

							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<label
										htmlFor="fullName"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Full Name *
									</label>
									<input
										type="text"
										id="fullName"
										name="fullName"
										value={formData.fullName}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
										placeholder="Enter your full name"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Email Address *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
										placeholder="Enter your email address"
									/>
									{emailDomain && (
										<div className="mt-2 text-sm">
											{isPrivateDomain ? (
												<div className="flex items-center text-green-600">
													<svg
														className="w-4 h-4 mr-1"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
												</div>
											) : (
												<div className="flex items-center text-blue-600">
													<svg
														className="w-4 h-4 mr-1"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
												</div>
											)}
										</div>
									)}
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Phone Number *
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
										placeholder="Enter your phone number"
									/>
								</div>

								<div>
									<label
										htmlFor="category"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										I am a... *
									</label>
									<select
										id="category"
										name="category"
										value={formData.category}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
									>
										<option value="angel investor">
											Angel Investor
										</option>
										<option value="limited partner">
											Limited Partner
										</option>
										<option value="stakeholder">
											Stakeholder
										</option>
									</select>
								</div>

								<motion.button
									type="submit"
									disabled={isSubmitting}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
								>
									{isSubmitting ? (
										<>
											<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
											<span>
												{isPrivateDomain
													? "Getting Access..."
													: "Joining..."}
											</span>
										</>
									) : (
										<>
											{isPrivateDomain &&
											formData.email ? (
												<>
													<svg
														className="w-5 h-5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
														/>
													</svg>
													<span>Download Thesis</span>
												</>
											) : (
												<>
													<svg
														className="w-5 h-5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
														/>
													</svg>
													<span>Partner With Us</span>
												</>
											)}
										</>
									)}
								</motion.button>
							</form>

							<p className="text-xs text-gray-500 mt-4 text-center">
								By joining, you agree to receive updates about
								imisi HealthCARE. We respect your privacy and
								won't spam you.
							</p>
						</>
					)}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default WaitlistModal;
