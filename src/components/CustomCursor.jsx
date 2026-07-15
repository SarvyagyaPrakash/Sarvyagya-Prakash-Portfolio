import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState(""); // "", "view", "link", "drag"
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for smooth position updates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for the outer ring lag effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device to disable custom cursor
    const touchCheck = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(touchCheck.matches);

    if (touchCheck.matches) return;

    // Show cursor on first mouse move
    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Track active interactions
    const handleMouseOver = (e) => {
      const target = e.target.closest(".interactive");
      if (target) {
        setIsHovered(true);
        const type = target.getAttribute("data-cursor-type") || "link";
        setHoverType(type);
      } else {
        setIsHovered(false);
        setHoverType("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    // Add class to body to disable default cursor in CSS
    document.body.classList.add("custom-cursor-enabled");

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, [isVisible, cursorX, cursorY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        className="cursor-dot pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0.3 : 1,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />

      {/* Outer tracking ring */}
      <motion.div
        className={`cursor-ring flex items-center justify-center pointer-events-none ${
          isHovered ? "bg-white/10" : ""
        }`}
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: isHovered ? (hoverType === "view" || hoverType === "drag" ? 70 : 56) : 32,
          height: isHovered ? (hoverType === "view" || hoverType === "drag" ? 70 : 56) : 32,
          borderColor: isHovered ? "transparent" : "",
        }}
      >
        {isHovered && (hoverType === "view" || hoverType === "drag") && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] uppercase font-bold tracking-wider font-display text-white"
          >
            {hoverType}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
