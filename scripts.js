
let playerScore = 0;
let computerScore = 0;

// Buttons for user to choose between rock / paper / scissors
const choiceButtons = document.querySelectorAll("button#choice")
choiceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerChoice = button.textContent
        let computerChoice = computerPlay()

        let playerSelectionElem = document.querySelector('#player-selection')
        playerSelectionElem.textContent = `Your selection: ${playerChoice}`

        let computerSelectionElem = document.querySelector('#computer-selection')
        computerSelectionElem.textContent = `Computer selection: ${computerChoice}`

        let winner = playRound(playerChoice, computerChoice)
        let winnerElem = document.querySelector('#round-winner')
        winnerElem.textContent = `Round winner: ${winner}`

        updateScoreboard(winner)

        if (playerScore == 5) {
            declareFinalWinner('Player')
        }

        if (computerScore == 5) {
            declareFinalWinner('Computer')
        }
    })
})

// Reset game board
const resetButton = document.querySelector('button#reset')
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;

    let playerSelectionElem = document.querySelector('#player-selection')
    playerSelectionElem.textContent = `Your selection:`

    let computerSelectionElem = document.querySelector('#computer-selection')
    computerSelectionElem.textContent = `Computer selection:`

    let winnerElem = document.querySelector('#round-winner')
    winnerElem.textContent = `Round winner:`

    let playerScoreElem = document.querySelector('#player-total-wins')
    playerScoreElem.textContent = 'Nos of rounds you won:'

    let computerScoreElem = document.querySelector('#computer-total-wins')
    computerScoreElem.textContent = 'Nos of rounds computer won:'
})

// Update score tally after each round
function updateScoreboard(winner) {
    if (winner == 'Player') {
        playerScore += 1;
        let playerScoreElem = document.querySelector('#player-total-wins')
        playerScoreElem.textContent = `Nos of rounds you won: ${playerScore}`
    } else if (winner == 'Computer') {
        computerScore += 1;
        let computerScoreElem = document.querySelector('#computer-total-wins')
        computerScoreElem.textContent = `Nos of rounds computer won: ${computerScore}`
    }
}

// Raise an alert for the overall winner after 5 rounds
function declareFinalWinner(winner) {
    alert(`${winner} has won the game!`)
}

// Returns a randomised choice of rock / paper / scissors 
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']
    let index = Math.floor(Math.random() * choices.length)
    return choices[index]
}

// Complete 1 play round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        return 'It is a draw!'
    } else if ( playerSelection == 'rock' && computerSelection == 'scissors' || 
                playerSelection == 'scissors' && computerSelection == 'paper' ||
                playerSelection == 'paper' && computerSelection == 'rock' ) {
        return 'Player'
    } else {
        return 'Computer'
    }
}

