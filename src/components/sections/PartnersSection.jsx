import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    {
      name: 'AWS Startups',
      logo: 'https://via.placeholder.com/200x80?text=AWS+Startups',
      description: 'Cloud infrastructure and startup support',
    },
    {
      name: 'Biodock',
      logo: 'https://via.placeholder.com/200x80?text=Biodock',
      description: 'Biotechnology innovation platform',
    },
    {
      name: 'Datamellon',
      logo: 'https://via.placeholder.com/200x80?text=Datamellon',
      description: 'Data analytics and AI solutions',
    },
    {
      name: 'SingleStore',
      logo: 'https://via.placeholder.com/200x80?text=SingleStore',
      description: 'Real-time database platform',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading organizations to deliver world-class healthcare solutions across Africa.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="aspect-[2/1] flex items-center justify-center mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Partnership Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-primary-blue mb-2"
              >
                4+
              </motion.div>
              <p className="text-gray-600">Strategic Partners</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-primary-blue mb-2"
              >
                100%
              </motion.div>
              <p className="text-gray-600">Cloud Infrastructure</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-primary-blue mb-2"
              >
                24/7
              </motion.div>
              <p className="text-gray-600">Partner Support</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
