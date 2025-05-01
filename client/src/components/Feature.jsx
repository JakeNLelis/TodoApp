import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg?react";

import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionTemplate,
  useMotionValue,
  useInView,
} from "framer-motion";

export const Feature = ({ title, description }) => {
  const border = useRef(null);
  const isInView = useInView(border);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};
