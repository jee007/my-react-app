import React, { useEffect } from 'react';
    import OurServicesSection from '@/components/home/OurServicesSection';
    import { motion } from 'framer-motion';

    const ServicesPage = () => {
      useEffect(() => {
        const servicesSection = document.getElementById('our-services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Fallback if the ID is not found immediately, perhaps due to rendering delays
          setTimeout(() => {
            const servicesSectionRetry = document.getElementById('our-services');
            if (servicesSectionRetry) {
              servicesSectionRetry.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }, []);

      return (
        <div className="bg-neutral-50 text-neutral-800 pt-16 md:pt-24">
           <OurServicesSection isPage={true} />
        </div>
      );
    };

    export default ServicesPage;