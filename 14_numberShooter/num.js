let numberContainer = document.querySelector(".numberContainer");
let timerValue = document.querySelector(".timerValue");
let targetValue = document.querySelector(".targetValue");
let scoreValue = document.querySelector(".scoreValue");
let highScoreDisplay = document.querySelector("#highScoreDisplay"); // Naya Selector
let overlay = document.querySelector("#overlay");
let finalScoreDisplay = document.querySelector("#finalScore");
let restartBtn = document.querySelector("#restartBtn");

let timer = 60;
let score = 0;
let target;
let gameInterval;

function startGame() {
  score = 0;
  timer = 60;
  scoreValue.innerText = score;
  timerValue.innerText = timer;
  
  // Local storage se high score uthakar screen par dikhana
  highScoreDisplay.innerText = localStorage.getItem("highScore") || 0;
  
  overlay.style.display = "none";
  makeBubbles();
  generateTarget();
  clearInterval(gameInterval); 
  startTimer();
}

function startTimer() {
  gameInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerValue.innerText = timer;
    } else {
      clearInterval(gameInterval);
      gameOver();
    }
  }, 1000);
}

function makeBubbles() {
  let clutter = "";
  for (let i = 1; i <= 80; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="circle">${rn}</div>`;
  }
  numberContainer.innerHTML = clutter;
}

function generateTarget() {
  target = Math.floor(Math.random() * 10);
  targetValue.innerText = target;
}

function gameOver() {
  overlay.style.display = "flex";
  finalScoreDisplay.innerText = score;
  numberContainer.innerHTML = ""; 

  // Local Storage Save Logic
  let highScore = localStorage.getItem("highScore") || 0;
  if (score > Number(highScore)) {
    localStorage.setItem("highScore", score);
  }
  
  // Screen par update karna
  highScoreDisplay.innerText = localStorage.getItem("highScore");
}

numberContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("circle")) {
    let clickedNum = Number(event.target.innerText);
    if (clickedNum === target) {
      score += 10;
      scoreValue.innerText = score;
      makeBubbles(); 
      generateTarget();
    }
  }
});

restartBtn.addEventListener("click", startGame);

startGame();