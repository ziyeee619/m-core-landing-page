import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Reveal = ({
  children,
  delay = 0,
  x = 0,
  y = 40,
  scale = 0.98,
  rotate = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y, scale, rotate }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
