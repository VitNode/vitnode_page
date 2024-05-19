"use client";

import { motion } from "framer-motion";

export const VideoHome = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.25
      }}
      className="aspect-video rounded-xl overflow-hidden mt-20 shadow-2xl lg:h-96"
      transition={{
        duration: 0.5,
        ease: "circInOut"
      }}
    >
      <video loop muted autoPlay>
        <source src="/videos/hero-demo.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};
