import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";

const Instruction = ({ setHelp, resetGame, setScore }) => {
  const handleNewGame = () => {
    setHelp("inactive");
    setScore("newGame");
    resetGame();
  };

  return (
    <div>
      <div>
        <div className="mx-auto flex h-10 w-full max-w-4xl items-center justify-between rounded-lg bg-indigo-100 px-4 text-sm font-bold sm:px-6 sm:text-base md:text-lg">
          <FaHandPointRight className="mx-3 size-4 sm:size-5 md:size-6" />
          How to play
          <IoMdCloseCircleOutline
            className="mx-3 size-5 cursor-pointer sm:size-6"
            onClick={handleNewGame}
          />
        </div>

        <div className="data mx-auto w-full max-w-2xl flex-col items-center justify-center p-3 text-sm sm:text-base md:text-lg">
          You have to guess the hidden word in 5 tries and the color of the
          letters changes to show how close you are.
          <div className="">
            <div className="">
              <br />
            </div>

            <div className="text flex items-center justify-center text-center">
              To start the game, just enter any word, for example:
            </div>

            <div className="word mx-auto flex w-full max-w-md justify-center px-8 text-white sm:px-16 md:px-28">
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-amber-400 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                T
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                A
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-slate-400 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                B
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-slate-400 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                L
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-amber-400 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                E
              </div>
            </div>

            <div className="mx-auto w-full max-w-md rounded-lg bg-slate-100 p-3 text-center text-xs sm:text-sm md:text-base">
              <b>B</b>, <b>L</b> aren't in the target word at all.
              <br />
              <b>T</b>, <b>E</b> is in the word but in the wrong spot.
              <br />
              <b>A</b> is in the word and in the correct spot.
              <br />
            </div>

            <div className="mt-10 flex w-full justify-center text-center">
              Another try to find matching letters in the target word.
            </div>

            <div className="word mx-auto flex w-full max-w-md justify-center px-8 text-white sm:px-16 md:px-28">
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                W
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                A
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-slate-400 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                G
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                E
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                R
              </div>
            </div>

            <div className="text flex w-full justify-center text-center">
              So close!
            </div>

            <div className="word mx-auto flex w-full max-w-md justify-center px-8 text-white sm:px-16 md:px-28">
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                W
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                A
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                T
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                E
              </div>
              <div className="m-1 flex aspect-square w-12 items-center justify-center rounded-lg border-2 bg-lime-600 text-lg sm:w-14 sm:text-xl md:w-16 md:text-2xl lg:w-20">
                R
              </div>
            </div>

            <div className="text flex w-full justify-center text-center">
              <b>You Won! 🏆</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
