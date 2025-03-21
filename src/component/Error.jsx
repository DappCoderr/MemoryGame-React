// Error.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-9xl font-black text-red-500 animate-pulse">404</h1>
      <p className="text-3xl font-semibold text-gray-200">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold
        hover:from-purple-500 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl
        transform hover:scale-105 active:scale-95 flex items-center gap-2"
      >
        🏠 Back to Home
      </button>
      <div className="mt-12 animate-bounce-slow">😢</div>
    </div>
  );
};

export default Error;
