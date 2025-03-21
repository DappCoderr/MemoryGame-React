import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const initialCards = [
  { id: 1, value: "🦁", matched: false, flipped: false, disabled: false },
  { id: 2, value: "🐴", matched: false, flipped: false, disabled: false },
  { id: 3, value: "🐒", matched: false, flipped: false, disabled: false },
  { id: 4, value: "🐝", matched: false, flipped: false, disabled: false },
  { id: 5, value: "🐁", matched: false, flipped: false, disabled: false },
  { id: 6, value: "🐱", matched: false, flipped: false, disabled: false },
  { id: 7, value: "🐰", matched: false, flipped: false, disabled: false },
  { id: 8, value: "🐷", matched: false, flipped: false, disabled: false },
  { id: 9, value: "😂", matched: false, flipped: false, disabled: false },
  { id: 10, value: "💪", matched: false, flipped: false, disabled: false },
  { id: 11, value: "🥹", matched: false, flipped: false, disabled: false },
  { id: 12, value: "🧑‍💻", matched: false, flipped: false, disabled: false },
  { id: 13, value: "🔥", matched: false, flipped: false, disabled: false },
  { id: 14, value: "❤️", matched: false, flipped: false, disabled: false },
  { id: 15, value: "🌊", matched: false, flipped: false, disabled: false },
  { id: 16, value: "🥳", matched: false, flipped: false, disabled: false },
  { id: 17, value: "🌎", matched: false, flipped: false, disabled: false },
  { id: 18, value: "👹", matched: false, flipped: false, disabled: false },
  { id: 19, value: "🐝", matched: false, flipped: false, disabled: false },
  { id: 20, value: "🐁", matched: false, flipped: false, disabled: false },
  { id: 21, value: "🐱", matched: false, flipped: false, disabled: false },
  { id: 22, value: "🐰", matched: false, flipped: false, disabled: false },
  { id: 23, value: "🐷", matched: false, flipped: false, disabled: false },
  { id: 24, value: "🦁", matched: false, flipped: false, disabled: false },
  { id: 25, value: "🐒", matched: false, flipped: false, disabled: false },
  { id: 26, value: "🐴", matched: false, flipped: false, disabled: false },
  { id: 27, value: "👹", matched: false, flipped: false, disabled: false },
  { id: 28, value: "😂", matched: false, flipped: false, disabled: false },
  { id: 29, value: "🌎", matched: false, flipped: false, disabled: false },
  { id: 30, value: "❤️", matched: false, flipped: false, disabled: false },
  { id: 31, value: "🌊", matched: false, flipped: false, disabled: false },
  { id: 32, value: "🔥", matched: false, flipped: false, disabled: false },
  { id: 33, value: "🥳", matched: false, flipped: false, disabled: false },
  { id: 34, value: "👨🏻‍💻", matched: false, flipped: false, disabled: false },
  { id: 35, value: "💪", matched: false, flipped: false, disabled: false },
  { id: 36, value: "🥹", matched: false, flipped: false, disabled: false },
];

const shuffleCards = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Game = () => {
  const [count, setCount] = useState(0);
  const [matched, setMatched] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [cards, setCards] = useState(() => shuffleCards(initialCards));
  const navigate = useNavigate();

  const handleClick = () => {
    setCards(shuffleCards(initialCards));
    setCount(0);
    setMatched(0);
    setFlippedCards([]);
  };

  const handleFlip = (id) => {
    if (
      flippedCards.length < 2 &&
      !cards.find((card) => card.id === id).flipped &&
      !cards.find((card) => card.id === id).disabled
    ) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, flipped: true } : card
        )
      );
      setFlippedCards((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstId);
      const secondCard = cards.find((card) => card.id === secondId);

      if (firstCard?.value === secondCard?.value) {
        setCount((prev) => prev + 1);
        setMatched((prev) => prev + 1);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, matched: true, disabled: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCount((prev) => prev + 1);
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }
      setFlippedCards([]);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matched === 8) {
      navigate("/victory");
    }
  }, [matched, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center gap-8 p-8">
      <div className="space-y-4 text-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          Memory Game
        </h2>
        <div className="flex gap-8 text-white">
          <div className="bg-gray-700 px-6 py-2 rounded-full shadow-lg">
            <span className="text-cyan-400 font-mono">{count}</span> Moves
          </div>
          <div className="bg-gray-700 px-6 py-2 rounded-full shadow-lg">
            <span className="text-emerald-400 font-mono">{matched}</span> /{" "}
            {initialCards.length / 2} Matches
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 md:grid-cols-6 gap-3 md:gap-4 max-w-4xl p-4 bg-gray-800/30 rounded-2xl shadow-xl">
        {cards.map((e) => (
          <Cards
            key={e.id}
            name={"?"}
            value={e.value}
            flipped={e.flipped}
            onFlip={() => handleFlip(e.id)}
            disValue={e?.disabled}
            matched={e.matched}
          />
        ))}
      </div>

      <button
        onClick={handleClick}
        className="px-8 py-3 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white font-semibold
        hover:from-pink-600 hover:to-rose-500 transition-all duration-300 shadow-xl hover:shadow-2xl
        transform hover:scale-105 active:scale-95 flex items-center gap-2"
      >
        🔄 Reset Game
      </button>
    </div>
  );
};

export default Game;
