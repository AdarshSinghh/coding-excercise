import { getPrevGuessIndex } from "./gameUtils";

export const gameResult = (game, setScore, submittedRowsCount) => {
  let index = getPrevGuessIndex(game);
  // Check if index is valid
  if (index === null) {
    return;
  }
  let currentGuessWord = game.guesses[index].letters;
  let correctCount = 0;
  for (let letterObj of currentGuessWord) {
    if (letterObj.marking === "correct") {
      correctCount += 1;
    }
    if (correctCount === game.word.length) {
      setScore("Won");
    } else {
      // Set score to "Lost" if all rows are submitted and the word is not guessed
      if (submittedRowsCount === game.guesses.length - 1) {
        setScore("Lost");
      } else {
        setScore("newGame");
      }
    }
  }
};
