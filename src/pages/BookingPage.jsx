import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
    import { Calendar } from "@/components/ui/calendar"
    import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
    import { CalendarPlus as CalendarIcon } from 'lucide-react';
    import { format } from "date-fns"
    import { useToast } from '@/components/ui/use-toast';
    import { cn } from '@/lib/utils';

    const BookingPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceType: '',
        preferredDate: null,
        preferredTime: '',
        location: '',
        details: ''
      });
      const [bookedSlots, setBookedSlots] = useState([]);
      const [isSubmitting, setIsSubmitting] = useState(false);

      useEffect(() => {
        const storedBookings = localStorage.getItem('inspectionBookings');
        if (storedBookings) {
          setBookedSlots(JSON.parse(storedBookings).map(b => ({date: new Date(b.preferredDate), time: b.preferredTime })));
        }
      }, []);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleDateChange = (date) => {
        setFormData(prev => ({ ...prev, preferredDate: date }));
      };

      const handleServiceChange = (value) => {
        setFormData(prev => ({ ...prev, serviceType: value }));
      };
      
      const handleTimeChange = (value) => {
        setFormData(prev => ({ ...prev, preferredTime: value}));
      }

      const isSlotBooked = (date, time) => {
        if (!date || !time) return false;
        return bookedSlots.some(slot => 
          format(slot.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd") && slot.time === time
        );
      };

      const availableTimes = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.preferredDate || !formData.preferredTime) {
          toast({ title: "Missing Information", description: "Please select a date and time.", variant: "destructive" });
          return;
        }
        if (isSlotBooked(formData.preferredDate, formData.preferredTime)) {
          toast({ title: "Slot Unavailable", description: "This time slot is already booked. Please choose another.", variant: "destructive" });
          return;
        }

        setIsSubmitting(true);
        
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

        const currentBookings = JSON.parse(localStorage.getItem('inspectionBookings') || '[]');
        const newBooking = { ...formData, id: Date.now() };
        currentBookings.push(newBooking);
        localStorage.setItem('inspectionBookings', JSON.stringify(currentBookings));
        setBookedSlots(prev => [...prev, {date: new Date(newBooking.preferredDate), time: newBooking.preferredTime}]);

        setIsSubmitting(false);
        toast({
          title: "Booking Request Submitted!",
          description: "We've received your inspection request. We will confirm your booking via email shortly.",
        });
        setFormData({ fullName: '', email: '', phone: '', serviceType: '', preferredDate: null, preferredTime: '', location: '', details: '' });
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
        <div className="bg-gradient-to-br from-primary to-blue-700 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-2xl"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <motion.h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2 text-center" variants={itemVariants}>
                Book Your Inspection
              </motion.h1>
              <motion.p className="text-neutral-600 text-center mb-8" variants={itemVariants}>
                Secure your peace of mind. Schedule an on-site inspection with our experts today.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your Full Name" required className="mt-1" />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="email">Email Address</Label>
                    <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="mt-1" />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="+966 5X XXX XXXX" required className="mt-1" />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Label htmlFor="serviceType">Type of Service</Label>
                  <Select onValueChange={handleServiceChange} name="serviceType" value={formData.serviceType}>
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-inspection">Product Quality Check</SelectItem>
                      <SelectItem value="seller-verification">Seller Verification</SelectItem>
                      <SelectItem value="real-estate-tour">Real Estate Tour</SelectItem>
                      <SelectItem value="urgent-inspection">Urgent 24-Hour Inspection</SelectItem>
                      <SelectItem value="other">Other (Specify in details)</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !formData.preferredDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.preferredDate ? format(formData.preferredDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.preferredDate}
                          onSelect={handleDateChange}
                          initialFocus
                          disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() -1)) }
                        />
                      </PopoverContent>
                    </Popover>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                     <Select onValueChange={handleTimeChange} name="preferredTime" value={formData.preferredTime} disabled={!formData.preferredDate}>
                        <SelectTrigger className="w-full mt-1">
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableTimes.map(time => (
                            <SelectItem 
                              key={time} 
                              value={time} 
                              disabled={isSlotBooked(formData.preferredDate, time)}
                            >
                              {time} {isSlotBooked(formData.preferredDate, time) && "(Booked)"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <Label htmlFor="location">Inspection Location / Address</Label>
                  <Input type="text" name="location" id="location" value={formData.location} onChange={handleChange} placeholder="Street Address, City" required className="mt-1" />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Label htmlFor="details">Additional Details or Specific Requirements</Label>
                  <Textarea name="details" id="details" rows="4" value={formData.details} onChange={handleChange} placeholder="E.g., Specific product models, contact person on-site, etc." className="mt-1" />
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{scale: 0.98}}>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting Request...' : 'Request Inspection'}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      );
    };

    export default BookingPage;