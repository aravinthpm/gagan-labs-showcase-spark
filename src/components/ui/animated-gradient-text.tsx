
import { motion } from "framer-motion";

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

export const AnimatedGradientText = ({
  text,
  className = "",
}: AnimatedGradientTextProps) => {
  return (
    <motion.div
      className={`bg-clip-text text-transparent bg-gradient-to-r from-gagan-purple via-gagan-orange to-gagan-purple bg-size-200 ${className}`}
      style={{
        backgroundSize: "200% auto",
      }}
      animate={{
        backgroundPosition: ["0% center", "200% center", "0% center"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.div>
  );
};
