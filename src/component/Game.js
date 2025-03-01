import React, { useEffect, useState } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";

const Game = () => {
  const [help, setHelp] = useState("active");
  const [correctWord, setCorrectWord] = useState("");
  const [words, setWords] = useState([]);

  const [currentGuessLength, setCurrentGuessLength] = useState(0);
  const [submittedRowsCount, setSubmittedRowsCount] = useState(0);

  useEffect(() => {
    fetch("/listOfWords.txt")
      .then((response) => response.text())
      .then((data) => {
        const wordArray = data.split("\n");
        setWords(wordArray);
        // Set the initial correct word
        setCorrectWord(
          wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase()
        );
        console.log(correctWord);
      })
      .catch((error) => console.error("Error fetching words:", error));
  }, []);
  const resetGame = () => {
    setCorrectWord(
      words[Math.floor(Math.random() * words.length)].toUpperCase()
    );
    setCurrentGuessLength(0);
    setSubmittedRowsCount(0);
  };
  return (
    <div tabIndex="-1 { pointerEvents: 'none' }">
      <Header resetGame={resetGame} setHelp={setHelp} />
      <GameBoard
        correctWord={correctWord}
        setCurrentGuessLength={setCurrentGuessLength}
        setSubmittedRowsCount={setSubmittedRowsCount}
        currentGuessLength={currentGuessLength}
        submittedRowsCount={submittedRowsCount}
        resetGame={resetGame}
        setHelp={setHelp}
        help={help}
      />
    </div>
  );
};

export default Game;
