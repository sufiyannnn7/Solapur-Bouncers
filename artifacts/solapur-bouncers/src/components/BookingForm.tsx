import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    location: "",
    time: "",
    bouncers: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, eventType: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedDate = date ? format(date, "PPP") : "Not specified";
    
    const message = `*NEW BOOKING INQUIRY*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Event Type:* ${formData.eventType}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Date:* ${formattedDate}%0A` +
      `*Time:* ${formData.time}%0A` +
      `*Bouncers Needed:* ${formData.bouncers}%0A` +
      `*Message:* ${formData.message}`;

    window.open(`https://wa.me/919011646305?text=${message}`, "_blank");
  };

  return (
    <section id="book" className="py-24 bg-secondary/30 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Secure Your Event</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Book Security <span className="gold-gradient-text">Now</span>
            </h2>
            <p className="text-white/60">Fill out the form below to receive a quick quote via WhatsApp.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-2xl p-6 md:p-10 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange}
                    className="bg-background border-white/10 text-white focus:border-primary focus:ring-primary"
                    placeholder="Enter your full name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-white/80">Event Type</Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="bg-background border-white/10 text-white focus:border-primary focus:ring-primary">
                      <SelectValue placeholder="Select Event Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Wedding">Wedding Security</SelectItem>
                      <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                      <SelectItem value="Festival">Festival</SelectItem>
                      <SelectItem value="VIP Protection">VIP Protection</SelectItem>
                      <SelectItem value="Concert">Concert / Stage</SelectItem>
                      <SelectItem value="Hotel Security">Hotel Security</SelectItem>
                      <SelectItem value="Exhibition">Exhibition</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white/80">Venue / Location</Label>
                  <Input 
                    id="location" 
                    name="location" 
                    required 
                    value={formData.location} 
                    onChange={handleChange}
                    className="bg-background border-white/10 text-white focus:border-primary focus:ring-primary"
                    placeholder="E.g., Grand Hotel, Solapur" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white/80">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal bg-background border-white/10 text-white hover:bg-background/80 hover:text-white focus:border-primary",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-white/80">Time</Label>
                    <Input 
                      id="time" 
                      name="time" 
                      type="time" 
                      required 
                      value={formData.time} 
                      onChange={handleChange}
                      className="bg-background border-white/10 text-white focus:border-primary focus:ring-primary [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bouncers" className="text-white/80">Number of Bouncers Needed</Label>
                  <Input 
                    id="bouncers" 
                    name="bouncers" 
                    type="number" 
                    min="1" 
                    required 
                    value={formData.bouncers} 
                    onChange={handleChange}
                    className="bg-background border-white/10 text-white focus:border-primary focus:ring-primary"
                    placeholder="E.g., 5" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/80">Special Requirements (Optional)</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  className="bg-background border-white/10 text-white focus:border-primary focus:ring-primary min-h-[100px]"
                  placeholder="Any specific instructions..." 
                />
              </div>

              <Button type="submit" className="w-full gold-gradient-bg text-black hover:opacity-90 font-bold uppercase tracking-wider h-14 text-base mt-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Send className="mr-2 h-5 w-5" />
                Send Booking via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}