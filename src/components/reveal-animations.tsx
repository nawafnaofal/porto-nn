"use client";

import { motion, useAnimation, useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

interface BlurIntProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
export const BlurIn = ({
  children,
  className,
  delay = 0,
  duration = 0.8,
}: BlurIntProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

interface BoxRevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
}
export const BoxReveal = ({
  children,
  width = "fit-content",
  duration = 0.5,
  delay = 0,
}: BoxRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ position: "relative", width }}
    >
      {children}
    </motion.div>
  );
};
