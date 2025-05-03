import React, { useContext, useRef } from "react";
import { ChevronDown, LogOut, Settings } from "lucide-react";
import logoImage from "../assets/images/logosaas.png?react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { AppContext } from "../context/appContext";

function DashNav({
  user,
  menuOpen,
  setMenuOpen,
  handleMenuToogle,
  handleLogout,
}) {
  const { navigate } = useContext(AppContext);
  const menuref = useRef(null);
  // const [menuOpen, setMenuOpen] = useState(false);
  // const { backendUrl, setIsLoggedIn } = useContext(AppContext);

  // const handleMenuToogle = () => setMenuOpen((prev) => !prev);
  // const handleLogout = async () => {
  //   setMenuOpen(false);

  //   try {
  //     await axios.post(
  //       `${backendUrl}/api/user/logout`,
  //       {}, // No need to send token in body as it's in the cookie
  //       { withCredentials: true }
  //     );
  //     setIsLoggedIn(false);
  //     localStorage.removeItem("token");
  //     navigate("/login");
  //   } catch (error) {
  //     toast.error("Logout failed:", error);
  //   }
  // };
  return (
    <header className="sticky top-0 z-50 bg-black backdrop:blur-md shadow-sm border-gray-200 font-sans">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 max-w-7xl mx-auto">
        <div className="relative cursor-pointer" onClick={() => navigate("/")}>
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F878FF,#F892CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md"></div>
          <img src={logoImage} alt="Tasky" className="h-12 w-12 relative" />
        </div>
        <div ref={menuref} className="relative">
          <button
            onClick={handleMenuToogle}
            className="flex items-center justify-center gap-2 px-1 py-1 rounded-full cursor-pointer bg-purple-50 "
          >
            <div className="relative">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="w-9 h-9 rounded-full shadow-sm"
                />
              ) : (
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-semibold shadow-md">
                  {user.name?.[0].toUpperCase() || "U"}
                </div>
              )}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="text-left hidden md:block">
              <p className="text-[12px] font-medium text-gray-800">
                {user.name}
              </p>
              <p className="text-[10px] text-gray-500 font-normal">
                {user.email}
              </p>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform duration-300 
                ${menuOpen ? "rotate-180" : " "}`}
            />
          </button>
          <AnimatePresence initial={false} mode="wait">
            {menuOpen && (
              <motion.ul
                className="absolute p-2 flex flex-col gap-1 top-14 right-0 w-44 bg-white rounded-2xl shadow-xl border border-purple-100 z-50 overflow-hidden animate-fadein"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <li>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/profile");
                    }}
                    className="w-full px-3 py-2 text-left rounded-lg hover:bg-purple-50 text-sm text-gray-700 transition-colors flex items-center gap-2 group"
                  >
                    <Settings className="w-4 h-4 text-gray-700" />
                    Profile Setting
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-red-50 text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    Log out
                  </button>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default DashNav;
