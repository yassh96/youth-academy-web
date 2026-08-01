"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants = {
  up: {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0  },
  },
  left: {
    hidden:  { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0   },
  },
  right: {
    hidden:  { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0  },
  },
  none: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function ScrollReveal({
  children,
  delay     = 0,
  direction = "up",
  duration  = 0.65,
  className = "",
  once      = true,
}: ScrollRevealProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
