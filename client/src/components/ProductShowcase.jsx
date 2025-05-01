import { useRef } from "react";
import appScreen from "../assets/images/app-screen.png";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const appImage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="text-white py-[72px] sm:py-24 bg-gradient-to-b from-black to-[#5D2CAB]">
      <div className="items-center p-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.img
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
          src={appScreen}
          alt="Product Screenshot"
          className="mt-14 mx-auto"
          ref={appImage}
        />
      </div>
    </div>
  );
};
