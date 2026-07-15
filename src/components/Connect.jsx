import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import Magnetic from "./Magnetic";

const LeetcodeIcon = ({ size, ...props }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="3.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M33.8092 34.8772L26.8725 41.814A5.7258 5.7258 0 0118.7571 41.814L8.6127 31.67A5.726 5.726 0 018.6127 23.5545L18.7571 13.41A5.7258 5.7258 0 0126.8725 13.41L34.5 21.0373" />
    <path d="M18.7571 13.41L27.7647 4.5" />
    <path d="M19.5838 27.5918H41.0738" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sarvyagyaprakash/", label: "LinkedIn", size: 25 },
  { icon: Github, href: "https://github.com/SarvyagyaPrakash", label: "GitHub", size: 25 },
  { icon: LeetcodeIcon, href: "https://leetcode.com/u/kZOu8cIz2v/", label: "LeetCode", size: 35 }
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
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="interactive flex items-center justify-center w-[57.6px] h-[57.6px] rounded-full border border-card-border bg-card-bg text-text-main hover:text-accent-main hover:border-accent-main transition-colors duration-300"
                    data-cursor-type="link"
                  >
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                      <IconComponent size={link.size} />
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
