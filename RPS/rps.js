const choices = ['Rock','Paper','Scissors'];

let randomChoice = Math.floor(Math.random()*choices.length)


function getComputerChoice(){
    return choices[randomChoice]
}

