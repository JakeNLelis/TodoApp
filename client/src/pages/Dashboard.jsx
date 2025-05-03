import { useContext, useState } from "react";
import DashNav from "../components/DashNav";
import { AppContext } from "../context/appContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Sidebar } from "lucide-react";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { backendUrl, setIsLoggedIn, userData, navigate } =
    useContext(AppContext);

  const handleMenuToogle = () => setMenuOpen((prev) => !prev);
  const handleLogout = async () => {
    setMenuOpen(false);

    try {
      await axios.post(
        `${backendUrl}/api/user/logout`,
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed:", error);
    }
  };
  return (
    <div>
      <DashNav
        user={userData}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleMenuToogle={handleMenuToogle}
        handleLogout={handleLogout}
      />
      <Sidebar />
    </div>
  );
}

export default Dashboard;
