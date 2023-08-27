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
        return 'The round is a draw!';
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

// Play a 5 round game - Keep the score - Report the winner
function game() {
    // Initialize player/computer points and declare selections
    let playerPoints = 0;
    let computerPoints = 0;
    let roundWinner = '';
    let playerSelection;
    let computerSelection;

    for (let i = 1; i <= 5; i++) {
        // Set the player and computer selection for the round
        playerSelection = prompt('Enter your choice: ');
        computerSelection = getComputerChoice();

        // Play a round and store the result (Round winner)
        roundWinner = playRound(playerSelection, computerSelection);

        // Check the 5th character of the result to identify the winner
        // Add a point to the player/computer accordingly 
        switch(roundWinner[4]) {
            case 'W':
                playerPoints++;
                break;
            case 'L':
                computerPoints++;
                break;
        }
        console.log(roundWinner);
    }

    // Check who got the most points and return the winner
    return playerPoints > computerPoints ? 'You won the game!'
        : playerPoints < computerPoints ? 'Computer won the game!'
        : 'The game is a draw!'
}

console.log(game());