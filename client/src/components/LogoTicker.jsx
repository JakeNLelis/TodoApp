import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="items-center p-4">
        <h2 className="text-lg text-center text-white/70 mx-2">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="flex overflow-hidden mt-9 before:z-10 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            className="flex gap-16 flex-none pr-16"
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="flex-none h-8 w-auto"
                />
              </div>
            ))}
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="flex-none h-8 w-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
