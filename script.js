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