"use client";

import { motion, Transition } from "motion/react";
import React, { ReactNode, useEffect, useState } from "react";

export type BlurInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  blur?: string;
  className?: string;
  yOffset?: number;
};

export function BlurIn({
  children,
  className,
  delay = 0,
  duration = 0.2,
  blur = "4px",
  yOffset = 12,
}: BlurInProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur})`,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  const transition: Transition = {
    duration,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94],
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
