"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="fixed left-0 right-0 origin-left bg-blue-600 h-[0.1rem] z-40" style={{ scaleX }} />
    </>
  );
};

export default ProgressBar;
