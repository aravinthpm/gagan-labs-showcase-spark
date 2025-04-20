
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormState({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 (123) 456-7890",
      description: "Monday to Friday, 9am to 6pm IST"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@gaganlabs.in",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MessageSquare,
      title: "Visit Us",
      details: "Bangalore, India",
      description: "Book an appointment"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gagan-dark" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gagan-purple to-gagan-orange mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Ready to take your startup to the next level? We're here to help!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="bg-white/10 p-3 rounded-lg">
                    <info.icon className="w-6 h-6 text-gagan-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                    <p className="text-gagan-purple font-medium mb-1">{info.details}</p>
                    <p className="text-white/60 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2">Name</Label>
                <Input
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white mb-2">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white mb-2">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 p-3 focus:outline-none focus:ring-2 focus:ring-gagan-purple"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-gagan-purple to-gagan-orange hover:opacity-90 text-white font-semibold py-2"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
