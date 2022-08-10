"use strict";
let playerScore = 0;
let computerScore = 0;

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

let computerHealth = document.getElementById("enemy-healthbar");
let playerHealth = document.getElementById("player-healthbar");
/**
 * Function increments playerScore or computerScore depending on a round's results.
 * @param {*} result 
 */
function UpdateScore(result) {
    if (result === "win") {
        playerScore++;
        let newWidth = computerHealth.offsetWidth - 32;
        computerHealth.style.width = `${newWidth}px`;
    } else  {
        computerScore++;
        let newWidth = playerHealth.offsetWidth - 32;
        playerHealth.style.width = `${newWidth}px`;
    }
}

/**
 * Function checks if the computer and/or player has reached 5 points. If so, the game has ended
 */
function isGameEnd() {
    if ((playerScore===5) && (computerScore===5)) {
        console.log("Draw");
        // computerScore = 0;
        // playerScore = 0;
        // // computerHealth.style.width = "160px";
        // // playerHealth.style.width = "160px";
    } else if ((playerScore===5) && (playerScore > computerScore)) {
        console.log("You win");
        // computerScore = 0;
        // playerScore = 0;
        // computerHealth.style.width = "160px";
        // playerHealth.style.width = "160px";
    } else if ((computerScore===5) && (computerScore > playerScore)) {
        console.log("You lose");
        // computerScore = 0;
        // playerScore = 0;
        // computerHealth.style.width = "160px";
        // playerHealth.style.width = "160px";
    }
}


const text = document.getElementById("text");
const buttons = document.getElementById("moves").querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let compChoice = getComputerChoice();
        text.textContent = `Player used ${btn.textContent.toLowerCase()}!\nFoe computer used ${compChoice}!`;
        let result = playRound(btn.textContent.toLowerCase(), compChoice);
        UpdateScore(result);
        isGameEnd();
    });
})
