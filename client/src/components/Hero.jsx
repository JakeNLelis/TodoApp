import ArrowIcon from "../assets/icons/arrow-w.svg?react";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  return (
    <div
      className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EBD_82%)] py-[72px] sm:py-24 relative overflow-clip"
      ref={containerRef}
    >
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[760px] lg:w-[2400px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="items-center p-4 relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-2 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93d0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [--webkit-background-clip:text]">
              Tasky v1.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex">
              One Task <br /> at a Time
            </h1>
            <motion.img
              drag
              dragSnapToOrigin
              whileDrag={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              style={{ translateY }}
              src={cursorImage}
              alt="cursor image"
              width="200"
              height="200"
              className="absolute right-[476px] top-[108px] hidden sm:inline cursor-grab"
            />
            <motion.img
              drag
              dragSnapToOrigin
              whileDrag={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              style={{ translateY }}
              src={messageImage}
              alt="message image"
              width="200"
              height="200"
              className="absolute top-[56px] left-[498px] hidden sm:inline cursor-grab"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="bg-white text-black cursor-pointer py-3 px-5 rounded-lg"
          >
            Get started
          </motion.button>
        </div>
      </div>
    </div>
  );
};
