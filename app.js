const computer = document.getElementById("computer");
const user = document.getElementById("user");
const finalResult = document.getElementById("Result");
const win = document.getElementById("win");
const lost = document.getElementById("lost");
const draw = document.getElementById('draw');

const possibleChoices = document.querySelectorAll("button");
let computerChoice;
let result;
let winNo=0, lostNo=0, drawNo=0;


possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    user.innerHTML = userChoice;
    genrateComputerChoice();
    getResult(userChoice, computerChoice);
    finalResult.innerHTML = result;
    update();
  })
);

function genrateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  computer.innerHTML = computerChoice;
}
function getResult(user, computerChoice) {
  if (computerChoice === user) {
    result = "its a draw";
    drawNo++;
  }
  if (computerChoice === "Rock" && user === "Paper") {
    result = "You WIN";
    winNo++;
  }
  if (computerChoice === "Rock" && user === "Scissors") {
    result = "You Lost";
    lostNo++;
  }
  if (computerChoice === "Scissors" && user === "Rock") {
    result = "You WIN";
    winNo++;
  }
  if (computerChoice === "Scissors" && user === "Paper") {
    result = "You Lost";
    lostNo++;
  }
  if (computerChoice === "Paper" && user === "Scissors") {
    result = "You WIN";
    winNo++;
  }
  if (computerChoice === "Paper" && user === "Rock") {
    result = "You Lost";
    lostNo++;
  }
}

function update() {
  win.innerHTML = winNo;
  lost.innerHTML = lostNo;
  draw.innerHTML = drawNo;
}
