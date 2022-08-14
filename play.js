"use strict";
let playerScore = 0;
let computerScore = 0;
let gameOutcome = "";  // outcome of a game (false = you lose, true = you win)

let compHealthPanel = document.getElementById("enemy-health");
let playerHealthPanel = document.getElementById("player-health");
let computerHealth = document.getElementById("enemy-healthbar");
let playerHealth = document.getElementById("player-healthbar");
let bannerTop = document.getElementById("banner-top");
let bannerBottom = document.getElementById("banner-bottom");
const computerArea = document.getElementById("enemy-area");
const playerArea = document.getElementById("player-area");
const text = document.getElementById("text");
const buttons = document.getElementById("moves").querySelectorAll('button');
const gameOutcomeID = document.getElementById("game-result");
const playerAttackImgID = document.getElementById("player-attack-img");
const compAttackImgID = document.getElementById("enemy-attack-img");
const playerMovementID = document.getElementById("player-sprite");  // triggers breathing/faint animation
const compMovementID = document.getElementById("enemy-sprite");



/**
 * This function randomly returns either "Rock", "Paper" or "Scissors". 
 * This acts as the computer's play.
 * @returns String output "Rock", "Paper", or "Scissors"
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



/**
 * Function that plays a single round of Rock Paper Scissors.
 * @param {*} playerSelection   the user's input
 * @param {*} computerSelection computer's turn
 * @returns string indicating if the player wins or loses
 */
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        text.textContent += "\n\nIt had no effect!";
        return "draw";
    } else if ((playerSelection=="paper") && (computerSelection=="rock")) {
        text.textContent += "\n It's super effective!\nFoe takes damage!";
        return "win";
    } else if ((playerSelection=="paper") && (computerSelection=="scissors")) {
        text.textContent += "\n It wasn't very effective!\nPlayer takes damage!";
        return "lose";

    } else if ((playerSelection=="rock") && (computerSelection=="scissors")) {
        text.textContent += "\n It's super effective!\nFoe takes damage!";
        return "win";
    } else if ((playerSelection=="rock") && (computerSelection=="paper")) {
        text.textContent += "\n It wasn't very effective!\nPlayer takes damage!";
        return "lose";
    } else if ((playerSelection=="scissors") && (computerSelection=="paper")) {
        text.textContent += "\n It's super effective!\nFoe takes damage!";
        return "win";
    } else {
        text.textContent += "\n It wasn't very effective!\nPlayer takes damage!";
        return "lose";
    }
}



/**
 * Function increments playerScore or computerScore depending on a round's results.
 * @param {*} result    outcome of a round
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
    if ((playerScore===5) && (playerScore > computerScore)) {
        text.textContent = "Foe has fainted! Player defeated COMPUTER!"
        gameOutcome = "Winner";
        compMovementID.classList.remove("enemy-breathe");
        compMovementID.classList.add("faint");
        return true;
    } else if ((computerScore===5) && (computerScore > playerScore)) {
        text.textContent = "You have no more creature that can fight! You lost $500!";
        gameOutcome = "Loser";
        playerMovementID.classList.remove("player-breathe");
        playerMovementID.classList.add("faint");
        return true;
    } else {
        return false;
    }
}



/**
 * Function that add and remove css classes that play animations.
 * @param {*} element1  DOM element to alter
 * @param {*} class1    css class to add/remove to element1
 * @param {*} element2  DOM element to alter
 * @param {*} class2    css class to add/remove to element2
 * @param {*} seconds   time duration the program should wait before removing a class from its element
 */
function StartAnimation(element1, class1, element2, class2, seconds) {
    element1.classList.add(class1);
    element2.classList.add(class2);

    setTimeout(() => {
        element1.classList.remove(class1);
        element2.classList.remove(class2);
    }, seconds);
}



/**
 * This function adds HTML elements describing the result of the game (i.e. If the player wins or loses).
 * It also adds a "play again" button to let users replay the program.
 */
