// getComputerChoise: Randomly return rock/paper/scissors
// playRound(playerSelection,computerSelection) -> declares winner
// playerSelectionFunction should be case insensitive

const resultsPanel = document.querySelector(".results");
const scorePanel = document.querySelector(".live-feed");

function getComputerChoice() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}

function getPlayerSelection() {
  let playerInput = prompt("whats your move?");
  return playerInput.toLowerCase();
}

function invalidInput(playerSelection) {
  return (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  );
}

function winner(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        return "Tie.";
        break;
      case "paper":
        return "You Lost. Paper beats Rock";
        break;
      default:
        return "You Win! Rock beats Scissors";
    }
  }
  if (playerSelection === "paper") {
    switch (computerSelection) {
      case "paper":
        return "Tie.";
        break;
      case "rock":
        return "You Win! Paper beats Rock";
        break;
      default:
        return "You Lost. Scissors beats Paper";
    }
  }
  if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "scissors":
        return "Tie.";
        break;
      case "paper":
        return "You Win! Scissors beats Paper";
        break;
      default:
        return "You Lost. Rock beats Scissors";
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (invalidInput(playerSelection)) {
    throw "Invalid Move!";
  }
  return winner(playerSelection, computerSelection);
}

function printStatus(playerScore, computerScore) {
  if (playerScore === computerScore) {
    console.log("Its a Tie!!");
    return;
  } else if (playerScore < computerScore) {
    console.log("You Lost!");
    return;
  } else {
    console.log("You Win!");
    return;
  }
}

let playerScore = 0;
let computerScore = 0;

function game(playerInput) {
  let result;
  const COMPUTER = getComputerChoice();
  result = playRound(playerInput, COMPUTER);
  if (result.includes("Win")) playerScore++;
  else if (result.includes("Lost")) computerScore++;
  scorePanel.textContent = playerScore + " " + computerScore;
  resultsPanel.textContent = result;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});
