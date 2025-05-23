import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';

    const HeroSection = () => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      const buttonHover = {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      };

      return (
        <motion.section 
          className="relative py-28 md:py-40 bg-cover bg-center min-h-[60vh] md:min-h-[70vh] flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{ backgroundColor: '#1F2937' }} 
        >
          <div className="absolute inset-0 -z-10">
            <img  className="w-full h-full object-cover" alt="Clear view of an inspector meticulously checking goods in a well-lit Saudi warehouse" src="https://images.unsplash.com/photo-1670176007449-7e548eb98b38" />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your Trusted Eyes on the Ground
            </motion.h1>
            <motion.p 
              className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Professional On-Site Inspection & Verification for Global Trade – No Travel Required.
            </motion.p>
            <motion.div 
              className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={buttonHover}>
                <Link to="/book-inspection">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">Book an Inspection Now</Button>
                </Link>
              </motion.div>
              <motion.div whileHover={buttonHover}>
                <Link to="/pricing">
                  <Button 
                    size="lg" 
                    className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-neutral-800 font-semibold w-full sm:w-auto"
                  >
                    Get a Free Quote
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      );
    };

    export default HeroSection;