function ShowResult() {
    gameOutcomeID.classList.add("game-result");

    const message = document.createElement("h1");
    message.textContent = gameOutcome + "!";
    const retryBtn = document.createElement("button");
    retryBtn.textContent = "Play Again";
    retryBtn.classList.add("play-again");
    retryBtn.addEventListener("click", () => {RestartGame();});
    gameOutcomeID.appendChild(message);
    gameOutcomeID.appendChild(retryBtn);
}



/**
 * This function changes the colour of the healthbar depending on the div's current width
 */
function UpdateHealthColour() {
    if ((computerHealth.offsetWidth <= 96) && (computerHealth.offsetWidth > 32)) {
        computerHealth.style.backgroundColor = "#fadf2f";  // yellow
    } else if (computerHealth.offsetWidth <= 32) {
        computerHealth.style.backgroundColor = "#ed231c";
    }
    
    if ((playerHealth.offsetWidth <= 96) && (playerHealth.offsetWidth > 32)) {
        playerHealth.style.backgroundColor = "#fadf2f";  // yellow
    } else if (playerHealth.offsetWidth <= 32) {
        playerHealth.style.backgroundColor = "#ed231c";
    }
}



/**
 * This function hides/shows the attack the user and the computer chooses to do, into the scene.
 * It retrieves the image that matches their move.
 * @param {*} playerMove    player's attack (either rock, paper, scissors)
 * @param {*} compMove      computer's attack (either rock, paper, scissors)
 */
function showAttack(playerMove, compMove) {
    playerAttackImgID.src = `img/${playerMove}.png`;
    playerAttackImgID.style.visibility = "visible";

    compAttackImgID.src = `img/${compMove}.png`;
    compAttackImgID.style.visibility = "visible";
}



// start animation as soon as the game loads
window.onload = (event) => {
    StartAnimation(bannerTop, "top", bannerBottom, "bottom", 3000);
    StartAnimation(compHealthPanel, "slide-left", playerHealthPanel, "slide-right", 5000);
    StartAnimation(computerArea, "slide-right", playerArea, "slide-left", 4000) 
};



buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let compChoice = getComputerChoice();
        text.textContent = `Player used ${btn.textContent.toLowerCase()}!\nFoe computer used ${compChoice}!`;
        showAttack(btn.textContent.toLowerCase(), compChoice);
        let result = playRound(btn.textContent.toLowerCase(), compChoice);
        
        UpdateScore(result);
        UpdateHealthColour();
        if (EndGameStatus()) {
            ShowResult();
        }
    });
})



/**
 * Function runs when user clicks "play again" button. This function restarts all values
 * needed to replay the game, including css animations.
 */
function RestartGame() {
    computerScore = 0;
    playerScore = 0;
    computerHealth.style.width = "160px";
    playerHealth.style.width = "160px";
    playerHealth.style.backgroundColor = "rgb(44, 237, 44)";  // green
    computerHealth.style.backgroundColor = "rgb(44, 237, 44)";
    text.textContent = "Foe wants to fight!";

    playerAttackImgID.style.visibility = "hidden";  // hide the attack image of the sprites
    compAttackImgID.style.visibility = "hidden";

    compMovementID.classList.remove("faint");
    compMovementID.classList.add("enemy-breathe");
    playerMovementID.classList.remove("faint");
    playerMovementID.classList.add("player-breathe");

    StartAnimation(compHealthPanel, "slide-left", playerHealthPanel, "slide-right", 5000);
    StartAnimation(computerArea, "slide-right", playerArea, "slide-left", 4000)

    // delete all childnodes (message, button) of the screen showing the game's outcome
    // so that it can be rewritten by the new game's outcome
    while (gameOutcomeID.firstChild) {
        gameOutcomeID.removeChild(gameOutcomeID.lastChild);
    }
    gameOutcomeID.classList.remove("game-result");  // remove css style to hide the game end screen
}