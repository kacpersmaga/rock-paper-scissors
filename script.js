function getComputerChoice(){
    let a=Math.random()
    if(a<0.33)
        return "rock"
    else if(a<0.66)
        return "paper"
    else
        return "scissors"
}

console.log(getComputerChoice())

function getHumanChoice(str){
    if(str==="paper"||str==="rock"||str==="scissors")
    return str
}

console.log(getHumanChoice(prompt("What do you choose?")))