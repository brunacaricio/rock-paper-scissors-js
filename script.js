function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  let choice = prompt('Enter your choice: rock, paper or scissors?');
  return choice.toLowerCase();
}

function determineWinner(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    alert(`You chose ${humanChoice} and the computer chose ${computerChoice}. It\'s a tie!`);
  } else if (computerChoice === 'rock' && humanChoice === 'paper') {
    alert(`You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`);
  } else if  (computerChoice === 'paper' && humanChoice === 'scissors') {
    alert(`You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`);
  } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
    alert(`You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`);
  } else {
    alert(`You chose ${humanChoice} and the computer chose ${computerChoice}. You lose!`);
  }
}

determineWinner(getComputerChoice(), getHumanChoice());
