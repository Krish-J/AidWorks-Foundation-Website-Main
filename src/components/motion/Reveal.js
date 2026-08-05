import React from "react";
import { motion } from "motion/react";

/**
 * Shared entrance motion for the whole site: elements rise a little, sharpen
 * out of a blur and fade in, one after another.
 *
 * Usage:
 *   <Stagger>            // orchestrates the sequence
 *     <Reveal>...</Reveal>   // each child animates in turn
 *     <Reveal>...</Reveal>
 *   </Stagger>
 *
 * `Stagger` fires on scroll by default; pass `onMount` for above-the-fold
 * content that should play the moment the page loads.
 */

const EASE = [0.22, 1, 0.36, 1];

export const revealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(14px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: EASE },
  },
};

/** Same feel, but scaled up from slightly small — for images and panels. */
export const revealScaleVariants = {
  hidden: {
    opacity: 0,
    y: 44,
    scale: 0.97,
    filter: "blur(18px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.15, ease: EASE },
  },
};

export function Stagger({
  children,
  className,
  style,
  as = "div",
  delay = 0.1,
  gap = 0.09,
  onMount = false,
  amount = 0.25,
  once = true,
  ...rest
}) {
  const Component = motion[as] || motion.div;

  const container = {
    hidden: {},
    show: {
      transition: { delayChildren: delay, staggerChildren: gap },
    },
  };

  const trigger = onMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once, amount } };

  return (
    <Component
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      {...trigger}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function Reveal({
  children,
  className,
  style,
  as = "div",
  scale = false,
  ...rest
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      style={style}
      variants={scale ? revealScaleVariants : revealVariants}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** Convenience wrapper for a single element that has no siblings to stagger. */
export function RevealOnce({ children, className, delay = 0, ...rest }) {
  return (
    <Stagger className={className} delay={delay} {...rest}>
      <Reveal>{children}</Reveal>
    </Stagger>
  );
}

export default Reveal;
