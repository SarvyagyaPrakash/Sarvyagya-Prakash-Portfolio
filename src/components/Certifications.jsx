import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";

const CERTIFICATIONS = [
  {
    id: "cert-1",
    name: "[Certification Name: Advanced React Patterns]",
    issuer: "[Issuing Body: Frontend Masters / Authority]",
    colorTheme: "bg-c1-bg border-c1-border",
    textColor: "text-c1-text"
  },
  {
    id: "cert-2",
    name: "[Certification Name: UI/UX Interaction Design]",
    issuer: "[Issuing Body: Interaction Design Foundation]",
    colorTheme: "bg-c2-bg border-c2-border",
    textColor: "text-c2-text"
  },
  {
    id: "cert-3",
    name: "[Certification Name: Web Performance & Core Vitals]",
    issuer: "[Issuing Body: Google Developers / Udacity]",
    colorTheme: "bg-c3-bg border-c3-border",
    textColor: "text-c3-text"
  },
  {
    id: "cert-4",
    name: "[Certification Name: Algorithms & Data Structures]",
    issuer: "[Issuing Body: freeCodeCamp]",
    colorTheme: "bg-c4-bg border-c4-border",
    textColor: "text-c4-text"
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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
      id="certifications"
      className="py-24 md:py-36 px-6 md:px-12 bg-bg-main border-b border-divider"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-divider pb-8">
          <div>
            <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent-main block mb-3">
              Achievements
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-text-main">
              Certifications
            </h2>
          </div>
          <p className="font-body text-sm text-text-main/50 mt-4 md:mt-0 max-w-xs md:text-right leading-relaxed">
            [Verification of professional knowledge paths and interactive technical courses.]
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="h-full"
            >
              <TiltCard maxTilt={5} className="h-full">
                <div
                  className={`interactive relative group p-6 rounded-3xl border flex flex-col justify-between h-full transition-all duration-300 ${cert.colorTheme} shadow-sm hover:shadow-md`}
                  data-cursor-type="link"
                >
                  <div className="flex items-start justify-between space-x-4 mb-8">
                    <div className={`p-3 bg-white/40 dark:bg-black/10 rounded-2xl ${cert.textColor} shadow-sm`}>
                      <Award size={24} />
                    </div>
                    
                    {/* Hover indicator link */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-body font-bold uppercase tracking-wider flex items-center space-x-1 text-text-main/60">
                      <span>Preview</span>
                      <ExternalLink size={12} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-text-main mb-2 leading-snug">
                      {cert.name}
                    </h3>
                    <p className="font-body text-xs text-text-main/60">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Absolute visual border overlay that fades in on hover */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-accent-main opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
