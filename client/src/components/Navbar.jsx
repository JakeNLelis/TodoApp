import logoImage from "../assets/images/logosaas.png?react";
import MenuIcon from "../assets/icons/menu.svg?react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F878FF,#F892CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md"></div>
            <img src={logoImage} alt="Logo" className="h-12 w-12 relative" />
          </div>
          <button className="border cursor-pointer border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </button>
          <nav className="gap-6 items-center hidden sm:flex">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button
              className="bg-white py-2 px-4 rounded-lg cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
