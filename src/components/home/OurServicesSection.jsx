import React from 'react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { CheckCircle, Users, FileText, ShieldCheck, Star, Briefcase, MapPin, Clock, Zap, TrendingUp } from 'lucide-react';

    const OurServicesSection = ({isPage = false}) => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      const cardHover = {
        scale: 1.03,
        transition: { type: "spring", stiffness: 300 },
      };
      
      const services = [
        {
          title: "For Buyers",
          icon: <Briefcase className="mr-2"/>,
          bgColor: "bg-blue-500",
          items: [
            { icon: <ShieldCheck className="w-5 h-5 mr-2 text-green-300"/>, text: "Seller Verification" },
            { icon: <CheckCircle className="w-5 h-5 mr-2 text-green-300"/>, text: "Product Quality Checks" },
            { icon: <Users className="w-5 h-5 mr-2 text-green-300"/>, text: "Live Video Walkthroughs" },
            { icon: <FileText className="w-5 h-5 mr-2 text-green-300"/>, text: "Document Validation" },
          ]
        },
        {
          title: "For Sellers",
          icon: <TrendingUp className="mr-2"/>,
          bgColor: "bg-green-500",
          items: [
            { icon: <ShieldCheck className="w-5 h-5 mr-2 text-blue-300"/>, text: "Buyer Legitimacy Check" },
            { icon: <Users className="w-5 h-5 mr-2 text-blue-300"/>, text: "Trade Fair Representation" },
            { icon: <FileText className="w-5 h-5 mr-2 text-blue-300"/>, text: "Video Demonstrations" },
          ]
        },
        {
          title: "Special Services",
          icon: <Star className="mr-2"/>,
          bgColor: "bg-amber-500",
          textColor: "text-neutral-800",
          items: [
            { icon: <Zap className="w-5 h-5 mr-2 text-red-600"/>, text: "Supplier Sourcing" },
            { icon: <MapPin className="w-5 h-5 mr-2 text-red-600"/>, text: "Real Estate Tours" },
            { icon: <Clock className="w-5 h-5 mr-2 text-red-600"/>, text: "24-Hour Urgent Inspections" },
          ]
        }
      ];

      return (
        <motion.section 
          id="our-services"
          className={`py-16 md:py-24 ${isPage ? 'bg-neutral-50' : 'bg-neutral-100'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <h1 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isPage ? 'text-primary' : 'text-neutral-800'}`}>
              {isPage ? 'Comprehensive Inspection Services' : 'Our Services'}
            </h1>
            {isPage && (
                 <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
                    We offer a wide range of on-site verification and inspection services tailored to meet the unique needs of international buyers and sellers. Our local experts in Jeddah ensure you get accurate, real-time information.
                 </p>
             )}
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, sIndex) => (
                <motion.div whileHover={cardHover} key={sIndex}>
                  <Card className={`${service.bgColor} ${service.textColor || 'text-white'} shadow-lg h-full flex flex-col`}>
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold flex items-center">{service.icon}{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow">
                      {service.items.map((item, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {item.icon} <span className="text-base">{item.text}</span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      );
    };

    export default OurServicesSection;