
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { CheckCircle, Zap, MapPin, Star } from 'lucide-react';
    import { motion } from 'framer-motion';

    const PricingPage = () => {
      const plans = [
        {
          name: "Basic",
          price: "110",
          currency: "USD",
          features: [
            "Standard Site Visit",
            "25+ Photos",
            "Basic Report",
            "72-Hour Delivery",
          ],
          cta: "Choose Basic",
          bgColor: "bg-neutral-100",
          textColor: "text-neutral-800",
          borderColor: "border-neutral-300",
          buttonVariant: "outline"
        },
        {
          name: "Standard",
          price: "200",
          currency: "USD",
          features: [
            "Detailed Site Visit",
            "50+ Photos & Short Video Clips",
            "Comprehensive Report",
            "Live Video Call Option",
            "48-Hour Delivery",
          ],
          cta: "Choose Standard",
          isBestValue: true,
          bgColor: "bg-primary",
          textColor: "text-primary-foreground",
          borderColor: "border-primary",
          buttonVariant: "default",
          buttonClass: "bg-white text-primary hover:bg-neutral-100"
        },
        {
          name: "Premium",
          price: "320",
          currency: "USD",
          features: [
            "Extensive Site Visit & Verification",
            "100+ Photos & Detailed Video Tour",
            "In-depth Analytical Report",
            "Dedicated Live Video Call",
            "Priority 24-48 Hour Delivery",
            "Basic Background Check",
          ],
          cta: "Choose Premium",
          bgColor: "bg-neutral-800",
          textColor: "text-neutral-100",
          borderColor: "border-neutral-700",
          buttonVariant: "default",
          buttonClass: "bg-amber-500 hover:bg-amber-600 text-neutral-800"
        },
      ];

      const addOns = [
        { name: "Urgent 24H Report", price: "+$40", icon: <Zap className="w-5 h-5 mr-2 text-red-500" /> },
        { name: "Multi-Location Visit", price: "+$50 per additional location", icon: <MapPin className="w-5 h-5 mr-2 text-blue-500" /> },
      ];

      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
      };
      
      const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };


      return (
        <div className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <motion.h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4" variants={itemVariants}>
                Our Pricing Plans
              </motion.h1>
              <motion.p className="text-lg text-neutral-600 max-w-2xl mx-auto" variants={itemVariants}>
                Choose the plan that best suits your inspection and verification needs. All prices are transparent with no hidden fees.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              {plans.map((plan, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <Card className={`shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full ${plan.bgColor} ${plan.textColor} border-2 ${plan.borderColor} relative overflow-hidden`}>
                    {plan.isBestValue && (
                      <div className="absolute top-0 right-0 bg-amber-500 text-neutral-800 text-xs font-semibold px-4 py-1 transform translate-x-1/3 -translate-y-1/3 rotate-45" style={{width: '150px', textAlign:'center'}}>
                        <Star className="w-3 h-3 inline-block mr-1" /> Best Value
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className={`text-3xl font-semibold ${plan.textColor}`}>{plan.name}</CardTitle>
                      <CardDescription className={`text-4xl font-bold ${plan.isBestValue ? 'text-white' : plan.textColor === 'text-neutral-100' ? 'text-amber-400' : 'text-primary'} py-2`}>
                        ${plan.price} <span className={`text-sm font-normal ${plan.textColor === 'text-neutral-100' ? 'text-neutral-400' : 'text-neutral-500'}`}>/ {plan.currency}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className={`flex items-start ${plan.textColor}`}>
                            <CheckCircle className={`w-5 h-5 mr-2 mt-0.5 ${plan.isBestValue ? 'text-green-300' : (plan.name === 'Premium' ? 'text-amber-400' : 'text-green-500')}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button 
                        size="lg" 
                        className={`w-full font-semibold ${plan.buttonClass ? plan.buttonClass : ''} `}
                        variant={plan.buttonVariant}
                      >
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mb-16"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl font-bold text-center text-neutral-800 mb-8">Available Add-Ons</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {addOns.map((addOn, index) => (
                   <motion.div key={index} variants={itemVariants}>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6 flex items-center justify-between">
                        <div className="flex items-center">
                          {addOn.icon}
                          <span className="text-lg text-neutral-700 font-medium">{addOn.name}</span>
                        </div>
                        <span className="text-lg text-primary font-semibold">{addOn.price}</span>
                      </CardContent>
                    </Card>
                   </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 rounded-xl shadow-2xl"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="text-3xl font-bold text-white mb-4" variants={itemVariants}>Need a Custom Quote?</motion.h2>
              <motion.p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto" variants={itemVariants}>
                For large volume inspections, specialized requirements, or ongoing partnerships, contact us for a tailored solution.
              </motion.p>
              <motion.div variants={itemVariants} whileHover={{scale: 1.05}} transition={{type: "spring", stiffness: 300}}>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-neutral-800 font-semibold px-8 py-3">
                  Get an Instant Estimate
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      );
    };

    export default PricingPage;
  