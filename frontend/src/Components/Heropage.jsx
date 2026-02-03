import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import iitdlogo from "../assets/iitdlogo.png";
import iitlogo from "../assets/iitlogo.svg";
import logo from "../assets/logo.svg";
import outreachlogo from "../assets/outreachlogo.png";
import { logout, register } from "../utility/api";
import { useAuth } from "../context/AuthContext";

function Heropage() {
  const { user, setUser } = useAuth();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    password: "",
    role: "",
    name: "",
  });

  const handleLogout = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await logout();
      const data = await response.json();

      if (response.ok) {
        setUser(null);
      } else {
        setError(data.message || "Logout failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRegisterError("");

    try {
      const response = await register(registerFormData);
      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
        setIsRegisterOpen(false);
        setRegisterFormData({ username: "", password: "", role: "", name: "" });
      } else {
        setRegisterError(
          data.message || "Registration failed. Please try again.",
        );
      }
    } catch (err) {
      setRegisterError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] bg-white overflow-hidden font-sans">
      {/* ================= LOGOS ================= */}
      <div className="absolute top-6 left-6 md:top-6 md:left-8 flex items-center gap-4 z-20">
        <img
          src={logo}
          alt="Outreach Logo"
          className="h-18 md:h-26 w-auto" // Increased mobile logo size
        />
        <img
          src={iitlogo}
          alt="IITD Logo"
          className="h-18 md:h-26 w-auto" // Increased mobile logo size
        />
      </div>

      {/* ================= LOGIN BUTTON / USER AVATAR ================= */}
      {user && (
        <div className="absolute top-6 right-6 md:top-6 md:right-8 z-30 group">
          <div className="relative">
            <div className="w-12 h-12 md:w-12 md:h-12 bg-[#FB923C] rounded-full flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-7 md:w-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-gray-800 text-white text-sm font-medium px-4 py-3 rounded-lg shadow-lg whitespace-nowrap">
                <div className="mb-2 pb-2 border-b border-gray-600">
                  {user.name}
                </div>
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="w-full text-left hover:text-orange-400 transition-colors"
                >
                  Register New User
                </button>
                <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
              <button
                onClick={handleLogout}
                className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= REGISTER DIALOG ================= */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsRegisterOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md z-10">
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#4DB6B6] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Register New User
              </h2>
            </div>
            <p className="text-center text-gray-600 mb-6">
              Create a new user account
            </p>
            {registerError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg mb-4 text-sm">
                {registerError}
              </div>
            )}
            <form className="space-y-4" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Enter full name"
                value={registerFormData.name}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    name: e.target.value,
                  })
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DB6B6] transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Enter username"
                value={registerFormData.username}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    username: e.target.value,
                  })
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DB6B6] transition-colors"
                required
              />
              <input
                type={showRegisterPassword ? "text" : "password"}
                placeholder="Enter password"
                value={registerFormData.password}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    password: e.target.value,
                  })
                }
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DB6B6] transition-colors"
                required
              />
              <select
                value={registerFormData.role}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    role: e.target.value,
                  })
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DB6B6] transition-colors appearance-none bg-white"
                required
              >
                <option value="">Select role</option>
                <option value="admin">admin</option>
              </select>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FB923C] hover:bg-[#f97316] disabled:bg-[#fbb97a] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 mt-4 flex items-center justify-center gap-2"
              >
                {isLoading ? "Registering..." : "Register User"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= RIGHT GRADIENT CIRCLE ================= */}
      <div className="absolute top-[-25%] right-[-10%] md:top-[-30%] md:right-[-5%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#4DB6B6] to-[#BFF5F7]" />

      {/* ================= MAIN CONTENT ================= */}
      {/* Increased top padding for mobile to reduce white space and center text better */}
      <div className="relative z-10 pt-44 md:pt-40 px-8 md:px-12">
        <div className="max-w-4xl">
          {/* MAIN HEADING - Increased mobile text size */}
          <h1 className="text-[52px] font-alumni md:text-[90px] font-bold text-[#565656] leading-[1.1]">
            #ExperienceIITD
          </h1>

          {/* SUBTEXT - Increased mobile text size */}
          <p className="mt-4 md:mt-2 font-poppins text-lg md:text-base font-semibold text-[#565656]">
            An initiative by the
          </p>

          {/* HIGHLIGHT TEXT - Increased mobile text size */}
          <p className="mt-2 md:mt-1 font-poppins text-xl md:text-2xl font-bold text-[#FB923C]">
            Office of Academic Outreach &amp; New Initiatives
          </p>
        </div>
      </div>
    </section>
  );
}

export default Heropage;
