"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "./link";

interface FooterLinkProps extends React.ComponentProps<"a"> {
  children: React.ReactNode;
  href: string;
}

export default function FooterLink({
  children,
  href,
  ...props
}: FooterLinkProps) {
  const variants = {
    idle: {
      x: 0,
    },
    hover: {
      x: 5,
    },
  };

  return (
    <motion.div initial={"idle"} whileHover={"hover"}>
      <Link
        href={href}
        className="no-underline font-sans inline-flex items-center gap-1"
        {...props}
      >
        {children}
        <motion.span variants={variants}>
          <ChevronRight size={16} />
        </motion.span>
      </Link>
    </motion.div>
  );
}
