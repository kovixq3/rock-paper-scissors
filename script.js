function computerPlay() {
    const x = ['Rock', 'Paper', 'Scissors'];
    const r = Math.floor(Math.random() * 3);
    return x[r];
}
const computerAct = computerPlay();

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let winAlert;

    if (playerSelection === computerSelection) {
        winAlert = 'It\s a Draw!';
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            playerScore ++;
            winAlert = 'Player Wins!';
    } else {
        computerScore ++;
        winAlert = 'Computer Wins!';
    }

    console.log(`${winAlert}`);
    console.log(`${playerScore}:${computerScore}`);
}

function game() {
    let gameEndAlert;
    playerScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerAct = prompt('Yo do something');
        playRound(playerAct, computerPlay());
    }

    if (playerScore === computerScore) {
        gameEndAlert = `It's a draw! Score: ${playerScore}:${computerScore}`;
    } else if (playerScore > computerScore) {
        gameEndAlert = `Player is the winner! Score: ${playerScore}:${computerScore}`;
    } else if (playerScore < computerScore) {
        gameEndAlert = `Computer is the winner! Score: ${playerScore}:${computerScore}`;
    }

    console.log(gameEndAlert);
}

