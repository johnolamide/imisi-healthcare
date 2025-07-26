import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WaitlistModal from '../common/WaitlistModal';

const HeroSection = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
		<>
			<section
				id="home"
				className="section-spacing bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden"
			>
				<div className="container-max section-padding">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
					>
						{/* Content */}
						<div className="space-y-8">
							<motion.div
								variants={itemVariants}
								className="space-y-6"
							>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
									Prompt and{" "}
									<span className="text-gradient">
										Personalized
									</span>{" "}
									Healthcare for Africans.
								</h1>

								<p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
									Join imisi HealthCARE — a data
									privacy-compliant and secured platform
									seamlessly connecting patients, healthcare
									providers, healthcare facilities, and
									stakeholders for a prompt and personalized
									healthcare experience across Africa.
								</p>
							</motion.div>

							<motion.div
								variants={itemVariants}
								className="flex flex-col sm:flex-row gap-4"
							>
								<button
									onClick={() => setIsModalOpen(true)}
									className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
								>
									Join the Waitlist
								</button>

								<button
									onClick={() =>
										document
											.getElementById("about")
											.scrollIntoView({
												behavior: "smooth",
											})
									}
									className="btn-secondary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
								>
									Learn More
								</button>
							</motion.div>

							{/* Stats */}
							<motion.div
								variants={itemVariants}
								className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
							>
								<div className="text-center">
									<div className="text-2xl md:text-3xl font-bold text-primary-blue">
										54
									</div>
									<div className="text-sm text-gray-600">
										African Countries
									</div>
								</div>
								<div className="text-center">
									<div className="text-2xl md:text-3xl font-bold text-primary-blue">
										1.4B+
									</div>
									<div className="text-sm text-gray-600">
										People Served
									</div>
								</div>
								<div className="text-center">
									<div className="text-2xl md:text-3xl font-bold text-primary-blue">
										24/7
									</div>
									<div className="text-sm text-gray-600">
										AI Support
									</div>
								</div>
							</motion.div>
						</div>

						{/* Illustration */}
						<motion.div
							variants={imageVariants}
							className="relative"
						>
							<div className="relative w-full h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary-blue/10 to-secondary-vibrantPurple/10 p-8 flex items-center justify-center">
								{/* Web3 Healthcare Network Illustration */}
								<div className="relative w-full h-full">
									{/* Central Hub */}
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											duration: 20,
											repeat: Infinity,
											ease: "linear",
										}}
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center shadow-lg"
									>
										<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
											{/* <span className="text-primary-blue font-bold text-sm">iH</span> */}
											<img
												src="/logo-secondary.png"
												alt="Imisi HealthCARE"
												className="w-full h-full object-contain"
											/>
										</div>
									</motion.div>

									{/* Orbiting Elements - Patients */}
									<motion.div
										animate={{ rotate: -360 }}
										transition={{
											duration: 15,
											repeat: Infinity,
											ease: "linear",
										}}
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48"
									>
										<div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md">
											<svg
												className="w-6 h-6 text-white"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
											</svg>
										</div>
									</motion.div>

									{/* Orbiting Elements - Providers */}
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											duration: 18,
											repeat: Infinity,
											ease: "linear",
										}}
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
									>
										<div className="absolute top-0 right-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
											<svg
												className="w-6 h-6 text-white"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
											</svg>
										</div>
									</motion.div>

									{/* Orbiting Elements - Facilities */}
									<motion.div
										animate={{ rotate: -360 }}
										transition={{
											duration: 12,
											repeat: Infinity,
											ease: "linear",
										}}
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56"
									>
										<div className="absolute bottom-0 left-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
											<svg
												className="w-6 h-6 text-white"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12,2A3,3 0 0,1 15,5V6.5C15,7.11 15.45,7.61 16,7.75V18A1,1 0 0,1 15,19H9A1,1 0 0,1 8,18V7.75C8.55,7.61 9,7.11 9,6.5V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V6.5H13V5A1,1 0 0,0 12,4Z" />
											</svg>
										</div>
									</motion.div>

									{/* Orbiting Elements - Stakeholders */}
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											duration: 22,
											repeat: Infinity,
											ease: "linear",
										}}
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72"
									>
										<div className="absolute bottom-6 right-1/2 transform translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
											<svg
												className="w-6 h-6 text-white"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,13.5C18.8,13.5 22,14.9 22,16.5V18H10V16.5C10,14.9 13.2,13.5 16,13.5M8,13.5C8.6,13.5 9.1,13.6 9.6,13.7C9.2,14.2 9,14.8 9,15.5V16H2V15.5C2,14.6 4.7,13.5 8,13.5M8,4C9.7,4 11,5.3 11,7S9.7,10 8,10 5,8.7 5,7 6.3,4 8,4M8,11.5C9.8,11.5 12,12.4 12,13.5V14H4V13.5C4,12.4 6.2,11.5 8,11.5Z" />
											</svg>
										</div>
									</motion.div>

									{/* Connection Lines */}
									<div className="absolute inset-0">
										<svg
											className="w-full h-full"
											viewBox="0 0 400 400"
										>
											<defs>
												<motion.linearGradient
													id="connectionGradient"
													animate={{
														x1: [0, 100],
														x2: [0, 100],
													}}
													transition={{
														duration: 2,
														repeat: Infinity,
														ease: "linear",
													}}
												>
													<stop
														offset="0%"
														stopColor="#000EC3"
														stopOpacity="0.2"
													/>
													<stop
														offset="50%"
														stopColor="#A92CDF"
														stopOpacity="0.6"
													/>
													<stop
														offset="100%"
														stopColor="#000EC3"
														stopOpacity="0.2"
													/>
												</motion.linearGradient>
											</defs>

											<motion.circle
												cx="200"
												cy="200"
												r="120"
												fill="none"
												stroke="url(#connectionGradient)"
												strokeWidth="2"
												strokeDasharray="10,5"
												animate={{
													strokeDashoffset: [0, -15],
												}}
												transition={{
													duration: 2,
													repeat: Infinity,
													ease: "linear",
												}}
											/>
										</svg>
									</div>
								</div>

								{/* Floating Elements */}
								<motion.div
									animate={{ y: [0, -10, 0] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="absolute top-8 right-8 w-8 h-8 bg-secondary-vibrantPurple/20 rounded-full"
								/>
								<motion.div
									animate={{ y: [0, 15, 0] }}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 1,
									}}
									className="absolute bottom-8 left-8 w-6 h-6 bg-primary-blue/20 rounded-full"
								/>
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

export default HeroSection;
