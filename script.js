function computerPlay() {
    const x = ['Rock', 'Paper', 'Scissors'];
    const r = Math.floor(Math.random() * 3);
    return x[r];
}

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        displayResult.textContent = `It's a Draw!`;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            playerScore ++;
            displayResult.textContent = `Player Wins!`;
    } else {
        computerScore ++;
        displayResult.textContent = `Computer Wins!`;
    }

    displayPS.textContent = playerScore;
    displayCS.textContent = computerScore;

    if (playerScore == 5 || computerScore == 5) gameEnd();
}

function gameEnd() {
    if (playerScore > computerScore) {
        displayResult.textContent = `Game over, Player is the winner!`;
    } else if (playerScore < computerScore) {
        displayResult.textContent = `Game over, Computer is the winner!`;
    }
    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll('button');
const displayPS = document.querySelector('#player-score');
const displayCS = document.querySelector('#computer-score');
const displayResult = document.querySelector('#result');

btn.forEach(e => {
    e.addEventListener('click', () => {
        play(e.textContent, computerPlay());
    });
});