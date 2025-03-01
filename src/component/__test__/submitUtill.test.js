const { newGame } = require("../../utils/gameStateUtils");
const { submitGuess } = require("../../utils/gameUtils");

describe("Wordle Game Logic", () => {
  const correctWord = "WATER";
  let gameState;

  beforeEach(() => {
    gameState = newGame(correctWord);
  });

  test("should highlight correct letters in green", () => {
    gameState.guesses[0].letters = [
      { letter: "W", correctLetter: "W", marking: "", textColor: "" },
      { letter: "A", correctLetter: "A", marking: "", textColor: "" },
      { letter: "T", correctLetter: "T", marking: "", textColor: "" },
      { letter: "E", correctLetter: "E", marking: "", textColor: "" },
      { letter: "R", correctLetter: "R", marking: "", textColor: "" },
    ];
    gameState = submitGuess(
      gameState,
      () => {},
      () => {},
      0
    );

    expect(gameState.guesses[0].letters[0].marking).toBe("correct");
    expect(gameState.guesses[0].letters[1].marking).toBe("correct");
    expect(gameState.guesses[0].letters[2].marking).toBe("correct");
    expect(gameState.guesses[0].letters[3].marking).toBe("correct");
    expect(gameState.guesses[0].letters[4].marking).toBe("correct");
  });

  test("should highlight misplaced letters in yellow", () => {
    gameState.guesses[0].letters = [
      { letter: "T", correctLetter: "W", marking: "", textColor: "" },
      { letter: "A", correctLetter: "A", marking: "", textColor: "" },
      { letter: "W", correctLetter: "T", marking: "", textColor: "" },
      { letter: "E", correctLetter: "E", marking: "", textColor: "" },
      { letter: "R", correctLetter: "R", marking: "", textColor: "" },
    ];
    gameState = submitGuess(
      gameState,
      () => {},
      () => {},
      0
    );

    expect(gameState.guesses[0].letters[0].marking).toBe("misplaced");
    expect(gameState.guesses[0].letters[1].marking).toBe("correct");
    expect(gameState.guesses[0].letters[2].marking).toBe("misplaced");
    expect(gameState.guesses[0].letters[3].marking).toBe("correct");
    expect(gameState.guesses[0].letters[4].marking).toBe("correct");
  });

  test("should not highlight extra letters", () => {
    gameState.guesses[0].letters = [
      { letter: "O", correctLetter: "W", marking: "", textColor: "" },
      { letter: "T", correctLetter: "A", marking: "", textColor: "" },
      { letter: "T", correctLetter: "T", marking: "", textColor: "" },
      { letter: "E", correctLetter: "E", marking: "", textColor: "" },
      { letter: "R", correctLetter: "R", marking: "", textColor: "" },
    ];
    gameState = submitGuess(
      gameState,
      () => {},
      () => {},
      0
    );

    expect(gameState.guesses[0].letters[0].marking).toBe("wrong");
    expect(gameState.guesses[0].letters[1].marking).toBe("wrong");
    expect(gameState.guesses[0].letters[2].marking).toBe("correct");
    expect(gameState.guesses[0].letters[3].marking).toBe("correct");
    expect(gameState.guesses[0].letters[4].marking).toBe("correct");
  });
});
