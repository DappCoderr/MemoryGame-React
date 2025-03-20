import React from "react";

const Cards = () => {
  const Card = ({ frontText, backText }) => (
    <div className="relative w-full h-40 cursor-pointer [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]">
      <div className="absolute w-full h-full bg-blue-500 text-white text-center p-6 rounded-2xl shadow-lg [backface-visibility:hidden]">
        {frontText}
      </div>
      <div className="absolute w-full h-full bg-green-500 text-white text-center p-6 rounded-2xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
        {backText}
      </div>
    </div>
  );
  return (
    <div className="grid grid-cols-4 gap-4 p-4 mx-80">
      <div className="flex flex-col gap-4">
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
      </div>
      <div className="flex flex-col gap-4">
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
      </div>
      <div className="flex flex-col gap-4">
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
      </div>
      <div className="flex flex-col gap-4">
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
        <Card frontText="MemoryGame" backText={"banana"} />
      </div>
    </div>
  );
};

export default Cards;
