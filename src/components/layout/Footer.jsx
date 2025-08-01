import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
	const socialLinks = [
		{
			name: "Twitter",
			href: "https://x.com/imisihealthcare",
			icon: (
				<svg
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
				</svg>
			),
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/imisihealthcare/",
			icon: (
				<svg
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
				</svg>
			),
		},
		{
			name: "YouTube",
			href: "https://youtube.com/@imisihealthcare?si=L97v0pzoLInvWGtO",
			icon: (
				<svg
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
				</svg>
			),
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/imisi-healthcare/",
			icon: (
				<svg
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
			),
		},
		{
			name: "WhatsApp",
			href: "https://wa.me/2349164738883",
			icon: (
				<svg
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
				</svg>
			),
		},
	];

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4 },
		},
	};

	return (
		<motion.footer
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={containerVariants}
			className="bg-primary-blue text-white section-spacing"
			id="contact"
		>
			<div className="container-max section-padding">
				<div className="text-center space-y-8">
					{/* Stay in Touch */}
					<motion.div variants={itemVariants} className="space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">
							Stay in Touch
						</h2>
						<p className="text-blue-100 max-w-2xl mx-auto">
							Connect with us on social media for the latest
							updates and healthcare insights.
						</p>
					</motion.div>

					{/* Social Media Links */}
					<motion.div
						variants={itemVariants}
						className="flex justify-center space-x-6"
					>
						{socialLinks.map((social, index) => (
							<motion.a
								key={social.name}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.1 + 0.3 }}
							>
								{social.icon}
								<span className="sr-only">{social.name}</span>
							</motion.a>
						))}
					</motion.div>

					{/* Contact Info */}
					<motion.div variants={itemVariants} className="space-y-2">
						<p className="text-blue-100">
							<a
								href="mailto:imisihealthcare@gmail.com"
								className="hover:text-white transition-colors duration-300"
							>
								imisihealthcare@gmail.com
							</a>
						</p>
						<p className="text-blue-100">
							<a
								href="https://wa.me/2349164738883"
								className="hover:text-white transition-colors duration-300"
							>
								+234 916 473 8883
							</a>
						</p>
					</motion.div>

					{/* Divider */}
					<motion.div
						variants={itemVariants}
						className="border-t border-blue-400/30"
					></motion.div>

					{/* Footer Bottom */}
					<motion.div variants={itemVariants} className="space-y-4">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<p className="text-blue-100 flex items-center space-x-2">
								<span>Made with</span>
								<span className="text-red-400 text-xl">💙</span>
								<span>by imisi HealthCARE LTD</span>
							</p>

							<div className="flex space-x-6 text-sm">
								<a
									href="#privacy"
									className="text-blue-100 hover:text-white transition-colors duration-300"
								>
									Privacy Policy
								</a>
								<a
									href="#terms"
									className="text-blue-100 hover:text-white transition-colors duration-300"
								>
									Terms of Service
								</a>
							</div>
						</div>

						<p className="text-blue-200 text-sm">
							© 2025 imisi HealthCARE. All rights reserved.
						</p>
					</motion.div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
