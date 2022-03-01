function computerPlay() {
    const x = ['Rock', 'Paper', 'Scissors'];
    const r = Math.floor(Math.random() * 3);
    return x[r];
}

function playRound(playerSelection, computerSelection) {
    const playerWinAlert = 'Player Wins!';
    const computerWinAlert = 'Computer Wins!';

    if (playerSelection === computerSelection) {
        return 'It\s a Draw!';
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            return playerWinAlert;
    } else {
        return computerWinAlert;
    }
}


function game() {
    // while gameend !true
    // prompt asking
    // put result in playerselection var and call playround
    // alrt score

    // end when one of them is five
    for (let i = 0; i < 5; i++) {

    }
}


// run the game
const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

