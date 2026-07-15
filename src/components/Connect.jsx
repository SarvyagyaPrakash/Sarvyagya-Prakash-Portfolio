import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import Magnetic from "./Magnetic";

const LeetcodeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0L5.32 14.214a1.21 1.21 0 0 1 0-1.688L15.3 2.397c.465-.45 1.21-.45 1.676 0l2.69 2.607c.466.452.466 1.18 0 1.631L11.59 14.34a.403.403 0 0 0 0 .563l1.82 1.76a.403.403 0 0 0 .564 0l5.864-5.678" />
    <path d="M9 13h9" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#linkedin-placeholder", label: "LinkedIn" },
  { icon: Github, href: "#github-placeholder", label: "GitHub" },
  { icon: LeetcodeIcon, href: "#leetcode-placeholder", label: "LeetCode" }
];

export default function Connect() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="connect"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-bg-main text-text-main flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 space-y-4">
          <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent-main block">
            Say Hello
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-text-main leading-none">
            Let's Connect
          </h2>
          <p className="font-body text-sm md:text-base text-text-main/60 max-w-sm leading-relaxed pt-2">
            Always ready to consider new openings, technical collaborations, or anything regarding system architecture. Feel free to reach out if you wish to discuss AI Agents, backend development, user interfaces, or simply say hello!
          </p>
        </div>

        {/* Right Column: CTA & Social Links */}
        <div className="lg:col-span-7 flex flex-col items-start lg:items-end space-y-8">
          
          {/* Email Me CTA Button */}
          <Magnetic range={25}>
            <a
              href="mailto:prakash.sarvyagya@gmail.com"
              className="interactive flex items-center space-x-3 bg-accent-main text-bg-main px-8 py-5 rounded-full font-body text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
              data-cursor-type="link"
            >
              <Mail size={16} />
              <span>Email Me</span>
            </a>
          </Magnetic>

          {/* Social Links List */}
          <div className="flex flex-wrap gap-4 pt-4">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = link.icon;
              return (
                <Magnetic key={link.label} range={20}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className="interactive flex items-center justify-center w-12 h-12 rounded-full border border-card-border bg-card-bg text-text-main hover:text-accent-main hover:border-accent-main transition-colors duration-300"
                    data-cursor-type="link"
                  >
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                      <IconComponent size={18} />
                    </motion.div>
                  </a>
                </Magnetic>
              );
            })}
          </div>

        </div>
      </div>

      {/* Footer Branding, Copyright, Back-to-Top */}
      <div className="max-w-7xl mx-auto w-full border-t border-divider pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Initials & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="font-display text-lg font-extrabold tracking-tight text-text-main">
            SP
          </span>
        </div>

        {/* Back to Top */}
        <Magnetic range={25}>
          <a
            href="#home"
            className="interactive flex items-center space-x-2 font-body text-xs font-bold uppercase tracking-wider text-text-main/50 hover:text-text-main transition-colors"
            data-cursor-type="link"
          >
            <span>Back To Top</span>
            <div className="p-2.5 rounded-full border border-card-border">
              <ArrowUp size={12} />
            </div>
          </a>
        </Magnetic>

      </div>
    </section>
  );
}
