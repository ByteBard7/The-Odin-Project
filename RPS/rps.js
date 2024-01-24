const choices = ["Rock", "Paper", "Scissors"];

let randomChoice = Math.floor(Math.random() * choices.length);

function getComputerChoice() {
  return choices[randomChoice];
}

const playerSelection = prompt(
  "Enter Your Choice (Rock/Paper/Scissors): "
).toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

let compScore = 0;
let playerScore = 0;

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return `Its a Tie,You both chose ${computerSelection}`;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    compScore ++;
    return `You Lose! Rock beats Scissors.`;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore ++;
    return `You Win! Rock beats Scissors.`;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore ++;
    return `You Win! Paper beats Rock.`;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    compScore ++;
    return `You Lose! Paper beats Rock.`;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore ++;
    return `You Win! Scissors beats Paper.`;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    compScore ++;
    return `You Lose! Scissors beats Paper.`;
  } else {
    return "Enter a correct choice between (Rock/Paper/Scissors)";
  }
}

function game() {
  console.log(playRound(computerSelection, playerSelection));
  console.log(`Computer score is ${compScore}`);
  console.log(`Your score is ${playerScore}`);
}

game()

