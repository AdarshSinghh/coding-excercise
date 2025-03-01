// function to setup a new game with word
export const newGame = (word) => {
  let maxGuesses = word.length;
  let x = {
    word: word,
    guesses: [...new Array(maxGuesses)].map((_) => {
      return {
        // Guessed Word
        letters: [...word].map((correctLetter, _) => {
          // Guess Letter
          return {
            letter: "",
            correctLetter: correctLetter,
            marking: "",
            textColor: "",
          };
        }),
        submitted: false,
        letterCount: 0,
      };
    }),
  };
  return x;
};
