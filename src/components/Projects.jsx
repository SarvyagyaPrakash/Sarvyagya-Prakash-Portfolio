import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";

const PROJECTS = [
  {
    id: "featured-1",
    isFeatured: true,
    title: "[Featured Project: E-Commerce Grid]",
    desc: "[A highly performant, custom-grid layout shop interface utilizing React Server Components, customized layout transitions, and server-side state synchronizations.]",
    tags: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    demoLink: "#demo-link",
    githubLink: "#git-link",
    // Custom abstract graphic markup
    graphic: (
      <svg viewBox="0 0 400 250" className="w-full h-full object-cover text-text-main/5 bg-divider/20">
        <circle cx="150" cy="120" r="80" fill="currentColor" opacity="0.3" />
        <rect x="200" y="80" width="120" height="120" fill="currentColor" opacity="0.2" rx="10" />
        <line x1="50" y1="50" x2="350" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
        <text x="50" y="220" fontFamily="Syne" fontSize="16" fontWeight="bold" className="fill-accent-main opacity-60">GRID.OS</text>
      </svg>
    )
  },
  {
    id: "project-2",
    isFeatured: false,
    title: "[Project Name: Editorial Reader]",
    desc: "[An experimental web-based reader tailored for long-form editorial essays, with fluid typography scales, custom key bindings, and reading analytics.]",
    tags: ["TypeScript", "Vite", "CSS Grid", "Canvas"],
    demoLink: "#demo-link",
    githubLink: "#git-link",
    graphic: (
      <svg viewBox="0 0 300 200" className="w-full h-full object-cover text-text-main/5 bg-divider/20">
        <rect x="40" y="40" width="220" height="120" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="60" y1="70" x2="240" y2="70" stroke="currentColor" strokeWidth="2" />
        <line x1="60" y1="95" x2="200" y2="95" stroke="currentColor" strokeWidth="1" />
        <line x1="60" y1="115" x2="220" y2="115" stroke="currentColor" strokeWidth="1" />
        <text x="200" y="150" fontFamily="Syne" fontSize="12" fontWeight="bold" className="fill-accent-main opacity-60">TXT.02</text>
      </svg>
    )
  },
  {
    id: "project-3",
    isFeatured: false,
    title: "[Project Name: Morphing Vector API]",
    desc: "[A service to dynamically generate and animate SVG morph shapes via URL queries, optimized for high concurrency serverless workers.]",
    tags: ["Node.js", "Serverless", "Wasm", "SVG"],
    demoLink: "#demo-link",
    githubLink: "#git-link",
    graphic: (
      <svg viewBox="0 0 300 200" className="w-full h-full object-cover text-text-main/5 bg-divider/20">
        <path d="M 70,100 C 70,50 120,40 150,60 C 180,80 230,60 230,100 C 230,150 170,160 150,140 C 120,120 70,150 70,100 Z" fill="currentColor" opacity="0.25" />
        <line x1="150" y1="20" x2="150" y2="180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4" />
        <line x1="30" y1="100" x2="270" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4" />
        <text x="40" y="40" fontFamily="Syne" fontSize="12" fontWeight="bold" className="fill-accent-main opacity-60">SHP.API</text>
      </svg>
    )
  },
  {
    id: "project-4",
    isFeatured: false,
    title: "[Project Name: Spatial Audio Deck]",
    desc: "[A spatial Web Audio synthesizer deck that positions tracks in virtual 3D space based on mouse gestures, featuring custom fluid nodes.]",
    tags: ["React", "Web Audio API", "Three.js"],
    demoLink: "#demo-link",
    githubLink: "#git-link",
    graphic: (
      <svg viewBox="0 0 300 200" className="w-full h-full object-cover text-text-main/5 bg-divider/20">
        <circle cx="150" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="150" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="100" r="10" fill="currentColor" opacity="0.3" />
        <circle cx="210" cy="70" r="6" fill="currentColor" className="text-accent-main" />
        <text x="210" y="55" fontFamily="Syne" fontSize="10" fontWeight="bold" className="fill-accent-main opacity-60">NODE.01</text>
      </svg>
    )
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 18 }
    }
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-36 px-6 md:px-12 bg-bg-main border-b border-divider"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-divider pb-8">
          <div>
            <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent-main block mb-3">
              My Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-text-main">
              Projects
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Magnetic range={20}>
              <a
                href="https://github.com/SarvyagyaPrakash"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive flex items-center justify-center space-x-2 w-44 bg-accent-main text-bg-main px-6 py-3.5 rounded-full font-body text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                data-cursor-type="link"
              >
                <Github size={16} />
                <span>View GitHub</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Projects Layout Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {PROJECTS.map((project) => {
            if (project.isFeatured) {
              return (
                /* Featured Project Card */
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="lg:col-span-12"
                >
                  <TiltCard maxTilt={4} className="w-full">
                    <div
                      className="interactive p-6 md:p-8 rounded-3xl bg-card-bg border border-card-border grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                      data-cursor-type="view"
                    >
                      {/* Graphics Area */}
                      <div className="lg:col-span-7 h-64 md:h-80 rounded-2xl overflow-hidden border border-card-border relative">
                        {project.graphic}
                      </div>

                      {/* Content Area */}
                      <div className="lg:col-span-5 flex flex-col justify-between py-2">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-accent-main">
                            <span>Featured Project</span>
                            <span className="w-1.5 h-1.5 bg-accent-main rounded-full animate-pulse" />
                          </div>
                          <h3 className="font-display text-2xl font-extrabold text-text-main tracking-tight">
                            {project.title}
                          </h3>
                          <p className="font-body text-sm text-text-main/60 leading-relaxed">
                            {project.desc}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-body text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-divider/40 text-text-main/70"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Actions */}
                        <div className="flex space-x-6 pt-6 border-t border-divider mt-6">
                          <Magnetic range={15}>
                            <a
                              href={project.demoLink}
                              className="interactive flex items-center space-x-2 font-body text-xs font-bold uppercase tracking-wider text-accent-main hover:opacity-80 transition-opacity"
                              data-cursor-type="link"
                            >
                              <ExternalLink size={14} />
                              <span>Live Demo</span>
                            </a>
                          </Magnetic>
                          <Magnetic range={15}>
                            <a
                              href={project.githubLink}
                              className="interactive flex items-center space-x-2 font-body text-xs font-bold uppercase tracking-wider text-text-main/50 hover:text-text-main transition-colors"
                              data-cursor-type="link"
                            >
                              <Github size={14} />
                              <span>GitHub</span>
                            </a>
                          </Magnetic>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            }

            return (
              /* Regular Project Card */
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="lg:col-span-4"
              >
                <TiltCard maxTilt={8} className="h-full">
                  <div
                    className="interactive p-5 rounded-3xl bg-card-bg border border-card-border flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition-shadow duration-300"
                    data-cursor-type="view"
                  >
                    <div className="space-y-4">
                      {/* Graphics Area */}
                      <div className="h-44 rounded-2xl overflow-hidden border border-card-border relative">
                        {project.graphic}
                      </div>

                      {/* Content Area */}
                      <div className="space-y-2">
                        <h3 className="font-display text-lg font-bold text-text-main tracking-tight leading-snug">
                          {project.title}
                        </h3>
                        <p className="font-body text-xs text-text-main/60 leading-relaxed">
                          {project.desc}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 mt-4 border-t border-divider">
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-body text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-divider/40 text-text-main/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex justify-between items-center pt-2">
                        <Magnetic range={15}>
                          <a
                            href={project.demoLink}
                            className="interactive flex items-center space-x-1.5 font-body text-[10px] font-bold uppercase tracking-wider text-accent-main hover:opacity-85 transition-opacity"
                            data-cursor-type="link"
                          >
                            <ExternalLink size={12} />
                            <span>Live</span>
                          </a>
                        </Magnetic>
                        <Magnetic range={15}>
                          <a
                            href={project.githubLink}
                            className="interactive text-text-main/40 hover:text-text-main transition-colors"
                            data-cursor-type="link"
                          >
                            <Github size={14} />
                          </a>
                        </Magnetic>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
