let score = JSON.parse(localStorage.getItem
  ('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

updateScoreElement();

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(function (){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else{
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (computerMove === 'rock') {
    if (playerMove === 'rock') result = 'Tie';
    else if (playerMove === 'paper') result = 'You win';
    else if (playerMove === 'scissors') result = 'You lose';

  } else if (computerMove === 'paper'){
    if (playerMove === 'rock') result = 'You lose';
    else if (playerMove === 'paper') result = 'Tie';
    else if (playerMove === 'scissors') result = 'You win';

  } else if (computerMove === 'scissors'){
    if (playerMove === 'rock') result = 'You win';
    else if (playerMove === 'paper') result = 'You lose';
    else if (playerMove === 'scissors') result = 'Tie';
  }

  // Updating the score
  if (result === 'You win') score.wins++;
  else if (result === 'You lose') score.losses++;
  else if (result === 'Tie') score.ties++;

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML =  `You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }
  return computerMove;
}