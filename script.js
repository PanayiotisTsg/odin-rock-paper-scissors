// Return randomly Rock, Paper or Scissors for computer choice
function getComputerChoice() {

    // Generate a random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);

    // Return a choice based on the following:
    // Number 0 = Rock, 1 = Paper, 2 = Scissors
    switch(randomNum) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

// Return the winner based on the selections of
// the player and the computer
function playRound(playerSelection, computerSelection) {
    let roundWinner;
    // Convert first letter of playerSelection to uppercase and the rest to lowercase 
    let firstPart = playerSelection[0].toUpperCase();
    let secondPart = playerSelection.slice(1).toLowerCase();
    playerSelection = firstPart + secondPart;

    // Get the winner based on both choices
    if (playerSelection === computerSelection) {
        roundWinner = 'draw';
    } else if (playerSelection === 'Rock') {
        roundWinner = computerSelection === 'Paper'
            ? 'computer'
            : 'player';
    } else if (playerSelection === 'Paper') {
        roundWinner = computerSelection === 'Rock'
            ? 'player'
            : 'computer';
    } else {
        roundWinner = computerSelection === 'Rock'
            ? 'computer'
            : 'player';
    }

    return roundWinner;
}

function getScore(roundWinner) {
    if (roundWinner === 'player') playerPoints++;
    else if (roundWinner === 'computer') computerPoints++;
};

let playerPoints = 0;
let computerPoints = 0;
let roundWinner;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');
const winner = document.querySelector('.winner');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        const playerSeletion = e.target.id;
        const computerSelection = getComputerChoice();

        console.log(playerSeletion);
        console.log(computerSelection);
        
        roundWinner = playRound(playerSeletion, computerSelection);
        getScore(roundWinner);

        if (playerPoints === 5) {
            winner.textContent = 'You Won!';
            playerPoints = 0;
            computerPoints = 0;
        } else if (computerPoints === 5) {
            winner.textContent = 'Computer Won!';
            playerPoints = 0;
            computerPoints = 0;
        }

        playerScore.textContent = playerPoints;
        computerScore.textContent = computerPoints;
    })
});