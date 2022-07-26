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

}

/*
Function that plays 5 rounds, keep score, and reports the winner or loser at the end
*/
function game() {
    // playRound()
}