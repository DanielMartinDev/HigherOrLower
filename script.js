const usersGuess = document.getElementById("guessValue");
const submitButton = document.getElementById("submitButton");
const guessedWrongText = document.getElementById("guessedWrongText");
const replayButton = document.getElementById("replayButton");

const easyButton = document.getElementById("easyButton");
const mediumButton = document.getElementById("mediumButton");
const hardButton = document.getElementById("hardButton");
let computersNumber = 0;

// Timer function used when hiding/showing correct/wrong guess text with seconds shown passed in as param
const timer = (seconds) => {
  var timer = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      guessedWrongText.hidden = true;
    }
  }, 1000);
}

// Generate a random number using passed in multiplier
const randomNumber = (multiplier) => {
  return Math.floor(Math.random() * multiplier);
}

guessedWrongText.hidden = true;
replayButton.hidden = true;

// Compares players guess to computers generated number
const checkUsersGuess = () => {
  if (Number(usersGuess.value) === Number(computersNumber)) {
    guessedWrongText.textContent = "You guessed the number correctly!";
    guessedWrongText.hidden = false;
    replayButton.hidden = false;
  }
  else if (Number(usersGuess.value) < Number(computersNumber)) {
    guessedWrongText.textContent = "You guessed too low!";
    guessedWrongText.hidden = false;

    timer(1);
  }
  else if (Number(usersGuess.value) > Number(computersNumber)) {
    guessedWrongText.textContent = "You guessed too high!";
    guessedWrongText.hidden = false;

    timer(1);
  }
}

submitButton.onclick = () =>
{
  checkUsersGuess();
}

replayButton.onclick = () =>  {
  document.location = "./index.html";
}

easyButton.onclick = () => {
  computersNumber = randomNumber(10);
}

mediumButton.onclick = () => {
  computersNumber = randomNumber(20);
}

hardButton.onclick = () => {
  computersNumber = randomNumber(30);
}
