// Victory.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Victory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center justify-center gap-8 p-8">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-black text-white animate-bounce">
          🎉 Victory! 🎉
        </h1>
        <p className="text-3xl font-semibold text-gray-800">
          Congratulations! You've Won!
        </p>
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-white rounded-full text-orange-500 font-bold 
            hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl
            transform hover:scale-105 active:scale-95"
          >
            Play Again
          </button>
        </div>
      </div>
      <div className="mt-12 flex space-x-4">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="text-4xl animate-float"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            🎊
          </span>
        ))}
      </div>
    </div>
  );
};

export default Victory;
