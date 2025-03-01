import React from "react";
import logo from "../image/wordleIcon.png";
import { LuCircleHelp } from "react-icons/lu";
import { RiResetLeftLine } from "react-icons/ri";

const Header = ({ resetGame, setHelp }) => {
  const handleHelp = () => {
    setHelp("active");
  };

  const handleReset = () => {
    resetGame();
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl justify-between">
      <div className="mt-1 flex items-center rounded-2xl bg-orange-200 px-4 py-1 sm:px-6">
        <img
          src={logo}
          alt="GameIcon"
          className="h-8 rounded-xl p-1 sm:h-10 md:h-12"
        />
        <p className="ml-2 text-xl font-bold sm:text-2xl md:text-3xl">Wordle</p>
      </div>
      <div className="mt-1 flex items-center justify-around rounded-2xl bg-orange-200 px-4 py-1 sm:px-6">
        <RiResetLeftLine
          className="mx-1 cursor-pointer text-xl sm:mx-2 sm:text-2xl md:text-3xl"
          onClick={handleReset}
        />
        <LuCircleHelp
          className="mx-1 cursor-pointer text-xl sm:mx-2 sm:text-2xl md:text-3xl"
          onClick={handleHelp}
        />
      </div>
    </div>
  );
};

export default Header;
