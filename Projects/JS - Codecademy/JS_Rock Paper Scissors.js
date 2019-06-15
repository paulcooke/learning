// Rock Paper Scissors

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
     return userInput;
  } else if (userInput === 'scissors') {
     return userInput;
  } else if (userInput === 'bomb') {
     return userInput;
  }else {
    console.log('Invalid input');
  }
};

const getComputerChoice = () => {
  computerInput = Math.floor(Math.random() * 3);
  if (computerInput === 0) {
  	return 'rock';
  } else if (computerInput === 1) {
  	return 'paper';
  } else {
    return 'scissors';
  }
};

//console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
    return 'The game was a tie!';
  }
  if (userChoice === 'bomb') {
    return 'User cheated and won!'
  } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Computer won!';
        } else {
          return 'User won!';
        }
  } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'Computer won!';
        } else {
          return 'User won!';
  		  }
  } else {
    if (computerChoice === 'rock') {
      	return 'Computer won!';
      	} else {
          return 'User won!';
        }
  }
}

//console.log(determineWinner('scissors', 'scissors'));

const playGame = () => {
  userChoice = getUserChoice('rock');
  console.log(userChoice);
  computerChoice = getComputerChoice();
  console.log(computerChoice);
	console.log(determineWinner(userChoice, computerChoice));
}

playGame();
