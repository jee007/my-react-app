import React, { useState } from 'react';
    import { Link, NavLink, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Menu, X, Eye } from 'lucide-react';

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const navigate = useNavigate();

      const navItemVariants = {
        hover: { scale: 1.1, color: "hsl(var(--primary))", transition: { type: "spring", stiffness: 300 } },
        tap: { scale: 0.95 }
      };
      
      const mobileMenuVariants = {
        open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
        closed: { opacity: 0, y: "-100%", transition: { type: "spring", stiffness: 300, damping: 24 } }
      };

      const scrollToServices = (e, mobileContext = false) => {
        e.preventDefault();
        if (mobileContext) setIsOpen(false);
        
        if (window.location.pathname === '/') {
          const servicesSection = document.getElementById('our-services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate('/#our-services');
        }
      };

      const NavLinks = ({isMobile = false}) => (
        <>
          <motion.div variants={navItemVariants} whileHover="hover" whileTap="tap">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${isMobile ? 'block' : ''} ${isActive && window.location.pathname === '/' ? 'text-primary bg-primary/10' : 'text-neutral-700 hover:text-primary'}`
              }
              onClick={() => isMobile && setIsOpen(false)}
            >
              Home
            </NavLink>
          </motion.div>
          <motion.div variants={navItemVariants} whileHover="hover" whileTap="tap">
            <a 
              href="/#our-services" 
              onClick={(e) => scrollToServices(e, isMobile)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${isMobile ? 'block' : ''} text-neutral-700 hover:text-primary`}
            >
              Services
            </a>
          </motion.div>
          <motion.div variants={navItemVariants} whileHover="hover" whileTap="tap">
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${isMobile ? 'block' : ''} ${isActive ? 'text-primary bg-primary/10' : 'text-neutral-700 hover:text-primary'}`
              }
              onClick={() => isMobile && setIsOpen(false)}
            >
              Pricing
            </NavLink>
          </motion.div>
          <motion.div variants={navItemVariants} whileHover="hover" whileTap="tap">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${isMobile ? 'block' : ''} ${isActive ? 'text-primary bg-primary/10' : 'text-neutral-700 hover:text-primary'}`
              }
              onClick={() => isMobile && setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </motion.div>
        </>
      );


      return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity">
                <Eye className="h-8 w-8" />
                <span className="font-bold text-xl">myTradeSolutions</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-4">
                <NavLinks />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                   <Link to="/book-inspection">
                    <Button className="cta-gold">Book Now</Button>
                  </Link>
                </motion.div>
              </div>

              <div className="md:hidden flex items-center">
                <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-neutral-700">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div 
            className={`md:hidden fixed inset-x-0 top-16 bg-white shadow-lg p-4 z-40 ${isOpen ? 'block' : 'hidden'}`}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={mobileMenuVariants}
          >
            <div className="space-y-3">
              <NavLinks isMobile={true} />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                <Link to="/book-inspection" className="w-full block">
                  <Button className="w-full cta-gold" onClick={() => setIsOpen(false)}>Book Now</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </nav>
      );
    };

    export default Navbar;