//CREATING A FUNCTION FOR THE WHOLE GAME
function playGame() {

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

    const choiceText = document.createElement('p');
    choiceText.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;
    results.appendChild(choiceText);
    
    // Determining the winner
    if (humanChoice === computerChoice) {
      const tieText = document.createElement('p');
      tieText.textContent = `it's a tie! You both chose ${humanChoice}`;
      results.appendChild(tieText);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
      ) {
        const winText = document.createElement('p');
        winText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        results.appendChild(winText);
        humanScore++;
      } else {
      const loseText = document.createElement('p');
      loseText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      results.appendChild(loseText);
      computerScore++;
    }

    //Display scores
    const scoreText = document.createElement('p');
    scoreText.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    results.appendChild(scoreText);
  }

  // Creating buttons
  const body = document.querySelector('body');

  const div = document.createElement('div');
  body.appendChild(div);

  const rock = document.createElement('button');
  rock.setAttribute('id', 'rock');
  rock.textContent = 'rock';
  div.appendChild(rock);
  
  const paper = document.createElement('button');
  paper.setAttribute('id', 'paper');
  paper.textContent = 'paper';
  div.appendChild(paper);
  
  const scissors = document.createElement('button');
  scissors.setAttribute('id', 'scissors');
  scissors.textContent = 'scissors';
  div.appendChild(scissors);

  // Adding event listeners
  const buttons = document.querySelectorAll('button');  // selects all buttons
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const humanSelection = button.id;
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    })
  });

  // Creating a div to display the results
  const results = document.createElement('div');
  results.setAttribute('id', 'results');
  body.appendChild(results);

}


//START THE GAME
playGame();