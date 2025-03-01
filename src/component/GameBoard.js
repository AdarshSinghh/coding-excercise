import React, { useState, useEffect } from "react";
import { IoIosBackspace } from "react-icons/io";
import Instruction from "./Instruction";
import WiningTile from "./ResultTile";
import { newGame } from "../utils/gameStateUtils";
import { submitGuess, submitLetter, removeLetter } from "../utils/gameUtils";
import { gameResult } from "../utils/resultUtils";
import LetterGrid from "./LetterGrid";

const GameBoard = ({
  setCurrentGuessLength,
  setSubmittedRowsCount,
  currentGuessLength,
  submittedRowsCount,
  correctWord,
  resetGame,
  setHelp,
  help,
}) => {
  const [score, setScore] = useState("newGame");
  const [gameState, setGameState] = useState(newGame(correctWord));

  useEffect(() => {
    if (correctWord) {
      setGameState(newGame(correctWord));
    }
  }, [correctWord]);

  const handleKeyPress = (key) => {
    key = key.toUpperCase();
    if (key === "ENTER" && currentGuessLength === gameState.word.length) {
      // Check what key was pressed
      setGameState(
        submitGuess(
          gameState,
          setCurrentGuessLength,
          setSubmittedRowsCount,
          submittedRowsCount
        )
      );
      gameResult(gameState, setScore, submittedRowsCount);
      // Enter key was pressed
    } else if (key === "BACKSPACE" && currentGuessLength > 0) {
      setGameState(
        removeLetter(gameState, setCurrentGuessLength, currentGuessLength)
      );
    } else if (
      /^[A-Z]$/.test(key) &&
      currentGuessLength < gameState.word.length &&
      score === "newGame"
    ) {
      console.log("iam causing the issue");
      setGameState(
        submitLetter(gameState, key, setCurrentGuessLength, currentGuessLength)
      );
    }
  };

  return (
    <div
      className="mx-auto mt-3 w-2/4 rounded-3xl bg-white px-3 py-5 shadow-2xl focus:outline-none"
      tabIndex="0"
      onKeyDown={(event) => handleKeyPress(event.key)}
    >
      {help === "active" ? (
        <Instruction
          setHelp={setHelp}
          resetGame={resetGame}
          setScore={setScore}
        />
      ) : score !== "newGame" ? (
        <WiningTile
          setScore={setScore}
          score={score}
          word={correctWord}
          resetGame={resetGame}
          setHelp={setHelp}
        />
      ) : (
        <div className="game">
          <LetterGrid gameState={gameState} />
          <div className="game-keyboard mx-auto mt-16 w-4/5 px-8 py-4 text-lg">
            {["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="game-keyboard-row flex justify-center"
              >
                {row.split("").map((key) => (
                  <div
                    key={key}
                    className="game-keyboard-button m-1 flex aspect-square w-full cursor-pointer items-center justify-center rounded-lg bg-slate-200 text-lg md:w-14 md:text-xl lg:w-16 lg:text-2xl"
                    onClick={() => handleKeyPress(key)}
                  >
                    {key}
                  </div>
                ))}
                {rowIndex === 2 && (
                  <>
                    <div
                      className="game-keyboard-button m-1.5 flex w-full cursor-pointer items-center justify-center rounded-lg bg-slate-200 px-3 text-lg md:w-16 md:text-xl lg:w-20 lg:text-2xl"
                      onClick={() => handleKeyPress("BACKSPACE")}
                    >
                      <IoIosBackspace className="text-2xl md:text-3xl lg:text-4xl" />
                    </div>
                    <div
                      className="game-keyboard-button m-1.5 flex w-full cursor-pointer items-center justify-center rounded-lg bg-slate-200 px-3 text-lg md:w-16 md:text-xl lg:w-20 lg:text-2xl"
                      onClick={() => handleKeyPress("ENTER")}
                    >
                      ENTER
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
