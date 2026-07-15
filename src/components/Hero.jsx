import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, FileUser } from "lucide-react";
import Magnetic from "./Magnetic";

const TAGLINES = [
  "Passionate about making AI practical, private, and inclusive for everyone.",
  "Turning complex technologies into intuitive experiences.",
  "Crafting retrieval-augmented systems that actually understand context."
];

// Helper component for count-up animations
function CountUpNumber({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    // Extract numbers from placeholders like "[10]" or just "10"
    const numberStr = String(value).replace(/[^0-9]/g, "");
    const end = parseInt(numberStr, 10) || 0;
    if (end === 0) {
      setCount(value);
      return;
    }

    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.floor((end * step) / totalSteps);
      
      // Put the formatted string back (preserving brackets if any, or just outputting raw count)
      if (typeof value === "string" && value.includes("[")) {
        setCount(value.replace(/[0-9]+/, current));
      } else {
        setCount(current);
      }

      if (step >= totalSteps) {
        clearInterval(timer);
        setCount(value); // Ensure precise ending
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  // Rotating taglines interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);



  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden px-6 md:px-12 bg-bg-main text-text-main"
    >
      {/* Decorative subtle background shape */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-accent-main/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-80 h-80 bg-accent-main/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start space-y-6"
        >
          {/* Availability Badge */}
          <div className="flex items-center space-x-2 bg-accent-main/10 border border-accent-main/20 px-4 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-main opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-main"></span>
            </span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-accent-main">
              Available for Internship / Full-time
            </span>
          </div>

          {/* Large Title */}
          <div className="space-y-2">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-text-main leading-none">
              Hi, I'm <span className="text-accent-main">Sarvyagya Prakash</span>
            </h1>

            {/* Tagline Rotation Container with fixed height to prevent layout shifts */}
            <div className="h-10 md:h-12 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={taglineIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-lg md:text-2xl font-bold tracking-tight text-text-main/80"
                >
                  {TAGLINES[taglineIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <p className="font-body text-base md:text-lg text-text-main/70 max-w-xl leading-relaxed">
            Passionate about embedding intelligence into systems, building AI-powered platforms with real-time feeds and semantic search, combining engineering rigor, emerging tech, and creative problem-solving at the infrastructure and application intersection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Magnetic range={20}>
              <a
                href="#projects"
                className="interactive flex items-center justify-center space-x-2 w-44 bg-accent-main text-bg-main px-6 py-3.5 rounded-full font-body text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                data-cursor-type="link"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
            </Magnetic>

            <Magnetic range={20}>
              <a
                href="https://drive.google.com/file/d/1P7PkdkoA0kzlqjkRIodfXE57_NprIxYh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive flex items-center justify-center space-x-2 w-44 border border-card-border text-text-main hover:bg-card-border/10 px-6 py-3.5 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-colors"
                data-cursor-type="link"
              >
                <FileUser size={16} />
                <span>Resume</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right Column: Profile Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Animated Accent Backing Shape */}
          <div className="absolute inset-0 bg-accent-main/20 organic-border w-72 h-72 md:w-80 md:h-80 -rotate-6 z-0" />

          {/* Interactive Tilt Portrait Frame */}
          <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 overflow-hidden organic-border border-4 border-bg-main shadow-xl bg-card-bg">
            <img
              src="/src/assets/profile.jpg"
              alt="Sarvyagya Prakash Portrait"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                // Safe fallback if image is missing/still generating
                e.target.style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Full-width Divider Line */}
      <div className="w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] -mx-6 md:-mx-12 border-t border-divider mt-12" />

      {/* Quick Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full pt-8 grid grid-cols-3 gap-4 text-center"
      >
        <div className="flex flex-col items-center">
          <div className="relative inline-block font-display text-3xl md:text-5xl font-extrabold text-accent-main">
            <CountUpNumber value="[7]" />
            <span className="absolute left-full top-0 ml-0.5">+</span>
          </div>
          <p className="font-body text-[10px] md:text-xs font-semibold uppercase tracking-wider text-text-main/50 mt-1">
            Certifications
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative inline-block font-display text-3xl md:text-5xl font-extrabold text-accent-main">
            <CountUpNumber value="[10]" />
            <span className="absolute left-full top-0 ml-0.5">+</span>
          </div>
          <p className="font-body text-[10px] md:text-xs font-semibold uppercase tracking-wider text-text-main/50 mt-1">
            Projects
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative inline-block font-display text-3xl md:text-5xl font-extrabold text-accent-main">
            <CountUpNumber value="[2]" />
            <span className="absolute left-full top-0 ml-0.5">+</span>
          </div>
          <p className="font-body text-[10px] md:text-xs font-semibold uppercase tracking-wider text-text-main/50 mt-1">
            Experiences
          </p>
        </div>
      </motion.div>
    </section>
  );
}
