import React from "react";
import { markingToClassName } from "../utils/gameUtils";

const LetterGrid = ({ gameState }) => {
  return (
    <div className="game-rows flex flex-col items-center">
      {gameState.guesses.map((guess, rowIndex) => (
        <div
          key={rowIndex}
          className="row m-0.5 flex w-full justify-center px-4 md:px-12 lg:px-24 xl:px-48"
        >
          {guess.letters.map((letter, colIndex) => (
            <div
              key={colIndex}
              className={`grid-letter m-0.5 flex aspect-square w-12 md:w-16 lg:w-20 xl:w-24 items-center justify-center rounded-lg border-2 ${letter.textColor} ${markingToClassName(letter.marking)}`}
            >
              <p className="text-xl leading-none md:text-2xl lg:text-3xl xl:text-4xl">
                {letter.letter}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LetterGrid;
