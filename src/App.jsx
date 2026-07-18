import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";

// Import layout components
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Connect from "./components/Connect";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  // Toast trigger function
  const triggerToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    
    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  // Toggle theme class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Handle page loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Initialize Lenis smooth scroll and global placeholder link handlers
  useEffect(() => {
    if (isLoading) return;

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easeOutQuart physics
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Intercept standard hash clicks and route them smoothly via Lenis
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");

      // Check if it is a placeholder link
      if (
        href &&
        (href.startsWith("#placeholder") ||
          href.includes("placeholder") ||
          href === "#demo-link" ||
          href === "#git-link")
      ) {
        e.preventDefault();
        const actionLabel = anchor.innerText.trim() || "Social Link";
        triggerToast(`[Connection: Opening "${actionLabel}" link]`);
        return;
      }

      // Check if it is an internal scroll target
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const targetEl = document.querySelector(href);
        if (targetEl) {
          lenis.scrollTo(targetEl, { offset: -80 });
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [isLoading]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* Noise texture overlay applied globally */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Intro Page Loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-50 bg-[#151413] flex flex-col items-center justify-center text-[#E8E4DC]"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center space-y-4"
            >
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
                Sarvyagya Prakash
              </h2>
              <div className="w-12 h-[1.5px] bg-[#C5B097]/40 mx-auto" />
              <p className="font-body text-[14px] uppercase tracking-widest text-[#E8E4DC]/40">
                Welcome's you
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen text-[#1A1A1A] dark:text-[#E8E4DC] transition-colors duration-500"
        >
          {/* Custom Cursor follower */}
          <CustomCursor />

          {/* Header navigation bar */}
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* Sections assembly */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Connect />
          </main>

          {/* Toast notifications container */}
          <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-3 pointer-events-none">
            <AnimatePresence>
              {toasts.map((toast) => (
                <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="bg-[#1A1A1A] dark:bg-[#E8E4DC] text-[#F9F6F0] dark:text-[#151413] px-6 py-4 rounded-2xl shadow-2xl font-body text-xs font-bold uppercase tracking-wider flex items-center space-x-3 pointer-events-auto border border-[#E8E4DC]/10 dark:border-[#1A1A1A]/10"
                >
                  <span className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full animate-ping" />
                  <span>{toast.message}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </>
  );
}
