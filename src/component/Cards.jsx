// Cards.jsx
const Cards = ({ name, value, flipped, onFlip, disValue, matched }) => {
  return (
    <button
      onClick={onFlip}
      disabled={disValue}
      className={`w-16 h-20 md:w-20 md:h-24 text-3xl md:text-4xl font-bold rounded-lg shadow-xl transition-all duration-300 transform
        ${
          flipped || matched ? "scale-100 rotate-0" : "scale-95 hover:scale-100"
        }
        ${
          matched
            ? "bg-emerald-500/90 text-white cursor-default"
            : flipped
            ? "bg-cyan-400 text-gray-900"
            : "bg-gray-700 hover:bg-gray-600 text-gray-400"
        }
        ${!matched && !disValue ? "hover:rotate-1 cursor-pointer" : ""}
        relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300
        ${
          flipped || matched
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100"
        }`}
      >
        {name}
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300
        ${
          flipped || matched
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        }`}
      >
        {value}
      </div>
      {matched && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center animate-pulse">
          <span className="text-white text-4xl">✓</span>
        </div>
      )}
    </button>
  );
};

export default Cards;
