import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fadeIn"
    | "slideUp"
    | "scaleIn"
    | "rotateIn"
    | "flipX"
    | "flipY"
    | "staggered";
  delay?: number;
  id?: string;
}

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0, transition: { duration: 0.8 } },
  },
  flipX: {
    initial: { opacity: 0, rotateX: 90 },
    animate: { opacity: 1, rotateX: 0, transition: { duration: 0.8 } },
  },
  flipY: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } },
  },
  staggered: {
    initial: { opacity: 0, y: 30 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  },
};

export default function MotionWrapper({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
  id = "motion-wrapper",
}: MotionWrapperProps) {
  const variant = animationVariants[animation];
  return (
    <motion.div
      initial={variant.initial}
      animate={
        typeof variant.animate === "function" ? "animate" : variant.animate
      }
      transition={{ delay }}
      custom={delay} // Si es necesario manejar delays dinámicos
      variants={
        animation === "staggered"
          ? {
              animate: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: i * 0.15 },
              }),
            }
          : undefined
      }
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}
