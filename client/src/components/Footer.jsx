import IntaIcon from "../assets/icons/insta.svg?react";
import XIcon from "../assets/icons/x-social.svg?react";
import TiktokIcon from "../assets/icons/tiktok.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import YTIcon from "../assets/icons/youtube.svg?react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="items-center p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            © 2024 Nietzchan Jake. All rights reserved
          </div>
          <ul className="flex gap-2.5 justify-center">
            <li>
              <XIcon />
            </li>
            <li>
              <IntaIcon />
            </li>
            <li>
              <TiktokIcon />
            </li>
            <li>
              <YTIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
