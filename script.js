const buttons = document.querySelectorAll('input');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = '';
    if (playerSelection === computerSelection) {
        result = ('It\'s a tie! You both chose ' + playerSelection)
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
                (playerSelection == 'Paper' && computerSelection == 'Rock') || 
                (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
                    playerScore++;
                    result = ('You win! ' + playerSelection + ' beats ' + computerSelection)
                    
                    if (playerScore == 5) {
                        result += "<br><br> You won the game! Click restart button to play again.";
                    }
                } else {
                    computerScore++;
                    result = ('You lose! ' + computerSelection + ' beats ' + playerSelection)

                    if (computerScore == 5) {
                        result += "<br><br> You lost the game! Click the restart button to play again."
                    }
                }
    document.getElementById('gameResult').innerHTML = result;
    document.getElementById('computerChoice').innerHTML = computerSelection;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;

    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})