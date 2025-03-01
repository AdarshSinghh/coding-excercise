// Return the index of the last unsumbitted guess/row.
export const getCurrentGuessIndex = (game) => {
  for (let [index, guess] of game.guesses.entries()) {
    if (guess.submitted) {
      continue;
    } else {
      return index;
    }
  }
  return null;
};

export const getPrevGuessIndex = (game) => {
  for (let [index, guess] of game.guesses.entries()) {
    if (!guess.submitted) {
      return index === 0 ? 0 : index - 1;
    }
  }
  return game.guesses.length - 1;
};

// function to submit the letter
export const submitLetter = (
  game,
  insertLetter,
  setCurrentGuessLength,
  currentGuessLength
) => {
  let index = getCurrentGuessIndex(game);
  let currentGuessWord = game.guesses[index].letters;
  setCurrentGuessLength(0);
  // Loop over letters
  for (let letterObj of currentGuessWord) {
    if (letterObj.letter === "") {
      letterObj.letter = insertLetter;
      if (currentGuessLength < game.word.length) {
        setCurrentGuessLength(currentGuessLength + 1);
      }
      break;
    }
  }
  game.guesses[index].letterCount = currentGuessLength;
  return game;
};

// func to remove the last entered letter
export const removeLetter = (
  game,
  setCurrentGuessLength,
  currentGuessLength
) => {
  let index = getCurrentGuessIndex(game);
  let currentGuessWord = game.guesses[index].letters;
  // Loop over letters
  for (let i = currentGuessWord.length - 1; i >= 0; i--) {
    if (currentGuessWord[i].letter !== "") {
      currentGuessWord[i].letter = "";
      setCurrentGuessLength(currentGuessLength - 1);
      break;
    }
  }
  game.guesses[index].letterCount = currentGuessLength - 1;
  return game;
};

//changing colors
export const markingToClassName = (marking) => {
  switch (marking) {
    case "":
      return "";
    case "correct":
      return "bg-green-500"; // Green for correct position
    case "misplaced":
      return "bg-yellow-500"; // Yellow for correct letter, wrong position
    case "wrong":
      return "bg-gray-500"; // Grey for wrong letters (you can choose any color)
    default:
      console.error("Unexpected marking value:", marking); // Log an error for unexpected markings
      return "bg-gray-500"; // Default background color in case of unexpected marking
  }
};

//submitting the guess here and changing the gameState
export const submitGuess = (
  game,
  setCurrentGuessLength,
  setSubmittedRowsCount,
  submittedRowsCount
) => {
  // Count inserted row
  let index = getCurrentGuessIndex(game);
  let guessLetterOccurrence = {};
  let correctLetterOccurrence = {};
  // count the Occurrences
  for (let letter of game.word) {
    correctLetterOccurrence[letter] === undefined
      ? (correctLetterOccurrence[letter] = 1)
      : (correctLetterOccurrence[letter] += 1);
  }
  for (let letterObj of game.guesses[index].letters) {
    if (guessLetterOccurrence[letterObj.letter] === undefined) {
      guessLetterOccurrence[letterObj.letter] = 1;
    } else {
      guessLetterOccurrence[letterObj.letter] += 1;
    }
  }
  // Loop over letters
  for (let letterObj of game.guesses[index].letters) {
    if (correctLetterOccurrence[letterObj.letter] === undefined) {
      letterObj.marking = "wrong";
    } else if (
      guessLetterOccurrence[letterObj.letter] ===
      correctLetterOccurrence[letterObj.letter]
    ) {
      if (letterObj.letter === letterObj.correctLetter) {
        letterObj.marking = "correct";
      } else if (letterObj.letter !== letterObj.correctLetter) {
        letterObj.marking = "misplaced";
      }
    } else if (
      guessLetterOccurrence[letterObj.letter] >
      correctLetterOccurrence[letterObj.letter]
    ) {
      guessLetterOccurrence[letterObj.letter] -= 1;
      letterObj.marking = "wrong";

      letterObj.textColor = "text-white";
      continue;
    }

    letterObj.textColor = "text-white";
  }
  game.guesses[index].submitted = true;
  setCurrentGuessLength(0);

  setSubmittedRowsCount(submittedRowsCount + 1);
  return game;
};
