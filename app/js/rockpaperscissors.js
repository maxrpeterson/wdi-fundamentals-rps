////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == "rock" && computerMove == "scissors") {
        winner = "player";
    } else if (playerMove == "scissors" && computerMove == "paper") {
        winner = "player";
    } else if (playerMove == "paper" && computerMove == "rock") {
        winner = "player";
    } else if (playerMove == computerMove) {
        winner = "tie";
    } else {
        winner = "computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        var pMove = getPlayerMove();
        var cMove = getComputerMove();
        var winner = getWinner(pMove, cMove);
        if (winner == "player") {
            playerWins += 1;
            console.log("Player wins!");
        } else if (winner == "computer") {
            computerWins += 1;
            console.log("Computer wins!");
        } else if (winner == "tie") {
            console.log("It's a tie!");
        }
        console.log("Player chose " + pMove + " while the computer chose " + cMove);
        console.log("Score is currently " + playerWins + " Player to " + computerWins + " Computer");
    }
    return [playerWins, computerWins];
}

