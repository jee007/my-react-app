import React from 'react';
    import { motion } from 'framer-motion';
    import { MapPin, FileText, ShieldCheck, Clock } from 'lucide-react';

    const WhyChooseUsSection = () => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      const reasons = [
        { icon: <MapPin className="w-10 h-10 mx-auto text-primary mb-3"/>, text: "Local Experts – Jeddah-based, Arabic/English fluent" },
        { icon: <FileText className="w-10 h-10 mx-auto text-primary mb-3"/>, text: "Real-Time Proof – Photos, videos, geotagged reports" },
        { icon: <ShieldCheck className="w-10 h-10 mx-auto text-primary mb-3"/>, text: "Unbiased – No commissions, just facts" },
        { icon: <Clock className="w-10 h-10 mx-auto text-primary mb-3"/>, text: "Fast Turnaround – Reports in 24–48 hours" },
      ];

      return (
        <motion.section 
          className="py-16 md:py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-800">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {reasons.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="p-6 bg-neutral-50 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.icon}
                  <p className="text-neutral-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-6 dark:bg-gray-700">
                <motion.div 
                  className="bg-accent h-6 rounded-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none flex items-center justify-center"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                   100% Client Satisfaction
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      );
    };

    export default WhyChooseUsSection;