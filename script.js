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

// Return the round winner based on the selections of
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

// Display index colors based on the winner of the round
function displayRWIndex(roundWinner) {
    if (playerPoints === 0 && computerPoints === 0) {
        playerIndex.style.border = GREY_BORDER;
        pcIndex.style.border = GREY_BORDER;
        return;
    }

    switch (roundWinner) {
        case 'player':
            playerIndex.style.border = GREEN_BORDER;
            pcIndex.style.border = RED_BORDER;
            break;
        case 'computer':
            pcIndex.style.border = GREEN_BORDER;
            playerIndex.style.border = RED_BORDER;
            break;
        case 'draw':
            playerIndex.style.border = GREY_BORDER;
            pcIndex.style.border = GREY_BORDER;
    }
}

function getSelectionEmoji(selection) {
    if (selection === 'rock') return String.fromCodePoint(9994);
    else if (selection === 'paper') return String.fromCodePoint(9995);
    else if (selection === 'scissors') return String.fromCodePoint(9996);
}

// Check if the player/computer won the game - First to 5 wins
function gameWinner() {
    if (playerPoints === 5) {
        winner.textContent = 'You Won!';
        winner.style.border = GREEN_BORDER;
        gameEnded = true;
        return true;
    } else if (computerPoints === 5) {
        winner.textContent = 'You Lost!';
        winner.style.border = RED_BORDER;
        gameEnded = true;
        return true;
    } else {
        winner.textContent = '';
        winner.style.border = 'none';
        gameEnded = false;
        return false;
    }
}

function displayPlayAgain() {
    playAgainBtn.style.display = 'block';
}

function hidePlayAgain() {
    playAgainBtn.style.display = 'none';
}

function playGame(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();

    //console.log(playerSelection);
    //console.log(computerSelection);

    playerSelectionImg.textContent = getSelectionEmoji(playerSelection);
    computerSelectionImg.textContent = getSelectionEmoji(computerSelection);
    
    roundWinner = playRound(playerSelection, computerSelection);
    getScore(roundWinner);

    if (gameWinner()) displayPlayAgain();
    else hidePlayAgain();

    displayRWIndex(roundWinner);

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;

    if (gameEnded) {
        selectButtons.forEach(btn => {
            btn.removeEventListener('click', playGame)
            btn.style.cursor = 'not-allowed';
        });
    }
}

function resetGame(e) {
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;

    hidePlayAgain();
    gameWinner();
    displayRWIndex();

    selectButtons.forEach(btn => {
        btn.addEventListener('click', playGame);
        btn.style.cursor = 'pointer';
    });
}

let playerPoints = 0;
let computerPoints = 0;
let roundWinner;
let gameEnded;

const selectButtons = document.querySelectorAll('.select-btn');
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');
const winner = document.querySelector('.winner');
const playerSelectionImg = document.querySelector('.player-selection');
const computerSelectionImg = document.querySelector('.computer-selection');
const playerIndex = document.querySelector('.player-index');
const pcIndex = document.querySelector('.pc-index');
const playAgainBtn = document.querySelector('.play-again-btn');

const GREY_BORDER = '2px solid #495964';
const GREEN_BORDER = '2px solid green';
const RED_BORDER = '2px solid red';

selectButtons.forEach(btn => {
    btn.addEventListener('click', playGame);
});

playAgainBtn.addEventListener('click', resetGame);