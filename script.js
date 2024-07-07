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
    
    if(humanChoice===computerChoice){
        textResult.style.color = "#5276adc2"
        textResult.textContent =("It is a draw")
    }

    if(humanChoice==="paper")
        if(computerChoice==="rock"){
            humanScore+=1
            textResult.textContent = ("You won! Paper beats Rock")
            textResult.style.color = "#509750"
        }
        else if(computerChoice==="scissors"){
            computerScore+=1
            textResult.textContent = ("You lost. Scissors beats paper ")
            textResult.style.color = "#bf7070"
        }

    if(humanChoice==="rock")
        if(computerChoice==="scissors"){
            humanScore+=1
            textResult.textContent = ("You won! Rock beats scissors")
            textResult.style.color = "#509750"
            }
        else if(computerChoice==="paper"){
            computerScore+=1
            textResult.textContent = ("You lost. Paper beats rock ")
            textResult.style.color = "#bf7070"
        }

    if(humanChoice==="scissors")
        if(computerChoice==="paper"){
            humanScore+=1
            textResult.textContent = ("You won! Scissors beats paper")
            textResult.style.color = "#509750"
        }
        else if(computerChoice==="rock"){
            computerScore+=1
            textResult.textContent = ("You lost. Rock beats scissors ")
            textResult.style.color = "#bf7070"
        } 

        if(humanScore===5){
            textResult.textContent = ("You won whole game. Congratulations! ")
            textResult.style.color = "#00ff39"
        }  

        if(computerScore===5){
            textResult.textContent = ("You lost whole game. Don't worry! ")
            textResult.style.color = "red"
        }  

        document.querySelector(".human").textContent = "Your score: " + humanScore
        document.querySelector(".computer").textContent = "Computer score: " + computerScore

        if(humanScore===5||computerScore===5){
            humanScore=0;
            computerScore=0;
        }
}
let rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));

document.querySelector("#paper-btn").addEventListener("click", () => playRound("paper", getComputerChoice()));

document.querySelector("#scissors-btn").addEventListener("click", () => playRound("scissors", getComputerChoice()));

