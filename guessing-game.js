function guessingGame() {
  const randomNumber = Math.floor(Math.random() * 100);
  let isOver = false;
  let numOfGuess = 0;

  return function guess(num) {
    if (isOver) return "Game over, you won!";
    numOfGuess++;
    if (num === randomNumber) {
      isOver = true;
      const guess = numOfGuess === 1 ? "guess" : "guesses";
      return `You won! You found ${num} in ${numOfGuess} ${guess}.`;
    }
    if (num < randomNumber) return `${num} is too low!`;
    if (num > randomNumber) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
