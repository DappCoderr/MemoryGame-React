import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/game");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
        Memory Game
      </h1>
      <button
        onClick={handleNavigate}
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold 
        hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 
        shadow-lg hover:shadow-xl active:scale-95"
      >
        Start Game
      </button>
    </div>
  );
};

export default Start;
