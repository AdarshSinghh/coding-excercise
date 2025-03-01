import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
import winingGif from "../image/celebration-gif-2.gif";
import lostGif from "../image/lost.gif";

const WiningTile = ({ setScore, score, word, resetGame, setHelp }) => {
  const handleNewGame = () => {
    setScore("newGame");
    resetGame();
  };

  const handleInstructions = () => {
    setHelp("active");
  };

  const getGameResult = (score) => {
    if (score === "Won") {
      return {
        heading: "Congratulations",
        image: winingGif,
        description: "You have correctly guessed the right word.",
        motivation1: "You Won! 🏆",
        motivation2: "You have successfully guessed the word",
        motivation3: "Everything is Green for you",
      };
    } else if (score === "Lost") {
      return {
        heading: "Try Again",
        image: lostGif,
        description: "Unfortunately, you didn't guess the right word.",
        motivation1: "Don't give up! 💪",
        motivation2: "Keep trying, you'll get it next time",
        motivation3: "This was the Correct Word",
      };
    }
    return null;
  };

  const [gameResult, setGameResult] = useState(getGameResult(score));

  return (
    <div>
      <div>
        <div className="mx-auto flex h-10 w-full max-w-4xl items-center justify-between rounded-lg bg-indigo-100 px-4 text-sm font-bold sm:px-6 sm:text-base md:text-lg">
          <FaHandPointRight className="mx-3 size-4 sm:size-5 md:size-6" />
          {gameResult.heading}
          <IoMdCloseCircleOutline
            className="mx-3 size-5 cursor-pointer sm:size-6"
            onClick={handleInstructions}
          />
        </div>

        <div className="data mx-auto w-full max-w-2xl flex-col items-center justify-center p-3 text-sm sm:text-base md:text-lg">
          <div className="">
            <div className="">
              <br />
            </div>

            <div className="text flex items-center justify-center">
              <img
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                src={gameResult.image}
                alt="let's celebrate"
              />
            </div>

            <div className="word flex w-full max-w-md items-center justify-center px-8 text-center text-white sm:px-16 md:px-28">
              {gameResult.description}
            </div>

            <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-slate-100 p-4 text-xs sm:text-sm md:text-base">
              <div className="w-full text-center">
                <b>{gameResult.motivation1}</b>
              </div>
              <div className="w-full text-center">
                {gameResult.motivation2}
                <br />
                {gameResult.motivation3}
                <br />
              </div>
            </div>

            <div className="word mx-auto flex w-full max-w-md justify-center px-8 text-white sm:px-16 md:px-28">
              {[...word].map((item, index) => (
                <div
                  key={index}
                  className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-green-500 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex w-full justify-center text-center">
              Another try to find matching letters in the Game?
            </div>

            <div className="word flex w-full justify-center px-8 text-white sm:px-16 md:px-28">
              <button
                className="mx-auto my-1 translate-x-1 transform cursor-pointer rounded-full bg-green-500 px-6 py-2 text-sm transition active:scale-95 active:bg-blue-700 active:shadow-inner sm:text-base md:text-lg"
                onClick={handleNewGame}
              >
                New Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiningTile;
