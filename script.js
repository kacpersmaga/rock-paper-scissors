let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    const computerChoice=Math.floor(Math.random()*3)

    switch(computerChoice){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}


function getHumanChoice(){
    let playerInput = prompt("What do you choose?").toLowerCase()

    if(playerInput==="paper"||playerInput==="rock"||playerInput==="scissors") return playerInput

    else {
    console.log("Invalid input. You can only choose between: rock, paper, scissors")
    return getHumanChoice()
    }

}



/**
 * 
 * @param {string} humanChoice 
 * @param {string} computerChoice 
 */


function playRound(humanChoice, computerChoice){
    let textResult = document.querySelector("#textResult")
    
    if(humanChoice===computerChoice)
        textResult.textContent =("It is a draw")

    if(humanChoice==="paper")
        if(computerChoice==="rock"){
            humanScore+=1
            textResult.textContent = ("You won! Paper beats Rock")
        }
        else if(computerChoice==="scissors"){
            computerScore+=1
            textResult.textContent = ("You lost. Scissors beats paper ")
        }

    if(humanChoice==="rock")
        if(computerChoice==="scissors"){
            humanScore+=1
            textResult.textContent = ("You won! Rock beats scissors")
            }
        else if(computerChoice==="paper"){
            computerScore+=1
            textResult.textContent = ("You lost. Paper beats rock ")
        }

    if(humanChoice==="scissors")
        if(computerChoice==="paper"){
            humanScore+=1
            textResult.textContent = ("You won! Scissors beats paper")
        }
        else if(computerChoice==="rock"){
            computerScore+=1
            textResult.textContent = ("You lost. Rock beats scissors ")
        } 

        document.querySelector("#humanScore").textContent = "Your score: " + humanScore
        document.querySelector("#computerScore").textContent = "Computer score: " + computerScore
}
let rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));

document.querySelector("#paper-btn").addEventListener("click", () => playRound("paper", getComputerChoice()));

document.querySelector("#scissors-btn").addEventListener("click", () => playRound("scissors", getComputerChoice()));

