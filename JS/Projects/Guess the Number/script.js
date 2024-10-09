const input = document.querySelector("#guess-input");

const submitBtn = document.querySelector("#submit-btn");

const prevGuesses = document.querySelector("#guesses");

const remainGuesses = document.querySelector("#remaining");

const lesserOrGreater = document.querySelector("#low-or-hi");

const resultDiv = document.querySelector(`#result`);

let randomNumber = Math.floor(Math.random() * 100 + 1);

let para = document.createElement("p");

let prevGuessArray = [];

let guessesCount = 0;

let playGame = true;

if (playGame) {
  submitBtn.addEventListener(`click`, (event) => {
    event.preventDefault();

    let inputNumber = Number(input.value);
    validGuess(inputNumber);
  });
}

function validGuess(guess) {
  if (
    typeof guess === `number` &&
    guess >= 1 &&
    guess <= 100 &&
    !Number.isNaN(guess)
  ) {
    prevGuessArray.push(guess);
    guessesCount++;
    checkGuess(guess);
  } else {
    alert(`Enter a Valid Number between 1 & 100!!`);
  }
  input.focus(); // Keep the input field in focus
}

function checkGuess(guess) {
  if (guessesCount > 9) {
    displayGuess(guess);
    displayMsg(`Game Over! Please try again. The Number was ${randomNumber}`);
    endGame();
  } else {
    displayGuess(guess);
    if (guess === randomNumber) {
      displayMsg(`Right Guess!! You Win!!`);
      endGame();
    } else if (guess < randomNumber) {
      displayMsg(`The number you entered is less than the Random Number.`);
    } else {
      displayMsg(`The number you entered is greater than the Random Number.`);
    }
  }
}

function displayGuess(guess) {
  input.value = ``;
  prevGuesses.textContent += `${guess}, `;
  remainGuesses.textContent = `${10 - guessesCount}`;
}

function displayMsg(message) {
  lesserOrGreater.textContent = message;
}

function newGame() {
  let newGameBtn = document.createElement(`button`);

  newGameBtn.innerHTML = `New Game`;

  newGameBtn.classList.add(`new-game`);

  resultDiv.before(newGameBtn);

  newGameBtn.addEventListener(`click`, () => {
    randomNumber = Math.floor(Math.random() * 100 + 1);

    prevGuessArray = [];

    playGame = true;

    guessesCount = 0;

    input.disabled = false;
    input.value = "";

    newGameBtn.remove();
    // resultDiv.before(submitBtn);
    submitBtn.disabled = false;

    prevGuesses.innerHTML = ``;
    remainGuesses.innerHTML = `10`;
    lesserOrGreater.innerHTML = ``;
  });
}
function endGame() {
  input.disabled = true;
  //   submitBtn.remove();
  submitBtn.disabled = true;
  playGame = false;
  newGame();
}
