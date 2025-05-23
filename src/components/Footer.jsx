import React from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Eye, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      const navigate = useNavigate();

      const iconHover = {
        y: -3,
        scale: 1.1,
        transition: { type: "spring", stiffness: 300 }
      };

      const scrollToServices = (e) => {
        e.preventDefault();
        if (window.location.pathname === '/') {
          const servicesSection = document.getElementById('our-services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate('/#our-services');
        }
      };

      return (
        <footer className="bg-neutral-800 text-neutral-300 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              {/* Company Info */}
              <div>
                <Link to="/" className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity mb-4">
                  <Eye className="h-7 w-7 text-primary" />
                  <span className="font-bold text-lg">myTradeSolutions</span>
                </Link>
                <p className="text-sm leading-relaxed">
                  Your trusted partner for on-site verification and inspection services in Jeddah and beyond. We ensure transparency and confidence in your global trade.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <p className="font-semibold text-white mb-4 text-md">Quick Links</p>
                <ul className="space-y-2">
                  <li><Link to="/about" className="hover:text-primary transition-colors text-sm">About Us</Link></li>
                  <li>
                    <a 
                      href="/#our-services" 
                      onClick={scrollToServices} 
                      className="hover:text-primary transition-colors text-sm"
                    >
                      Services
                    </a>
                  </li>
                  <li><Link to="/pricing" className="hover:text-primary transition-colors text-sm">Pricing</Link></li>
                  <li><Link to="/faq" className="hover:text-primary transition-colors text-sm">FAQ</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors text-sm">Contact</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="font-semibold text-white mb-4 text-md">Legal</p>
                <ul className="space-y-2">
                  <li><Link to="/privacy-policy" className="hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service" className="hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
                  <li><Link to="/sitemap" className="hover:text-primary transition-colors text-sm">Sitemap</Link></li>
                </ul>
              </div>
              
              {/* Contact & Social */}
              <div>
                <p className="font-semibold text-white mb-4 text-md">Connect With Us</p>
                <p className="text-sm mb-2">Jeddah, Saudi Arabia</p>
                <p className="text-sm mb-4"><a href="mailto:info@mytradesolutions.com" className="hover:text-primary">info@mytradesolutions.com</a></p>
                <div className="flex space-x-4">
                  <motion.a href="#" whileHover={iconHover} className="text-neutral-400 hover:text-primary"><Facebook size={20} /></motion.a>
                  <motion.a href="#" whileHover={iconHover} className="text-neutral-400 hover:text-primary"><Twitter size={20} /></motion.a>
                  <motion.a href="#" whileHover={iconHover} className="text-neutral-400 hover:text-primary"><Linkedin size={20} /></motion.a>
                  <motion.a href="#" whileHover={iconHover} className="text-neutral-400 hover:text-primary"><Instagram size={20} /></motion.a>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-700 pt-8 text-center">
              <p className="text-sm">
                &copy; {currentYear} myTradeSolutions. All Rights Reserved.
              </p>
              <p className="text-xs mt-1 text-neutral-500">
                Built with care for secure global trade.
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;