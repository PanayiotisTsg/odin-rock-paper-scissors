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

    // Convert first letter of playerSelection to uppercase and the rest to lowercase 
    let firstPart = playerSelection[0].toUpperCase();
    let secondPart = playerSelection.slice(1).toLowerCase();
    playerSelection = firstPart + secondPart;

    // Get the winner based on both choices
    if (playerSelection === computerSelection) {
        return 'It\'s a draw!';
    } else if (playerSelection === 'Rock') {
        return computerSelection === 'Paper'
            ? 'You Lose! Paper beats Rock'
            : 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'Paper') {
        return computerSelection === 'Rock'
            ? 'You Win! Paper beats Rock'
            : 'You Lose! Scissors beats Paper';
    } else {
        return computerSelection === 'Rock'
            ? 'You Lose! Rock beats Scissors'
            : 'You Win! Scissors beats Paper';
    }
}