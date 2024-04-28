document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    const userChoice = document.getElementById('userChoice').value.trim().toLowerCase();
    
   
    if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
      alert('Please enter a valid choice: Rock, Paper, or Scissors');
      return;
    }
    
    
    const computerChoices = ['rock', 'paper', 'scissors'];
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
   
    let result;
    if (userChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }
    
    document.getElementById('result').innerHTML = `
      <p>Your choice: ${userChoice}</p>
      <p>Computer's choice: ${computerChoice}</p>
      <p>${result}</p>
    `;
  });