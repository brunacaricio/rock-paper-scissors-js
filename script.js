let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#comp-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('#result');
const action = document.querySelector('#action-message');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playAgain = document.querySelector('#play-again-btn');


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const num = Math.floor(Math.random() * 3);
  return choices[num];
}

function playRound(userChoice) {
  if (userScore === 3 || computerScore === 3) {
    displayFinalWinner();
    disableChoices();
    return;
  }

  const computerChoice = getComputerChoice();
  determineWinner(computerChoice, userChoice);

  if (userScore === 3 || computerScore === 3) {
    displayFinalWinner();
    disableChoices();
  }
}

function main() {
  rock.addEventListener('click', function() {
    playRound('rock');
  })
  paper.addEventListener('click', function() {
    playRound('paper');
  })
  scissors.addEventListener('click', function() {
    playRound('scissors');
  })
}

function disableChoices() {
  rock.removeEventListener('click', playRock);
  paper.removeEventListener('click', playPaper);
  scissors.removeEventListener('click', playScissors);
  playAgain.classList.remove('hidden');
  action.classList.add('hidden');
}

function enableChoices() {
  rock.addEventListener('click', playRock);
  paper.addEventListener('click', playPaper);
  scissors.addEventListener('click', playScissors);
  playAgain.classList.add('hidden');
  action.classList.remove('hidden');
}

function playRock() {
  playRound('rock');
}

function playPaper() {
  playRound('paper');
}

function playScissors() {
  playRound('scissors');
}

playAgain.addEventListener('click', function() {
  window.location.reload();
});

function determineWinner(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    result.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. It\'s a tie!`;
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('yellow-glow')}, 1000)
  } else if (
    (computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'scissors') ||
    (computerChoice === 'scissors' && userChoice === 'rock')
  ) {
    result.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. You get 1 point!`;
    userScore += 1;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 1000)
  } else {
    result.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. Computer gets 1 point!`;
    computerScore += 1;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 1000)
  }
  displayScore();
}

function displayScore() {
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
}

function displayFinalWinner() {
  if (userScore > computerScore) {
    result.innerHTML = 'Game Over. You win!';
  } else if (userScore < computerScore) {
    result.innerHTML = 'Game Over. Computer wins!';
  } else {
    result.innerHTML = 'Game Over. It\'s a tie!';
  }
}

main();
