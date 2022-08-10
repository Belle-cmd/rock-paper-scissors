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
        return "rock";
    } else if (randomInt <= 66) {
        return "paper";
    } else {
        return "scissors";
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
        return "Draw";
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

}

game();