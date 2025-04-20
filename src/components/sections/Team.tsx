
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const teamMembers = [
    {
      name: "Director & CEO",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      description: "Leading Gagan Labs with a vision to transform India's entrepreneurial landscape.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#"
      }
    },
    {
      name: "Director & CTO",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "Driving technological innovation and providing strategic guidance.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#"
      }
    },
    {
      name: "Head of DevOps",
      role: "Infrastructure & Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Ensuring robust infrastructure and optimized processes.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#"
      }
    },
    {
      name: "Head of Web Development",
      role: "Web Technologies Leader",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      description: "Overseeing development of cutting-edge web solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#"
      }
    }
  ];

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram
  };

  return (
    <section id="team" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet Our Leadership
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gagan-purple to-gagan-orange mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our experienced team is dedicated to nurturing the next generation of Indian entrepreneurs
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white">
                <div className="relative aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gagan-dark/90 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-6"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-sm">{member.description}</p>
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gagan-purple font-medium mb-4">{member.role}</p>
                    <div className="flex justify-center gap-4">
                      {Object.entries(member.social).map(([platform, url]) => {
                        const Icon = socialIcons[platform as keyof typeof socialIcons];
                        return (
                          <motion.a
                            key={platform}
                            href={url}
                            className="text-gray-600 hover:text-gagan-purple transition-colors duration-300"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Icon className="w-5 h-5" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
