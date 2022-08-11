"use strict";
let playerScore = 0;
let computerScore = 0;

let compHealthPanel = document.getElementById("enemy-health");
let playerHealthPanel = document.getElementById("player-health");
let computerHealth = document.getElementById("enemy-healthbar");
let playerHealth = document.getElementById("player-healthbar");
const text = document.getElementById("text");
const buttons = document.getElementById("moves").querySelectorAll('button');



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
        text.textContent += "\nIt had no effect!";
        return "draw";
    } else if ((playerSelection=="paper") && (computerSelection=="rock")) {
        text.textContent += "\n It's super effective! Foe takes damage!";
        return "win";
    } else if ((playerSelection=="paper") && (computerSelection=="scissors")) {
        text.textContent += "\n It wasn't very effective! Player takes damage!";
        return "lose";

    } else if ((playerSelection=="rock") && (computerSelection=="scissors")) {
        text.textContent += "\n It's super effective! Foe takes damage!";
        return "win";
    } else if ((playerSelection=="rock") && (computerSelection=="paper")) {
        text.textContent += "\n It wasn't very effective! Player takes damage!";
        return "lose";
    } else if ((playerSelection=="scissors") && (computerSelection=="paper")) {
        text.textContent += "\n It's super effective! Foe takes damage!";
        return "win";
    } else {
        text.textContent += "\n It wasn't very effective! Player takes damage!";
        return "lose";
    }
}


/**
 * Function increments playerScore or computerScore depending on a round's results.
 * @param {*} result 
 */
function UpdateScore(result) {
    if (result === "win") {
        playerScore++;
        let newWidth = computerHealth.offsetWidth - 32;
        computerHealth.style.width = `${newWidth}px`;
    } else if (result === "lose")  {
        computerScore++;
        let newWidth = playerHealth.offsetWidth - 32;
        playerHealth.style.width = `${newWidth}px`;
    }
}

/**
 * Function checks if the computer and/or player has reached 5 points. If so, the game has ended.
  * Returns boolean indicating the game's end
 */
function EndGameStatus() {
    if ((playerScore===5) && (computerScore===5)) {
        text.textContent = "The battle ends with a draw! Both creatures survive!";
        return true;
    } else if ((playerScore===5) && (playerScore > computerScore)) {
        text.textContent = "Foe has fainted! Player defeated COMPUTER!"
        return true;
    } else if ((computerScore===5) && (computerScore > playerScore)) {
        text.textContent = "You have no more creature that can fight! You lost $500!";
        return true;
    } else {
        return false;
    }
}

function healthBarAnimation() {
    compHealthPanel.classList.add("slide-left");
    playerHealthPanel.classList.add("slide-right");

    setTimeout(() => {
        compHealthPanel.classList.remove("slide-left");
        playerHealthPanel.classList.remove("slide-right");
    }, 5000);

}

healthBarAnimation();  // start animation as soon as the game loads

function RestartGame() {
    computerScore = 0;
    playerScore = 0;
    computerHealth.style.width = "160px";
    playerHealth.style.width = "160px";
    playerHealth.style.backgroundColor = "rgb(44, 237, 44)";  // green
    computerHealth.style.backgroundColor = "rgb(44, 237, 44)";
    text.textContent = "Foe wants to fight!";

    healthBarAnimation();  // trigger animation
}



buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let compChoice = getComputerChoice();
        text.textContent = `Player used ${btn.textContent.toLowerCase()}!\nFoe computer used ${compChoice}!`;
        let result = playRound(btn.textContent.toLowerCase(), compChoice);
        
        UpdateScore(result);
        EndGameStatus();

        // RestartGame();
    });
})
