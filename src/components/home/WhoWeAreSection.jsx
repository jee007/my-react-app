import React from 'react';
    import { Card, CardContent } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { Eye } from 'lucide-react';

    const WhoWeAreSection = () => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };

      return (
        <motion.section 
          className="py-16 md:py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center text-primary mb-4">
                      <Eye className="w-10 h-10 mr-3" />
                      <h2 className="text-3xl font-bold text-neutral-800">Who We Are</h2>
                    </div>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Based in Jeddah, we help international buyers and sellers verify transactions with confidence. From product inspections to real estate walkthroughs, we save you time, costs, and risk—so you trade with peace of mind.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img  className="rounded-lg shadow-lg object-cover w-full h-64" alt="Inspector working on-site" src="https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
                <img  className="rounded-lg shadow-lg object-cover w-full h-64 mt-8" alt="Happy diverse client shaking hands" src="https://images.unsplash.com/photo-1552345387-6ba8e88460a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
              </motion.div>
            </div>
          </div>
        </motion.section>
      );
    };

    export default WhoWeAreSection;