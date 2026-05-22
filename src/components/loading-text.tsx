"use client";

import { cn } from "@/utils/tailwind";
import { motion } from "motion/react";

interface TextShineProps {
  children: React.ReactNode;
  className?: string;
}

export function LoadingText({ children, className }: TextShineProps) {
  return (
    <motion.h1
      className={cn(
        "bg-[linear-gradient(110deg,#bfbfbf,35%,#000,50%,#bfbfbf,75%,#bfbfbf)] dark:bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)]",
        "bg-[length:200%_100%] bg-clip-text text-base font-medium text-transparent",
        className
      )}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    >
      {children}
    </motion.h1>
  );
}
