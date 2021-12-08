function runGame() {
    
    let guessString = "";
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    // const target = Math.floor(Math.random() * 100) + 1;
    const randomNumber = Math.random() * 100;                                                       // number between 0-99, not an integer atm
    const randomInteger = Math.floor(randomNumber);                                                 // now randomInteger is an integer between 0-99
    const target = randomInteger + 1;                                                               // now target is an integer between 1-100
    
    do {
        guessString = prompt("I am thinking of a number from 1 to 100.\n\nWhat is your guess?");   // here \n\n creates two new lines
        if (guessString === null) {
            return;
        }
        guessNumber = +guessString;                                                                // + as prefix to variable preforms numberic conversion. converts string to number
        numTries += 1;
        correct = checkGuess(guessNumber, target);                                                 // compare values, true if a match, false if no match
    } while (!correct);                                                                            // when true we exit loop

    alert("You guessed correct! The number was " + target +".\n\nIt took you " + numTries + " tries to guess the number.");
}

function checkGuess(guessNumber, target){
    let correct = false;                                                                        

    if (isNaN(guessNumber)) {                                                                      // isNaN() is a  built in function to check if value is a valid number
        alert("Your have not entered a number.\n\nPlease enter a number in the 1-100 range.");
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert("Please enter an integer in the 1-100 range.");
    } else if (guessNumber > target) {
        alert("Your Number is too large!");
    }else if (guessNumber < target) {
        alert("Your number is too small!");
    } else {
        correct = true;
    }
    return correct;
}