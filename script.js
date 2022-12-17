// getComputerChoise: Randomly return rock/paper/scissors
// playRound(playerSelection,computerSelection) -> declares winner
// playerSelectionFunction should be case insensitive

function getComputerChoice() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3) + 1];
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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; ++i) {
    const PLAYER = getPlayerSelection();
    const COMPUTER = getComputerChoice();
    if (playRound(PLAYER, COMPUTER).includes("Win")) playerScore++;
    else if (playRound(PLAYER, COMPUTER).includes("Lost")) computerScore++;
    console.log(
      playRound(PLAYER, COMPUTER),
      "\nScore: " + playerScore + " " + computerScore
    );
  }

  printStatus(playerScore, computerScore);
}

game();