import helixImage from "../assets/images/helix2.png";
import emojiStart from "../assets/images/emojistar.png";
// eslint-disable-next-line no-unused-vars
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <div
      className="bg-black items-center text-white py-[72px] sm:py-24"
      ref={containerRef}
    >
      <div className="flex justify-center items-center p-4">
        <div className=" max-w-xl relative">
          <motion.img
            style={{ translateY }}
            src={emojiStart}
            alt="cursor image"
            width="200"
            height="200"
            className="absolute right-[calc(100%-24px)] -top-[120px] hidden sm:inline"
          />
          <motion.img
            style={{ translateY }}
            src={helixImage}
            alt="message image"
            width="200"
            height="200"
            className="absolute top-6 left-[calc(100%+24px)] hidden sm:inline"
          />
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
            Get instant access
          </h2>
          <p className="text-center mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
            />
            <button className="bg-white cursor-pointer py-2 px-4 rounded-lg text-black">
              Get access
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
