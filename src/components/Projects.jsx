import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";
import medicalRagImg from "../assets/medical-rag.png";
import moneyMentorImg from "../assets/money-mentor.png";
import agentGridImg from "../assets/agent-grid.jpg";
import exigentCxImg from "../assets/exigentcx.png";

const PROJECTS = [
  {
    id: "featured-1",
    isFeatured: true,
    title: "AgentGrid",
    desc: "An edge-native, privacy-preserving video intelligence platform that mirrors enterprise split-AI architectures. Instead of streaming continuous high-bandwidth video to the cloud, AgentGrid processes raw video feeds locally at the edge (on-site) forwarding only structured JSON metadata events to a central cloud dashboard.",
    tags: ["Docker", "Redis", "YOLO-v8", "PostgreSQL"],
    demoLink: "https://agent-grid-two.vercel.app",
    githubLink: "https://github.com/SarvyagyaPrakash/AgentGrid",
    // Custom abstract graphic markup
    graphic: (
      <img
        src={agentGridImg}
        alt="AgentGrid"
        className="w-full h-full object-cover"
      />
    )
  },
  {
    id: "project-2",
    isFeatured: false,
    title: "ExigentCX",
    desc: "A secure digital platform connecting high-growth organizations with verified senior executives.",
    tags: ["React", "Supabase", "Framer Motion"],
    demoLink: "https://cxo-ten.vercel.app",
    githubLink: "https://github.com/SarvyagyaPrakash/ExigentCX",
    graphic: (
      <img
        src={exigentCxImg}
        alt="ExigentCX"
        className="w-full h-full object-cover"
      />
    )
  },
  {
    id: "project-3",
    isFeatured: false,
    title: "MoneyMentor Pro",
    desc: "An accessible, highly friendly, and extremely powerful Open-Source AI Portfolio Mentor.",
    tags: ["LangGraph", "streamlit", "Pyxirr"],
    demoLink: "https://calyx-et-moneymentor.streamlit.app",
    githubLink: "https://github.com/SarvyagyaPrakash/MoneyMentor-Pro",
    graphic: (
      <img
        src={moneyMentorImg}
        alt="MoneyMentor Pro"
        className="w-full h-full object-cover scale-[1.08]"
      />
    )
  },
  {
    id: "project-4",
    isFeatured: false,
    title: "Medical RAG Chatbot",
    desc: "A local-first Retrieval-Augmented Generation (RAG) chatbot for medical PDFs.",
    tags: ["FastAPI", "Ollama", "ChromaDB"],
    demoLink: "https://github.com/SarvyagyaPrakash/RAG-Based-Health-Bot",
    githubLink: "https://github.com/SarvyagyaPrakash/RAG-Based-Health-Bot",
    graphic: (
      <img
        src={medicalRagImg}
        alt="Medical RAG Chatbot"
        className="w-full h-full object-cover scale-[1.08]"
      />
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
                      className="interactive p-6 md:p-8 rounded-3xl bg-card-bg border border-card-border grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      data-cursor-type="view"
                      onClick={(e) => {
                        if (project.demoLink.startsWith("http") && !e.target.closest('a')) {
                          window.open(project.demoLink, "_blank", "noopener,noreferrer");
                        }
                      }}
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
                        <div className="flex items-center justify-between pt-6 border-t border-divider mt-6">
                          <Magnetic range={15}>
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
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
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="interactive flex items-center space-x-2.5 font-body text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border-2 border-amber-500/60 hover:border-amber-500 text-text-main/70 hover:text-text-main hover:bg-amber-500/5 transition-all duration-300"
                              data-cursor-type="link"
                            >
                              <Github size={16} />
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
                    className="interactive p-5 rounded-3xl bg-card-bg border border-card-border flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    data-cursor-type="view"
                    onClick={(e) => {
                      if (project.demoLink.startsWith("http") && !e.target.closest('a')) {
                        window.open(project.demoLink, "_blank", "noopener,noreferrer");
                      }
                    }}
                  >
                    <div className="space-y-4">
                      {/* Graphics Area */}
                      <div className="aspect-[3/2] w-full rounded-2xl overflow-hidden border border-card-border relative">
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
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
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
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="interactive flex items-center justify-center p-2.5 rounded-full border-2 border-amber-500/60 hover:border-amber-500 text-text-main/70 hover:text-text-main hover:bg-amber-500/5 transition-all duration-300"
                            data-cursor-type="link"
                          >
                            <Github size={18} />
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
