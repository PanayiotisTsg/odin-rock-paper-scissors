// Return randomly Rock, Paper or Scissors for computer choice
function getComputerChoice() {

    // Generate a random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);

    // Return a choice based on the following:
    // Number 0 = Rock, 1 = Paper, 2 = Scissors
    switch(randomNum) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

// Return the winner based on the selections of
// the player and the computer
function playRound(playerSelection, computerSelection) {
    let roundWinner;

    // Get the winner based on both choices
    if (playerSelection === computerSelection) {
        roundWinner = 'draw';
    } else if (playerSelection === 'rock') {
        roundWinner = computerSelection === 'paper'
            ? 'computer'
            : 'player';
    } else if (playerSelection === 'paper') {
        roundWinner = computerSelection === 'rock'
            ? 'player'
            : 'computer';
    } else {
        roundWinner = computerSelection === 'rock'
            ? 'computer'
            : 'player';
    }

    return roundWinner;
}

function getScore(roundWinner) {
    if (roundWinner === 'player') playerPoints++;
    else if (roundWinner === 'computer') computerPoints++;
};

function getSelectionEmoji(selection) {
    if (selection === 'rock') return String.fromCodePoint(9994);
    else if (selection === 'paper') return String.fromCodePoint(9995);
    else if (selection === 'scissors') return String.fromCodePoint(9996);
}

// Check if the player/computer won the game - First to 5 wins
function gameWinner() {
    if (playerPoints === 5) {
        winner.textContent = 'You Won!';
        winner.style.cssText = 'border: 2px solid green;'
        playerPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        winner.textContent = 'You Lost!';
        winner.style.cssText = 'border: 2px solid red;'
        playerPoints = 0;
        computerPoints = 0;
    } else {
        winner.textContent = '';
        winner.style.cssText = 'border: none;'
    }
}

let playerPoints = 0;
let computerPoints = 0;
let roundWinner;

const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');
const winner = document.querySelector('.winner');
const playerSelectionImg = document.querySelector('.player-selection');
const computerSelectionImg = document.querySelector('.computer-selection');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        const playerSelection = e.target.id;
        const computerSelection = getComputerChoice();

        console.log(playerSelection);
        console.log(computerSelection);

        playerSelectionImg.textContent = getSelectionEmoji(playerSelection);
        computerSelectionImg.textContent = getSelectionEmoji(computerSelection);
        
        roundWinner = playRound(playerSelection, computerSelection);
        getScore(roundWinner);

        gameWinner();

        playerScore.textContent = playerPoints;
        computerScore.textContent = computerPoints;
    })
});