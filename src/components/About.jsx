import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Compass, Award, Code, Sparkles } from "lucide-react";

const INFO_CARDS = [
  {
    icon: MapPin,
    title: "Location",
    content: "Bhopal, India, Asia"
  },
  {
    icon: GraduationCap,
    title: "Degree",
    content: "B.Tech in Computer Science"
  },
  {
    icon: Target,
    title: "Focus Area",
    content: "Artificial Intelligence and Machine Learning"
  },
  {
    icon: Compass,
    title: "Career Goal",
    content: "Software Engineer building high-impact AI products"
  }
];

const SPECIALIZATIONS = [
  {
    icon: Code,
    area: "Computer Vision & Accessibility",
    desc: "Orchestrating visual intelligence systems that understand images, generate insights, and design for accessibility. Building models that serve everyone, from accessibility features to CV-based estimation systems."
  },
  {
    icon: Code,
    area: "Backend + AI Engineering",
    desc: "Architecting end-to-end AI systems that integrate backend intelligence with user-facing interfaces. Building RAG systems, multi-agent frameworks, and semantic search pipelines alongside responsive frontends."
  },
  {
    icon: Code,
    area: "Scalable Product Architecture",
    desc: "Building complete products across iOS, Android, web, and desktop. Optimizing for user experience at scale while maintaining code quality and smooth animations across platforms."
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-12 bg-bg-main border-b border-divider"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Sticky Left Column: Heading */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:h-fit">
          <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent-main block mb-3">
            Who I Am
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-text-main leading-tight">
            About Me
          </h2>
          <div className="w-12 h-[2px] bg-accent-main mt-6 hidden lg:block" />
        </div>

        {/* Right Column: Bio Content & Info Grid */}
        <div className="lg:col-span-8 space-y-16">

          {/* Multi-paragraph Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 font-body text-base md:text-lg text-text-main/70 leading-relaxed text-justify"
          >
            <p>
              I am a self-driven software developer and AI enthusiast with a strong foundation in building intelligent, interactive interfaces. My journey began with an interest in solving complex computational problems, which evolved into a focus on constructing beautiful digital experiences and local-first AI applications that make complex data easily accessible.
            </p>
            <p>
              I am motivated by the challenge of bridging the gap between intelligent engineering and intuitive user design. Exploring multi-agent orchestration, state machines, and real-time communication protocols like WebSockets keeps my curiosity active and drives my search for robust, production-ready solutions.
            </p>
            <p>
              Right now, I am refining my skills in React, FastAPI, and advanced AI frameworks like LangGraph to build high-performance, real-time applications. I thrive on collaborating in fast-paced environments, optimizing database workflows, and writing clean, highly scalable codebases.
            </p>
          </motion.div>

          {/* Staggered Info Cards Grid */}
          <div>
            <h3 className="font-display text-xl font-bold text-text-main mb-6">
              Quick Facts
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {INFO_CARDS.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-card-bg border border-card-border flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="p-3 bg-accent-main/10 rounded-xl text-accent-main">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-text-main mb-1">
                        {card.title}
                      </h4>
                      <p className="font-body text-xs text-text-main/60 leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Specialization Highlights */}
          <div className="border-t border-divider pt-12">
            <h3 className="font-display text-xl font-bold text-text-main mb-8">
              My Specializations
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {SPECIALIZATIONS.map((spec) => {
                const IconComp = spec.icon;
                return (
                  <motion.div
                    key={spec.area}
                    variants={itemVariants}
                    className="group flex flex-col items-start space-y-4"
                  >
                    <div className="p-3 bg-accent-main/10 rounded-xl text-accent-main group-hover:scale-110 transition-transform duration-300">
                      <IconComp size={20} />
                    </div>
                    <h4 className="font-display text-base font-bold text-text-main md:min-h-[3rem] min-h-0">
                      {spec.area}
                    </h4>
                    <p className="font-body text-xs text-text-main/60 leading-relaxed text-justify">
                      {spec.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
