'use strict';

// Defining the secret number between (1 to 20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Defining score
let score = 20;
let highscore = 0;

// Display message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Select the button and call add event listener
document.querySelector('.check').addEventListener('click', function () {
  // Here we use Number to convert the string value into the number. Because what ever user type, it will come as string.
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input (If guess (input element value) is fales which means this condition becomes true. Because we use !(true if guess is false))
  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 No Number!';
    displayMessage('🛑 No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Implementing the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low!');

      // Decrease the score if it's a wrong answer
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Coding Challenge #1 (Activating the again button)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
