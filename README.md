# Wordle Game

A fun and interactive Wordle game built using **React.js** and **TailwindCSS**, allowing players to guess a hidden word within five attempts. The game provides feedback on letter correctness and positioning.

## 🚀 Features

- **Interactive Word Grid**: Dynamic UI for guessing words.
- **On-Screen Keyboard**: Clickable keyboard for ease of play.
- **Color Feedback System**:
  - 🟩 Green: Correct letter in the correct position.
  - 🟨 Yellow: Correct letter in the wrong position.
  - ⬜ Gray: Incorrect letter.
- **Instructions & Help Section**
- **Winning & Losing Screens**
- **Keyboard & Grid Responsiveness** for different screen sizes.
- **Random Word Selection** from a predefined word list.
- **Game Reset Option**

## 🛠 Tech Stack

- **React.js** (Frontend UI)
- **TailwindCSS** (Styling & Responsiveness)
- **Jest & Testing Library** (For Unit Testing)
- **React Icons** (For UI enhancements)

## 📦 Installation & Setup

1. Clone the repository:
   ```sh
   git clone
   cd wordle-game
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open **[http://localhost:3000](http://localhost:3000)** in your browser to play the game.

## 🕹️ How to Play

1. Start by entering any **5-letter word**.
2. Press **ENTER** to submit your guess.
3. The grid will change colors based on correctness.
4. Use the on-screen keyboard or your physical keyboard to input letters.
5. **Win by guessing the correct word in 5 tries!**

## 🧩 Code Structure

- **`src/`** → Main source directory

  - **`components/`** → UI components
    - `GameBoard.js` → Handles the game board UI and renders the letter grid.
    - `Keyboard.js` → Manages the on-screen keyboard for entering guesses.
    - `Header.js` → Displays the game title and control icons (reset/help).
    - `Instruction.js` → Provides gameplay instructions.
    - `ResultTile.js` → Shows win/loss messages after a game session.
  - **`utils/`** → Game logic functions
    - `gameStateUtils.js` → Manages game state, initializes a new game.
    - `gameUtils.js` → Handles letter input, removing letters, and submitting guesses.
    - `resultUtils.js` → Determines game results (win/loss) and assigns letter feedback colors.
  - **`tests/`** → Jest test cases for game logic validation.
  - **`App.js`** → Main application file that integrates all components.
  - **`index.js`** → Entry point of the React application.

## 🧪 Running Tests

This project includes **unit tests** using Jest.
Run tests with:

```sh
npm test
```

## 📸 Screenshots

_(Add images of the game UI if available)_

## 📝 License

This project is open-source under the **MIT License**.

---

Enjoy playing Wordle! 🎉
