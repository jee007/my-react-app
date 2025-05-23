import React from 'react';
    import { motion } from 'framer-motion';
    import { BarChart, Award, MessageSquare, Lock } from 'lucide-react';

    const TestimonialsSection = () => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      const trustBadges = [
        { icon: <Award className="w-8 h-8 text-amber-300" />, text: "ISO 9001 Certified (Simulated)" },
        { icon: <BarChart className="w-8 h-8 text-amber-300" />, text: "200+ Inspections Completed" },
        { icon: <Lock className="w-8 h-8 text-amber-300" />, text: "Secure Transactions" },
      ];

      return (
        <motion.section 
          className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-600 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <motion.div 
              className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MessageSquare className="w-12 h-12 text-amber-400 mb-4 mx-auto" />
              <p className="text-lg italic text-center mb-6">
                "myTradeSolutions verified our Saudi supplier when we couldn’t travel. Their report uncovered hidden risks—saved us $50K!"
              </p>
              <p className="font-semibold text-center">– Emma K., London Importer</p>
            </motion.div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12">
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {badge.icon} <span>{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      );
    };

    export default TestimonialsSection;