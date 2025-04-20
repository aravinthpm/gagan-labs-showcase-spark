
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VisionMission = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const cards = [
    {
      title: "Vision",
      content: "To ignite India's entrepreneurial spirit by transforming bold ideas into thriving enterprises—driving innovation, self-reliance, and global impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gagan-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-gagan-purple/10 to-gagan-purple/20"
    },
    {
      title: "Mission",
      content: "Gagan Labs empowers aspiring founders with the guidance, resources, and network they need to build, launch, and scale disruptive businesses. Through mentorship, capital access, and hands‑on support, we accelerate your journey from concept to market leader.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gagan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-gagan-orange/10 to-gagan-orange/20"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-gradient-to-b from-gagan-dark to-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-3"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gagan-purple to-gagan-orange flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Vision & Mission
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gagan-purple to-gagan-orange mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our core principles that drive everything we do at Gagan Labs
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300 border border-white/10 shadow-xl`}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 10, 0],
                    transition: { 
                      duration: 5, 
                      ease: "easeInOut", 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                >
                  {card.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">{card.title}</h3>
              <p className="text-white/80 text-center leading-relaxed">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
