"use client";

import React from "react";
import { AnimationProps, motion } from "framer-motion";

const defaultTransition = { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] };
const defaultVariants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

interface BlurTextAnimationProps {
  children: React.ReactNode;
  split?: "word" | "letter";
  className?: string;
  once?: boolean;
  stagger?: number;
  variants?: AnimationProps["variants"];
  transition?: AnimationProps["transition"];
  delayChildren?: number;
  delay?: number;
}

export function BlurTextAnimation({
  children = "",
  split = "word",
  className = "",
  once = true,
  stagger = 0.08,
  variants = defaultVariants,
  transition = defaultTransition,
  delayChildren = 0,
  delay = 0,
}: BlurTextAnimationProps) {
  const isStringChild =
    typeof children === "string" || typeof children === "number";

  const tokens = isStringChild ? String(children).split(/(\s+)/) : [];

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{
        staggerChildren: stagger,
        delayChildren: delayChildren,
        delay: delay,
      }}
    >
      {isStringChild ? (
        tokens.map((tok, i) => {
          if (/\s+/.test(tok)) {
            return tok;
          }

          if (split === "letter") {
            return (
              <React.Fragment key={`w-${i}`}>
                {Array.from(tok).map((ch, j) => (
                  <motion.span
                    key={`w-${i}-ch-${j}`}
                    className="inline-block"
                    variants={variants}
                    transition={{
                      ...transition,
                      delayChildren: delayChildren,
                      delay: delay,
                    }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </React.Fragment>
            );
          } else {
            // default: per-word animation
            return (
              <motion.span
                key={`w-${i}`}
                className="inline-block"
                variants={variants}
                transition={{
                  ...transition,
                  delayChildren: delayChildren,
                  delay: delay,
                }}
              >
                {tok}
              </motion.span>
            );
          }
        })
      ) : (
        // Non-string children (React element(s)): animate the whole children node once
        <motion.span
          className="inline-block"
          variants={variants}
          transition={{
            ...transition,
            delayChildren: delayChildren,
            delay: delay,
          }}
        >
          {children}
        </motion.span>
      )}
    </motion.p>
  );
}

export default BlurTextAnimation;
