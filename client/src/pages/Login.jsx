import { useContext, useState } from "react";
import logoImage from "../assets/images/logosaas.png?react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { AppContext } from "../context/appContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState("Login");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const { backendUrl, setIsLoggedIn, getUserData } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      if (state === "Sign up") {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
        if (data.success) {
          setIsLoggedIn(true);
          getUserData();
          navigate("/dashboard", { replace: true });
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
        if (data.success) {
          setIsLoggedIn(true);
          getUserData();
          navigate("/dashboard", { replace: true });
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div class="relative h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EBD_82%)] overflow-hidden">
      <div
        className="relative z-10 w-fit cursor-pointer left-5 sm:left-20 top-5"
        onClick={() => navigate("/")}
      >
        <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F878FF,#F892CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md"></div>
        <img src={logoImage} alt="Tasky" className="h-12 w-12 relative" />
        <span className="absolute text-4xl bottom-1 left-14 font-extrabold bg-[linear-gradient(to_right,#F87AFF,#FB93d0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [--webkit-background-clip:text]">
          Tasky
        </span>
      </div>

      <div class="flex min-h-full flex-col items-center justify-center py-0 relative bg-transparent">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-transparent py-8 px-4 sm:rounded-lg sm:px-10">
            <form class="space-y-6" onSubmit={onSubmitHandler}>
              <AnimatePresence>
                {state === "Sign up" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label
                      for="username"
                      class="block text-sm font-medium text-white/90"
                    >
                      Full Name
                    </label>
                    <div class="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        autocomplete="current-username"
                        required=""
                        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 text-white/90 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-white/90"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-white/90 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-white/90"
                >
                  Password
                </label>
                <div class="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autocomplete="current-password"
                    required=""
                    class="block w-full appearance-none rounded-md border text-white/90 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5 text-gray-500" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
              {state === "Login" && (
                <motion.div
                  class="flex flex-col sm:flex-row gap-2 items-center justify-between"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </motion.div>
              )}

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {state === "Sign up" ? "Sign up" : "Login"}
                </button>
              </div>
            </form>
            {state === "Sign up" ? (
              <p className="text-white/50 text-center text-xs mt-4">
                Already have an account?{" "}
                <span
                  className="text-blue-400 cursor-pointer underline"
                  onClick={() => setState("Login")}
                >
                  Login here
                </span>
              </p>
            ) : (
              <p className="text-white/50 text-center text-xs mt-4">
                Don't have an account?{" "}
                <span
                  className="text-blue-400 cursor-pointer underline"
                  onClick={() => setState("Sign up")}
                >
                  Sign up here
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
