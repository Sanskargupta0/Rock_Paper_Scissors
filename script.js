let currentScore = 0;
let highScore = localStorage.getItem('highScore') || 0;

document.getElementById('current-score').textContent = currentScore;
document.getElementById('high-score').textContent = highScore;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        currentScore++;
        if (currentScore > highScore) {
            highScore = currentScore;
            localStorage.setItem('highScore', highScore);
            document.getElementById('high-score').textContent = highScore;
        }
        return 'You win!';
    }

    currentScore = 0;
    return 'You lose!';
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById('current-score').textContent = currentScore;
    document.getElementById('result').textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));