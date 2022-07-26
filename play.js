"use strict";

/*
Function that randomly returns either "Rock", "Paper" or "Scissors".
This acts as the computer's play.
Input: 
    None
Output: 
    String output "Rock", "Paper", or "Scissors"
*/
function getComputerChoice() {
    let randomInt = Math.floor(Math.random()*100);  // generates a number from 0-99

    // depending on the value of randomInt, this function will return rock, paper, scissors
    if (randomInt <= 33) {
        return "Rock";
    } else if (randomInt <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


/*
Function that plays a single round of Rock Paper Scissors.
Input:
    playerSelection - the user's input
    computerSelection - computer's turn
Output: 
    string indicating if the player wins or loses
*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Draw; ${playerSelection} equals ${computerSelection}!`;
    } else if ((playerSelection=="paper") && (computerSelection=="rock")) {
        return "win";
    } else if ((playerSelection=="paper") && (computerSelection=="scissors")) {
        return "lose";

    } else if ((playerSelection=="rock") && (computerSelection=="scissors")) {
        return "win";
    } else if ((playerSelection=="rock") && (computerSelection=="paper")) {
        return "lose";

    } else if ((playerSelection=="scissors") && (computerSelection=="paper")) {
        return "win";
    } else {
        return "lose";
    }
}

/*
Ask user for a proper input. The function will only accept the inputs rock, paper, or scissors.
userInput() will not stop asking for input until it receives the proper input. It will ignore any
input that isn't rock, paper, scissors.
Input:
    None
Output:
    The input rock, paper, or scissors from the user
*/
function userInput() {
    let input;
    while (input == null) {
        input = prompt("Your move? ").toLowerCase();
        if ((input == "rock") || (input == "paper") || input == "scissors") {
            return input;
        } else {
            input = null;
        }
    }
}

/*
Function that plays 5 rounds, keep score, and reports the winner or loser at the end
*/
function game() {
    console.log("Rock, paper, scissors! Commence battle!");
    let counter = 0;
    let playerScore = 0;
    let computerScore = 0;
    let outcome;
    while (counter != 5) {
        // retrieve inputs for player and computer
        let player = userInput();
        let computer = getComputerChoice();

        // output user input and computer's choice into console
        console.log(`You: ${player}\nComputer: ${computer}`);

        // play a match and increment score
        outcome = playRound(player, computer);
        if (outcome.search("win") != -1) {
            playerScore++;
        } else if (outcome.search("lose") != -1) {
            computerScore++;
        } 
        counter++;
    }
    
    if (playerScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > playerScore) {
        console.log("You lose the game!")
    } else {
        console.log("Draw!")
    }
}

// game();