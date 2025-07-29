import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WaitlistModal from '../common/WaitlistModal';

const ThesisSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const keyPoints = [
    'AI-powered healthcare operating system',
    'Blockchain-secured patient data',
    'Modular digital ecosystem',
    'Cultural and demographic adaptation',
    'Seamless stakeholder connectivity',
    'Real-time health monitoring',
  ];

	return (
		<>
		<section
			id="thesis"
			className="section-spacing bg-gradient-to-br from-gray-50 to-blue-50"
		>
			<div className="container-max section-padding">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
				>
					{/* Content */}
					<div className="space-y-8">
						<motion.div
							variants={itemVariants}
							className="space-y-6"
						>
							<div className="inline-flex items-center px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-medium">
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Our Thesis
							</div>

							<h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
								Building Africa's First AI-Powered Healthcare
								Operating System
							</h2>

							<p className="text-xl text-gray-600 leading-relaxed">
								imisi HealthCARE is building Africa's first
								AI-powered, blockchain-secured healthcare
								operating system—a modular digital ecosystem
								that delivers prompt and personalized healthcare
								by seamlessly connecting patients, healthcare
								providers, healthcare facilities, pharmaceutical
								vendors, and public health stakeholders across
								the continent.
							</p>
						</motion.div>

						{/* Key Points */}
						<motion.div
							variants={itemVariants}
							className="space-y-4"
						>
							<h3 className="text-2xl font-bold text-gray-900">
								Key Features
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{keyPoints.map((point, index) => (
									<motion.div
										key={point}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 border border-blue-100"
									>
										<div className="w-2 h-2 bg-primary-blue rounded-full"></div>
										<span className="text-gray-700 font-medium">
											{point}
										</span>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* CTA */}
						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-4"
						>
							<motion.button
								onClick={() => setIsModalOpen(true)}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
							>
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
										d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v-2L4.257 9.257a6 6 0 017.743-7.743M15 7L9 13v4h4l6-6M15 7v0z"
									/>
								</svg>
								<span>Get Access</span>
							</motion.button>

							<motion.button
								onClick={() =>
									document
										.getElementById("contact")
										.scrollIntoView({ behavior: "smooth" })
								}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className="btn-secondary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Contact Us
							</motion.button>
						</motion.div>
					</div>

					{/* Visual */}
					<motion.div variants={itemVariants} className="relative">
						<div className="relative w-full h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary-blue/10 to-secondary-vibrantPurple/10 p-8 flex items-center justify-center overflow-hidden">
							{/* Document Illustration */}
							<div className="relative w-full h-full max-w-sm">
								{/* Main Document */}
								<motion.div
									animate={{ y: [0, -10, 0] }}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="absolute inset-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-6"
								>
									{/* Document Header */}
									<div className="space-y-4 mb-8">
										<div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
											{/* <span className="text-white font-bold text-sm">iH</span> */}
											<img
												src="/logo-primary.png"
												alt="Imisi HealthCARE"
												className="w-full h-full object-contain"
											/>
										</div>
										<div className="space-y-2">
											<div className="h-3 bg-gray-300 rounded w-3/4"></div>
											<div className="h-3 bg-gray-200 rounded w-1/2"></div>
										</div>
									</div>

									{/* Document Lines */}
									<div className="space-y-3">
										{[...Array(8)].map((_, i) => (
											<motion.div
												key={i}
												initial={{ width: 0 }}
												whileInView={{
													width: `${85 - i * 5}%`,
												}}
												viewport={{ once: true }}
												transition={{
													delay: i * 0.1,
													duration: 0.5,
												}}
												className="h-2 bg-gray-200 rounded"
											></motion.div>
										))}
									</div>

									{/* Charts/Graphs */}
									<div className="mt-8 grid grid-cols-2 gap-4">
										<div className="h-16 bg-gradient-to-t from-primary-blue/20 to-primary-blue/5 rounded"></div>
										<div className="h-16 bg-gradient-to-t from-secondary-vibrantPurple/20 to-secondary-vibrantPurple/5 rounded"></div>
									</div>
								</motion.div>

								{/* Floating Papers */}
								<motion.div
									animate={{
										y: [0, -15, 0],
										rotate: [0, 2, 0],
									}}
									transition={{
										duration: 5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 1,
									}}
									className="absolute -top-4 -right-4 w-32 h-40 bg-white rounded-lg shadow-lg border border-gray-100 opacity-80"
								></motion.div>

								<motion.div
									animate={{
										y: [0, 12, 0],
										rotate: [0, -3, 0],
									}}
									transition={{
										duration: 6,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 2,
									}}
									className="absolute -bottom-4 -left-4 w-28 h-36 bg-white rounded-lg shadow-lg border border-gray-100 opacity-70"
								></motion.div>
							</div>

							{/* Floating Icons */}
							<motion.div
								animate={{
									y: [0, -20, 0],
									rotate: [0, 10, 0],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute top-8 right-8 w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center"
							>
								<svg
									className="w-6 h-6 text-primary-blue"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
							</motion.div>

							<motion.div
								animate={{
									y: [0, 15, 0],
									rotate: [0, -8, 0],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1.5,
								}}
								className="absolute bottom-8 left-8 w-10 h-10 bg-secondary-vibrantPurple/20 rounded-full flex items-center justify-center"
							>
								<svg
									className="w-5 h-5 text-secondary-vibrantPurple"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
		
		<WaitlistModal
			isOpen={isModalOpen}
			onClose={() => setIsModalOpen(false)}
		/>
		</>
  );
};

export default ThesisSection;
