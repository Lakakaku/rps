function getHumanChoice() {
  const choice = prompt("Rock, Paper or Scissors? ").toLowerCase();
  if (["rock", "paper", "scissors"].includes(choice)) {
    return choice;
  } else {
    console.log("Invalid choice, please choose Rock, Paper, or Scissors.");
    return getHumanChoice();
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[getRandomInt(3)];
}

function getResult(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    console.log(`You both chose ${humanChoice}. It's a draw!`);
    return "draw";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    console.log(`Computer chose ${computerChoice}. You lost this round!`);
    return "lose";
  } else {
    console.log(`Computer chose ${computerChoice}. You won this round!`);
    return "win";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = getResult(humanChoice, computerChoice);

    if (result === "win") {
      humanScore++;
    } else if (result === "lose") {
      computerScore++;
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
    console.log();
  }

  console.log("Game over!");
  if (humanScore > computerScore) {
    console.log("You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("Computer is the overall winner!");
  } else {
    console.log("The game is a draw!");
  }
}

// Start the game
playGame();

