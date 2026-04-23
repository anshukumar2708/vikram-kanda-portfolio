"use client";

import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView"> {
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
}

const offsetFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

/**
 * Reveal wraps any content with a smooth, viewport-triggered entrance animation.
 * Honors prefers-reduced-motion automatically.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  once = true,
  className,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion ? { x: 0, y: 0 } : offsetFor(direction, distance);

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
