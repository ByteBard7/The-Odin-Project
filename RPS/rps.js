let compScore = 0;
let playerScore = 0;


function playGame() {
  let n = 0; // this variable is used in while loop to determine how many rounds to play

  // asking user input for how many rounds to play
  const rounds = Number(prompt("How Many Rounds Do You Want To Play? : "));

  // computer and player score

  // checking the type of rounds variable
  if (typeof rounds !== "number") {
    console.log("Enter a Valid Value/Number");
  }

  // round count indicator
  let roundCount = 0;

  // looping through rounds
  while (n < rounds) {
    n++;
    roundCount++;

    // computer choices
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);

    // selecting random choice for computer
    function getComputerChoice() {
      return choices[randomChoice];
    }

    // asking user to input their choice
    const playerSelection = prompt(
      "Enter Your Choice (Rock/Paper/Scissors): "
    ).toLowerCase();

    // assigning computer choice to variable
    const computerSelection = getComputerChoice();

    // comparing choices
    function playRound(computerSelection, playerSelection) {
      if (computerSelection === playerSelection) {
        return `Its a Tie,You both chose ${computerSelection}`;
      } else if (
        computerSelection === "rock" &&
        playerSelection === "scissors"
      ) {
        compScore++;
        return `You Lose! Rock beats Scissors.`;
      } else if (
        computerSelection === "scissors" &&
        playerSelection === "rock"
      ) {
        playerScore++;
        return `You Win! Rock beats Scissors.`;
      } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        return `You Win! Paper beats Rock.`;
      } else if (computerSelection === "paper" && playerSelection === "rock") {
        compScore++;
        return `You Lose! Paper beats Rock.`;
      } else if (
        computerSelection === "paper" &&
        playerSelection === "scissors"
      ) {
        playerScore++;
        return `You Win! Scissors beats Paper.`;
      } else if (
        computerSelection === "scissors" &&
        playerSelection === "paper"
      ) {
        compScore++;
        return `You Lose! Scissors beats Paper.`;
      } else {
        prompt("Enter a correct choice between (Rock/Paper/Scissors)");
      }
    }

    // displaying details about each round
    function game() {
      console.log(`Round No.${roundCount}`);
      console.log(`Computer Chose : ${computerSelection}`);
      console.log(`Player Chose : ${playerSelection}`);
      console.log(playRound(computerSelection, playerSelection));
      showCompScore.innerText = `Computer Score : ${compScore}`;
    }

    game();
  }

  // displaying total score at the end
  if (n === rounds) {
    console.log(`Computer score is ${compScore}`);
    console.log(`Your score is ${playerScore}`);
  }
}

playGame();

let wannaPlay = true;

while (wannaPlay !== false) {
  let playAgain = prompt("Wanna play again ? (yes/no) : ").toLowerCase();
  if (playAgain === "yes") {
    playGame();
  } else {
    wannaPlay = false;
  }
}
