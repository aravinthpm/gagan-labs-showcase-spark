
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Career = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const careers = [
    {
      title: "Product Manager",
      department: "Product Development",
      location: "Bangalore, India",
      type: "Full-time"
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote, India",
      type: "Full-time"
    },
    {
      title: "Startup Mentor",
      department: "Acceleration Program",
      location: "Delhi, India",
      type: "Part-time"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="careers" className="py-24 bg-gagan-dark" ref={sectionRef}>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Our Team
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
            Be part of India's entrepreneurial revolution and help build the next generation of disruptive startups
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {careers.map((career, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{career.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gagan-purple/20 text-gagan-purple">
                        {career.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gagan-orange/20 text-gagan-orange">
                        {career.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
                        {career.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-white/80 mb-6">Don't see a role that fits your skills?</p>
            <button
              className="bg-gradient-to-r from-gagan-purple to-gagan-orange text-white font-semibold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Send us your CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Career;
