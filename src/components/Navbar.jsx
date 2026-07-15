import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Connect", href: "#connect" },
];

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll to toggle navbar background blur & active sections
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      let currentSection = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top is above middle of the screen
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // Nav link text rolling animation variants
  const navLinkVariants = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-bg-main/80 border-b border-divider backdrop-blur-md"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Initials */}
          <Magnetic range={25}>
            <a
              href="#home"
              className="interactive font-display text-xl font-extrabold tracking-tight text-text-main"
              data-cursor-type="link"
            >
              SP
            </a>
          </Magnetic>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="interactive relative font-body text-xs font-semibold uppercase tracking-wider text-text-main/60 hover:text-text-main py-2 transition-colors duration-200"
                  data-cursor-type="link"
                >
                  <motion.div
                    className="overflow-hidden h-4 flex flex-col justify-start"
                    initial="initial"
                    whileHover="hovered"
                  >
                    <motion.span
                      variants={navLinkVariants}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`block ${isActive ? "text-text-main font-bold" : ""}`}
                    >
                      {item.label}
                    </motion.span>
                    <motion.span
                      variants={navLinkVariants}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="block text-accent-main font-bold"
                    >
                      {item.label}
                    </motion.span>
                  </motion.div>

                  {/* Active Underline Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-main"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center space-x-4">
            {/* Theme Switcher */}
            <Magnetic range={20}>
              <button
                onClick={toggleTheme}
                className="interactive p-2.5 rounded-full border border-card-border bg-transparent text-text-main hover:bg-card-border/10 transition-colors"
                aria-label="Toggle visual theme"
                data-cursor-type="link"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={16} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Magnetic>

            {/* Mobile Burger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="interactive md:hidden p-2.5 rounded-full border border-card-border text-text-main"
              aria-label="Open navigation menu"
              data-cursor-type="link"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg-main flex flex-col justify-between p-6 md:hidden"
          >
            {/* Mobile Overlay Header */}
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-extrabold tracking-tight text-text-main">
                SP
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="interactive p-2.5 rounded-full border border-card-border text-text-main"
                aria-label="Close navigation menu"
                data-cursor-type="link"
              >
                <X size={16} />
              </button>
            </div>

            {/* Mobile Nav Links Container */}
            <nav className="flex flex-col space-y-6 my-auto pl-4">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08, ease: "easeOut" }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-display text-4xl font-extrabold tracking-tight ${
                        isActive
                          ? "text-accent-main"
                          : "text-text-main/80"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Overlay Footer info */}
            <div className="border-t border-divider pt-6 text-center">
              <p className="font-body text-xs text-text-main/50 uppercase tracking-widest">
                Available for internships & collaborations
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
