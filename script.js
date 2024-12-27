const usersGuess = document.getElementById("guessValue");
const submitButton = document.getElementById("submitButton");
const guessedWrongText = document.getElementById("guessedWrongText");
const replayButton = document.getElementById("replayButton");
const difficultySettings = document.getElementById("difficultySettings");
const mainSection = document.getElementById("mainSection");

const easyButton = document.getElementById("easyButton");
const mediumButton = document.getElementById("mediumButton");
const hardButton = document.getElementById("hardButton");
let computersNumber = 0;

// Timer function used when hiding/showing correct/wrong guess text with seconds shown passed in as param
const timer = (seconds) => {
  var timer = setInterval(function () {
    seconds--;

    if (seconds < 0)
    {
      clearInterval(timer);
      guessedWrongText.hidden = true;
    }
  }, 1000);
}

// Generate a random number using passed in multiplier
const randomNumber = (multiplier) => {
  return Math.floor(Math.random() * multiplier);
}

difficultySettings.hidden = false;
mainSection.hidden = true;
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

// Button onClick functions
{
  submitButton.onclick = () =>
  {
    checkUsersGuess();
  }

  replayButton.onclick = () =>  {
    document.location = "./index.html";
  }

  easyButton.onclick = () => {
    computersNumber = randomNumber(10);
    difficultySettings.hidden = true;
    mainSection.hidden = false;
  }

  mediumButton.onclick = () => {
    computersNumber = randomNumber(20);
    difficultySettings.hidden = true;
    mainSection.hidden = false;
  }

  hardButton.onclick = () => {
    computersNumber = randomNumber(30);
    difficultySettings.hidden = true;
    mainSection.hidden = false;
  }
}
