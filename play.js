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
- parameters are case-sensitive; users can input "rock", "ROCK", "RocK" or any other variation
Input:
    playerSelection
    computerSelection
Output: 
    string that declares the winner of the round like so: "You Lose! Paper beats Rock"
*/
function playRound(playerSelection, computerSelection) {
    // checks for the input values, if both string, continue execution, else exit program
    if ((typeof(playerSelection) !== "string") && (typeof(computerSelection) !== "number")) {
        console.log("Invalid input");
        return;
    }
    
    // set parameter values to lowercase to ensure inputs get accepted regardless if case-sensitive or not
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    // outputs specified game result, based on the player and computer's input
    if (player == computer) {
        return `Draw; ${player} equals ${computer}!`;
    } else if ((player=="paper") && (computer=="rock")) {
        return "You win; paper beats rock!";
    } else if ((player=="paper") && (computer=="scissors")) {
        return "You lose; scissors beat paper";

    } else if ((player=="rock") && (computer=="scissors")) {
        return "You win; rock beats scissors!";
    } else if ((player=="rock") && (computer=="paper")) {
        return "You lose; paper beats rock!";

    } else if ((player=="scissors") && (computer=="paper")) {
        return "You win; scissors beats paper!";
    } else {
        return "You lose; rock beats scissors!";
    }
}

/*
Function that plays 5 rounds, keep score, and reports the winner or loser at the end
*/
function game() {
    // playRound()
}