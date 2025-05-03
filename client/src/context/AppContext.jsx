import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(false);

  const getUserData = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/user/me`,
        {},
        { withCredentials: true }
      );

      if (data.success) {
        const user = {
          email: data.user.email,
          name: data.user.name || "User",
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
            data.user.name || "User"
          )}&background=random`,
        };
        setUserData(user);
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData,
    navigate,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
