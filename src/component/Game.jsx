import React from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8 p-8">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
        Game Page
      </h2>
      <Cards />
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md text-white font-medium
        hover:from-gray-600 hover:to-gray-700 transition-colors duration-200 shadow-md hover:shadow-lg
        transform hover:-translate-y-1 active:translate-y-0"
      >
        Reset Game
      </button>
    </div>
  );
};

export default Game;
