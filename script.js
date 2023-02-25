"use strict";

const diceEl = document.querySelector(".dice");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const btnAddName = document.querySelector(".enter");
const firstName = document.getElementById("first-name");
const secondName = document.getElementById("second-name");
const playerone = document.getElementById("name--0");
const playertwo = document.getElementById("name--1");

diceEl.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;
let currentPlayer = 0;
let currentScore = 0;
let score = [0, 0];
let playing = true;

//function to swicth player
const switchPlayer = function () {
  currentScore = 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--active");
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer ? 0 : 1;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add("player--active");
};
//button roll functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    const number = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${number}.png`;
    if (number === 1) {
      switchPlayer();
    } else {
      currentScore += number;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    }
  }
});

//button hold functionality
btnHold.addEventListener("click", function () {
  if (playing) {
    score[currentPlayer] += currentScore;
    if (score[currentPlayer] >= 100) {
      document.getElementById(`score--${currentPlayer}`).textContent =
        score[currentPlayer];
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      playing = false;
    } else {
      document.getElementById(`score--${currentPlayer}`).textContent =
        score[currentPlayer];

      switchPlayer();
    }
  }
});

//newGame button functionality
btnNewGame.addEventListener("click", function () {
  diceEl.classList.add("hidden");
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  score = [0, 0];
  playing = true;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--winner");
  currentPlayer = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  playerone.textContent = "Usman";
  playertwo.textContent = "Fawaz";
  document.querySelector("main").style.opacity = 0.3;
  document.querySelector(".players-names").style.display = "unset";
});

btnAddName.addEventListener("click", function () {
  if (firstName.value !== "" && secondName.value !== "") {
    playerone.textContent = firstName.value;
    playertwo.textContent = secondName.value;
    document.querySelector("main").style.opacity = 1;
    document.querySelector(".players-names").style.display = "none";
  } else {
    firstName.placeholder = "Enter first Name";
    secondName.placeholder = "Enter second Name";
  }
});
