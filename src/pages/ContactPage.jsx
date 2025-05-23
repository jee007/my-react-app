import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, Phone, MapPin } from 'lucide-react';

    const ContactPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      const [isSending, setIsSending] = useState(false);
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSending(false);
        
        // In a real application, you would send this data to your backend.
        // For now, we'll just show a success toast.
        console.log("Form data submitted:", formData);

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
          variant: "default", // 'default' is often green or a positive color in shadcn/ui
        });
        
        setFormData({ name: '', email: '', subject: '', message: '' });
      };
      
      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      
      const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };


      return (
        <div className="bg-neutral-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <motion.h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4" variants={itemVariants}>
                Get In Touch
              </motion.h1>
              <motion.p className="text-lg text-neutral-600 max-w-2xl mx-auto" variants={itemVariants}>
                Have questions or need a custom quote? We're here to help. Fill out the form below or reach out to us directly.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div 
                className="bg-white p-8 md:p-10 rounded-xl shadow-2xl"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="name" className="text-neutral-700">Full Name</Label>
                    <Input 
                      type="text" 
                      name="name" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required 
                      className="mt-1"
                      disabled={isSending}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="email" className="text-neutral-700">Email Address</Label>
                    <Input 
                      type="email" 
                      name="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com" 
                      required 
                      className="mt-1"
                      disabled={isSending}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="subject" className="text-neutral-700">Subject</Label>
                    <Input 
                      type="text" 
                      name="subject" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Inquiry about Product Inspection" 
                      required 
                      className="mt-1"
                      disabled={isSending}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="message" className="text-neutral-700">Message</Label>
                    <Textarea 
                      name="message" 
                      id="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange} 
                      placeholder="Your message here..." 
                      required 
                      className="mt-1"
                      disabled={isSending}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} whileHover={{ scale: isSending ? 1 : 1.02}} whileTap={{scale: isSending ? 1 : 0.98}}>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSending}>
                      {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              <motion.div 
                className="space-y-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
              >
                <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
                  <h3 className="text-2xl font-semibold text-neutral-800 mb-4 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-primary" /> Email Us
                  </h3>
                  <p className="text-neutral-600">
                    For general inquiries or support, please email us at:
                  </p>
                  <a href="mailto:info@mytradesolutions.com" className="text-primary hover:underline font-medium">
                    info@mytradesolutions.com
                  </a>
                </motion.div>
                <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
                  <h3 className="text-2xl font-semibold text-neutral-800 mb-4 flex items-center">
                    <Phone className="w-6 h-6 mr-3 text-primary" /> Call Us
                  </h3>
                  <p className="text-neutral-600">
                    Speak to our team directly during business hours (Sun-Thu, 9am-5pm AST):
                  </p>
                  <a href="tel:+966547698045" className="text-primary hover:underline font-medium">
                    +966 547698045
                  </a>
                </motion.div>
                 <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
                  <h3 className="text-2xl font-semibold text-neutral-800 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-primary" /> Our Office
                  </h3>
                  <p className="text-neutral-600">
                    myTradeSolutions HQ
                    <br />
                    123 Trade Street, Al Hamra
                    <br />
                    Jeddah, Saudi Arabia
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    };

    export default ContactPage;