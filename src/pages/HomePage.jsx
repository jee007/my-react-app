import React, { useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { ArrowRight } from 'lucide-react';
    import HeroSection from '@/components/home/HeroSection';
    import WhoWeAreSection from '@/components/home/WhoWeAreSection';
    import OurServicesSection from '@/components/home/OurServicesSection';
    import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
    import HowItWorksSection from '@/components/home/HowItWorksSection';
    import TestimonialsSection from '@/components/home/TestimonialsSection';

    const HomePage = () => {
      const location = useLocation();

      useEffect(() => {
        if (location.hash === '#our-services') {
          const servicesSection = document.getElementById('our-services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);

      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };

      const buttonHover = {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      };
      

      return (
        <div className="bg-neutral-50 text-neutral-800">
          <HeroSection />
          <WhoWeAreSection />
          <OurServicesSection />
          <WhyChooseUsSection />
          <HowItWorksSection />
          <TestimonialsSection />

          {/* Call to Action to Pricing Page */}
          <motion.section 
            className="py-16 md:py-24 bg-neutral-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800">Ready to Secure Your Trade?</h2>
              <p className="text-lg text-neutral-600 mb-10 max-w-xl mx-auto">
                Explore our transparent pricing plans and find the perfect fit for your inspection needs. Get started today for peace of mind.
              </p>
              <motion.div whileHover={buttonHover}>
                <Link to="/pricing">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Pricing Plans <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </div>
      );
    };

    export default HomePage;