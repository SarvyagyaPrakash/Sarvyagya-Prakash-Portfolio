import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRIMARY_SKILLS = [
  { name: "Intelligent Agents & Orchestration", level: 95 },
  { name: "AI Engineering & Retrieval-Augmented Generation", level: 85 },
  { name: "Backend Architecture & API Development", level: 90 },
  { name: "Frontend & Interactive UI Development", level: 85 },
  { name: "Database Design & Management", level: 80 }
];

const MARQUEE_TRACK_1 = [
  "Git", "LangGraph", "Swift", "Ollama", "TensorFlow", "Hugging Face", "PostgreSQL", "PyTorch", "OpenCV"
];

const MARQUEE_TRACK_2 = [
  "Docker", "Redis", "Firebase", "C++", "FastAPI", "Tailwind CSS", "Flutter", "LangChain", "Flask"
];

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="font-display text-sm font-bold text-text-main">
          {name}
        </span>
        <span className="font-body text-xs font-semibold text-accent-main">
          {isInView ? `${level}%` : "0%"}
        </span>
      </div>
      
      {/* Outer track */}
      <div className="w-full h-[6px] bg-divider/40 rounded-full overflow-hidden">
        {/* Animated Fill */}
        <motion.div
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${level}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-accent-main rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-36 px-6 md:px-12 bg-bg-main border-b border-divider overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Sticky Left Column: Heading */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:h-fit">
          <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent-main block mb-3">
            What I Know
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-text-main leading-tight">
            Skills & Tools
          </h2>
          <div className="w-12 h-[2px] bg-accent-main mt-6 hidden lg:block" />
        </div>

        {/* Right Column: Skill Bars & Marquee */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Primary Skills Grid */}
          <div className="space-y-8">
            <h3 className="font-display text-xl font-bold text-text-main">
              Core Competencies
            </h3>
            <div className="space-y-6">
              {PRIMARY_SKILLS.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Secondary Tools Scrolling Marquees */}
          <div className="space-y-8 pt-6 border-t border-divider">
            <h3 className="font-display text-xl font-bold text-text-main">
              Tools & Technologies
            </h3>
            
            <div className="space-y-4 -mx-6 md:-mx-12 overflow-hidden relative">
              {/* Subtle fade overlay on edges */}
              <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />

              {/* Track 1: Left to Right */}
              <div className="flex whitespace-nowrap overflow-hidden">
                <div className="flex space-x-4 animate-marquee py-2 select-none">
                  {/* Repeat items to create continuous loop */}
                  {[...MARQUEE_TRACK_1, ...MARQUEE_TRACK_1].map((tool, idx) => (
                    <span
                      key={`${tool}-${idx}`}
                      className="interactive inline-block font-body text-xs font-semibold px-5 py-2.5 rounded-full border border-card-border bg-card-bg text-text-main hover:border-accent-main transition-colors"
                      data-cursor-type="link"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Track 2: Right to Left */}
              <div className="flex whitespace-nowrap overflow-hidden">
                <div className="flex space-x-4 animate-marquee-reverse py-2 select-none">
                  {[...MARQUEE_TRACK_2, ...MARQUEE_TRACK_2].map((tool, idx) => (
                    <span
                      key={`${tool}-${idx}`}
                      className="interactive inline-block font-body text-xs font-semibold px-5 py-2.5 rounded-full border border-card-border bg-card-bg text-text-main hover:border-accent-main transition-colors"
                      data-cursor-type="link"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
