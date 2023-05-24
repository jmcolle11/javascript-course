
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/* same function in variable score default value
it checks if the score is null then do the code
if (!score) {
    score = {
    wins: 0,
    losses:0,
    ties: 0
  }
}
*/


function playGame(playerMove) {
  computerMove = pickComputerMove();
  
  const outcomeResult = {
    win: 'You win.',
    lose: 'You lose.',
    tie:  'tie.'
  }

  let result = '';
  
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = outcomeResult.tie;
    } else if (computerMove === 'paper') {
      result = outcomeResult.lose;
    } else if (computerMove === 'scissors') {
      result = outcomeResult.win;
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = outcomeResult.win;
    } else if (computerMove === 'paper') {
      result = outcomeResult.tie;
    } else if (computerMove === 'scissors') {
      result = outcomeResult.lose;
    }

  } else if(playerMove === 'scissors'){
      if (computerMove === 'rock') {
      result = outcomeResult.lose;
    } else if (computerMove === 'paper') {
      result = outcomeResult.win;
    } else if (computerMove === 'scissors') {
      result = outcomeResult.tie;
    }
  } 

  if (result === outcomeResult.win) {
    score.wins += 1;

  } else if (result === outcomeResult.lose) {
    score.losses += 1;
    
  } else if (result === outcomeResult.tie) {
    score.ties += 1;
      
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-outcome')
    .innerHTML = result;
      
  document.querySelector('.js-moves')
    .innerHTML = `You <img src="img/${playerMove}-emoji.png" alt="" class="move-icon"> <img src="img/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`;
  
  updateScoreElement();

}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Score:\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < (1 / 3) ) {
    computerMove = 'rock';

  } else if (randomNumber >= ( 1 / 3) && randomNumber < (2 / 3)) {
    computerMove = 'paper';
    
  } else if (randomNumber >= (2 / 3) && randomNumber < 1) {
    computerMove = 'scissors';
  } 

  return computerMove;
}
