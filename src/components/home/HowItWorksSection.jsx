import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { FileText } from 'lucide-react';
    import SampleReportModal from '@/components/home/SampleReportModal';

    const HowItWorksSection = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      const buttonHover = {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      };
      const steps = [
        { num: 1, title: "Submit Request", desc: "Fill out our simple online form with your inspection needs." },
        { num: 2, title: "We Confirm", desc: "Our team reviews your request and confirms the details and schedule." },
        { num: 3, title: "On-Site Visit", desc: "Our local inspector conducts the verification at the specified location." },
        { num: 4, title: "Get Report", desc: "Receive a comprehensive report with findings, photos, and videos." },
      ];

      return (
        <>
          <motion.section 
            className="py-16 md:py-24 bg-neutral-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-neutral-800">How It Works</h2>
              <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/30 -translate-y-1/2 z-0"></div>
                <div className="grid md:grid-cols-4 gap-8 relative z-10">
                  {steps.map((step, index) => (
                    <motion.div 
                      key={index} 
                      className="relative text-center md:text-left p-6 bg-white rounded-lg shadow-lg"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-6 md:-top-6 md:translate-x-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                        {step.num}
                      </div>
                      <h3 className="text-xl font-semibold mt-8 md:mt-10 mb-2 text-neutral-800">{step.title}</h3>
                      <p className="text-neutral-600 text-sm">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div whileHover={buttonHover}>
                 <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => setIsModalOpen(true)}
                  >
                  See a Sample Report <FileText className="ml-2 w-5 h-5" />
                 </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
          <SampleReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
      );
    };
    export default HowItWorksSection;