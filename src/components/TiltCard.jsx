import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children, maxTilt = 10, className = "" }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for tilt degrees
  const rotateXVal = useSpring(0, { damping: 25, stiffness: 200 });
  const rotateYVal = useSpring(0, { damping: 25, stiffness: 200 });

  // Map mouse coordinate offset to rotation angle
  // Moving cursor down (positive Y) rotates around X-axis (tilt down/up)
  // Moving cursor right (positive X) rotates around Y-axis (tilt left/right)
  const rotateX = useTransform(rotateXVal, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(rotateYVal, [-0.5, 0.5], [-maxTilt, maxTilt]);

  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(touchCheck.matches);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const clientX = e.clientX - left;
    const clientY = e.clientY - top;

    // Calculate percentage offset from center (-0.5 to 0.5)
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;

    rotateXVal.set(yPct);
    rotateYVal.set(xPct);
  };

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateXVal.set(0);
    rotateYVal.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      className={`relative cursor-none transition-shadow duration-300 ${className}`}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
