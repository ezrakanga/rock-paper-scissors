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
        updateScore();
      } else {
      const loseText = document.createElement('p');
      loseText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      results.appendChild(loseText);
      computerScore++;
      updateScore();
    }
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

  // Score display
  const scoreDisplay = document.createElement('p');
  results.appendChild(scoreDisplay);

  //Score updates
  function updateScore() {
    scoreDisplay.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore >= 5 || computerScore >= 5) {
      declareWinner();
    }
  }
  updateScore();

  // Declare winner
  function declareWinner() {
    const gameOverMsg = document.createElement('h3');
    results.appendChild(gameOverMsg);
    if (humanScore > computerScore) {
      gameOverMsg.textContent = `Gameover. You win!`
    } else {
      gameOverMsg.textContent = `Gameover. Computer wins!`
    }

    // Disable buttons
    buttons.forEach(button => button.disabled = true);
  }

}


//START THE GAME
playGame();