import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/imisihealthcare',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/imisihealthcare/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297zm7.83-5.569c-.245.807-.612 1.469-1.103 1.96-.49.49-1.153.858-1.96 1.103-.807.245-1.664.367-2.571.367s-1.764-.122-2.571-.367c-.807-.245-1.469-.612-1.96-1.103-.49-.49-.858-1.153-1.103-1.96-.245-.807-.367-1.664-.367-2.571s.122-1.764.367-2.571c.245-.807.612-1.469 1.103-1.96.49-.49 1.153-.858 1.96-1.103.807-.245 1.664-.367 2.571-.367s1.764.122 2.571.367c.807.245 1.469.612 1.96 1.103.49.49.858 1.153 1.103 1.96.245.807.367 1.664.367 2.571s-.122 1.764-.367 2.571z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@imisihealthcare?si=L97v0pzoLInvWGtO',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/2349164738883',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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
      initial=\"hidden\"
      whileInView=\"visible\"
      viewport={{ once: true }}
      variants={containerVariants}
      className=\"bg-primary-blue text-white section-spacing\"
      id=\"contact\"
    >
      <div className=\"container-max section-padding\">
        <div className=\"text-center space-y-8\">
          {/* Stay in Touch */}
          <motion.div variants={itemVariants} className=\"space-y-4\">
            <h2 className=\"text-3xl md:text-4xl font-bold\">Stay in Touch</h2>
            <p className=\"text-blue-100 max-w-2xl mx-auto\">
              Connect with us on social media for the latest updates and healthcare insights.
            </p>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants} className=\"flex justify-center space-x-6\">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target=\"_blank\"
                rel=\"noopener noreferrer\"
                className=\"p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110\"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {social.icon}
                <span className=\"sr-only\">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className=\"space-y-2\">
            <p className=\"text-blue-100\">
              <a
                href=\"mailto:imisihealthcare@gmail.com\"
                className=\"hover:text-white transition-colors duration-300\"
              >
                imisihealthcare@gmail.com
              </a>
            </p>
            <p className=\"text-blue-100\">
              <a
                href=\"https://wa.me/2349164738883\"
                className=\"hover:text-white transition-colors duration-300\"
              >
                +234 916 473 8883
              </a>
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className=\"border-t border-blue-400/30\"></motion.div>

          {/* Footer Bottom */}
          <motion.div variants={itemVariants} className=\"space-y-4\">
            <div className=\"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0\">
              <p className=\"text-blue-100 flex items-center space-x-2\">
                <span>Made with</span>
                <span className=\"text-red-400 text-xl\">💙</span>
                <span>by imisi HealthCARE LTD</span>
              </p>
              
              <div className=\"flex space-x-6 text-sm\">
                <a
                  href=\"#privacy\"
                  className=\"text-blue-100 hover:text-white transition-colors duration-300\"
                >
                  Privacy Policy
                </a>
                <a
                  href=\"#terms\"
                  className=\"text-blue-100 hover:text-white transition-colors duration-300\"
                >
                  Terms of Service
                </a>
              </div>
            </div>
            
            <p className=\"text-blue-200 text-sm\">
              © 2024 imisi HealthCARE. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
