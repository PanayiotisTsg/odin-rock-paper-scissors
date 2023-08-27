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