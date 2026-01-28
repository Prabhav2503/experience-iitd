import React, { useState } from "react";
import iitdlogo from "../assets/iitdlogo.png";
import outreachlogo from "../assets/outreachlogo.png";
import { login } from "../utility/api";

function Heropage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await login(formData)

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        setIsLoginOpen(false);
        setFormData({ username: "", password: "" });
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden font-sans">

      {/* ================= LOGOS ================= */}
      <div className="absolute top-4 left-4 md:top-6 md:left-8 flex items-center gap-3 z-20">
        <img
          src={outreachlogo}
          alt="Outreach Logo"
          className="h-8 md:h-12 w-auto"
        />
        <img
          src={iitdlogo}
          alt="IITD Logo"
          className="h-8 md:h-12 w-auto"
        />
      </div>

      {/* ================= LOGIN BUTTON / USER AVATAR ================= */}
      {user ? (
        <div className="absolute top-4 right-4 md:top-6 md:right-8 z-30 group">
          <div className="relative">
            {/* User Avatar */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FB923C] rounded-full flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            {/* Hover Tooltip with Name */}
            <div className="absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                {user.name}
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
      ) : (
        <button
          onClick={() => setIsLoginOpen(true)}
          className="absolute top-4 right-4 md:top-6 md:right-8 z-30 flex items-center gap-2 bg-[#FB923C] hover:bg-[#f97316] text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Login
        </button>
      )}

      {/* ================= LOGIN DIALOG ================= */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsLoginOpen(false)}
          />

          {/* Dialog Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md z-10">
            {/* Close Button */}
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#4DB6B6] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Login</h2>
            </div>

            {/* Welcome Text */}
            <p className="text-center text-gray-600 mb-6">
              Welcome back! Please login to your account
            </p>

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}

            {/* Form */}
            <form className="space-y-4" onSubmit={handleLogin}>
              {/* ID Input */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DB6B6] transition-colors"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DB6B6] transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>


              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FB923C] hover:bg-[#f97316] disabled:bg-[#fbb97a] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 mt-4 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= RIGHT GRADIENT CIRCLE ================= */}
      <div className="absolute top-[-30%] right-[-5%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#4DB6B6] to-[#BFF5F7]" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 pt-32 md:pt-40 px-6 md:px-12">
        <div className="max-w-4xl">

          {/* MAIN HEADING */}
          <h1 className="text-[42px] font-alumni md:text-[66px] font-bold text-[#565656] leading-tight">
            #ExperienceIITD
          </h1>

          {/* SUBTEXT */}
          <p className="mt-2 font-poppins text-sm md:text-base font-semibold text-[#565656]">
            An initiative by the
          </p>

          {/* HIGHLIGHT TEXT */}
          <p className="mt-1 font-poppins text-base md:text-2xl font-bold text-[#FB923C]">
            Office of Academic Outreach &amp; New Initiatives
          </p>

        </div>
      </div>
    </section>
  );
}

export default Heropage;
