import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Props interface for type safety
interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  imageUrl: string;
}

// Animation variants for the container to orchestrate staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Animation variants for child elements (text and buttons)
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      primaryButtonText,
      primaryButtonHref,
      secondaryButtonText,
      secondaryButtonHref,
      imageUrl,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />

        {/* Optional: Add a subtle overlay for better text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/85 via-black/70 to-[#050505]" aria-hidden="true" />

        {/* Content Container */}
        <motion.div
          className="z-10 flex max-w-4xl flex-col items-center justify-center text-center text-white px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Title */}
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.08]"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed md:text-xl text-[#B0B0B0] font-sans font-light"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* Animated Button Group */}
          <motion.div className="mt-10 flex items-center gap-x-4 flex-wrap justify-center gap-y-4 font-mono text-xs uppercase tracking-widest" variants={itemVariants}>
            <a
              href={primaryButtonHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-[#E5E5E5] transition-all shadow-xl active:scale-95"
            >
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#141414] text-white border border-[#333333] font-medium rounded-sm hover:bg-[#202020] hover:border-[#555555] transition-all active:scale-95"
            >
              {secondaryButtonText}
            </a>
          </motion.div>
        </motion.div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
