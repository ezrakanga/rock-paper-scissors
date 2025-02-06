// CREATING A FUNCTION TO DEFINE THE COMPUTER CHOICE
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors'
  }
}

// CREATING A FUNCTION TO DEFINE THE HUMAN CHOICE
function getHumanChoice() {
  let choice = prompt(`Enter 'rock', 'paper' or 'scissors':`).toLowerCase().trim();
  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choice;
  } else {
    alert(`You've entered an invalid choice`);
    return getHumanChoice(); // Ask again if input is invalid
  }
}


//CREATING PLAYER SCORES VARIABLES
let humanScore = 0;
let computerScore = 0;


// CREATING A FUNCTION TO DEFINE PLAYING A SINGLE ROUND
function playRound(humanChoice, computerChoice) {
  //normalize humanChoice to lowercase
  humanChoice = humanChoice.toLowerCase().trim();
  console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}`);

  // Determining the winner
  if (humanChoice === computerChoice) {
    console.log(`it's a tie! You both chose ${humanChoice}.`);
  } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  //Display scores
  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}