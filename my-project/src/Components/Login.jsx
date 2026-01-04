import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";

export default function Login() {
  const [mode, setMode] = useState("login");

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const loginValid =
    loginData.username.trim() !== "" && loginData.password.trim() !== "";

  const registerValid =
    registerData.username.trim() !== "" &&
    registerData.email.trim() !== "" &&
    registerData.password.trim() !== "";

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative">
      {/* BACK ICON */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-6 left-6 text-cyan-400
                   text-xl hover:scale-110 transition"
      >
        <FaArrowLeft />
      </button>

      {/* CARD */}
      <div
        className="relative w-full max-w-4xl h-[520px]
                   bg-black/50 backdrop-blur-2xl
                   border border-cyan-400/30
                   rounded-3xl
                   shadow-[0_0_100px_rgba(0,255,255,0.18)]
                   overflow-hidden"
      >
        {/* WELCOME PANEL */}
        <div
          className={`absolute top-0 h-full w-1/2
          flex flex-col justify-center items-center
          bg-gradient-to-br from-cyan-400/90 to-blue-500/90
          text-black px-10 text-center
          transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${mode === "login" ? "right-0" : "left-0"}`}
        >
          <h2 className="text-4xl font-bold mb-4">
            {mode === "login" ? "WELCOME BACK" : "HELLO FRIEND"}
          </h2>
          <p className="text-sm opacity-80 max-w-xs">
            {mode === "login"
              ? "Login with your personal info"
              : "Enter your details and start journey"}
          </p>
        </div>

        {/* FORM PANEL */}
        <div
          className={`absolute top-0 h-full w-1/2
          flex flex-col justify-center px-8 sm:px-12 text-white
          transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${mode === "login" ? "left-0" : "right-0"}`}
        >
          <h2 className="text-3xl font-semibold mb-8">
            {mode === "login" ? "Login" : "Register"}
          </h2>

          {mode === "login" ? (
            <>
              <Input
                icon={<FaUser />}
                placeholder="Username"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              />

              <Input
                icon={<FaLock />}
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />

              <button
                disabled={!loginValid}
                onClick={() => setMode("register")}
                className={`mt-8 py-3 rounded-full
                backdrop-blur-xl border
                font-medium transition-all duration-300
                ${
                  loginValid
                    ? "bg-white/10 border-white/20 hover:bg-white/20"
                    : "bg-white/5 border-white/10 opacity-40 cursor-not-allowed"
                }`}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <Input
                icon={<FaUser />}
                placeholder="Username"
                value={registerData.username}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    username: e.target.value,
                  })
                }
              />

              <Input
                icon={<FaEnvelope />}
                placeholder="Email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  })
                }
              />

              <Input
                icon={<FaLock />}
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
              />

              <button
                disabled={!registerValid}
                className={`mt-8 py-3 rounded-full
                backdrop-blur-xl border
                font-medium transition-all duration-300
                ${
                  registerValid
                    ? "bg-white/10 border-white/20 hover:bg-white/20"
                    : "bg-white/5 border-white/10 opacity-40 cursor-not-allowed"
                }`}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* INPUT COMPONENT */
function Input({ icon, type = "text", placeholder, value, onChange }) {
  return (
    <div className="mb-6">
      <div
        className="flex items-center gap-3
                   border-b border-cyan-400/40
                   focus-within:border-cyan-300 transition"
      >
        <span className="text-cyan-400">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent py-2
                     outline-none text-sm text-white
                     placeholder-gray-400"
        />
      </div>
    </div>
  );
}
