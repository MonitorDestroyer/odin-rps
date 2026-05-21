const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resetBtn = document.querySelector("#reset");

const playerScoreCard = document.querySelector("#playerScore");
const pcScoreCard = document.querySelector("#pcScore");

const pcChoiceCard = document.querySelector("#pcChoice");

const resultText = document.querySelector("#result");

let playerScore = 0;
let pcScore = 0;

function resetGame() {
    playerScore = 0;
    pcScore = 0;
    playerScoreCard.textContent = "0";
    pcScoreCard.textContent = "0";
    pcChoiceCard.textContent = "";
    resultText.textContent = "";

    rockBtn.classList.remove("underlined");
    paperBtn.classList.remove("underlined");
    scissorsBtn.classList.remove("underlined");
}

function getComputerChoice() {
    const pcChoiceNum = Math.floor(Math.random() * 3);
    if(pcChoiceNum == 0) {
        return "rock";
    } else if(pcChoiceNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    pcChoiceCard.textContent = computerChoice;

    if(humanChoice == computerChoice) {
        resultText.textContent = "Tie";
    } else if(humanChoice == "rock") {
        if(computerChoice == "paper") {
            resultText.textContent = "You lose!";
            pcScore++;
        } else if(computerChoice == "scissors") {
            resultText.textContent = "You win!";
            playerScore++;
        }
    } else if(humanChoice == "paper") {
        if(computerChoice == "rock") {
            resultText.textContent = "You win!";
            playerScore++;
        } else if(computerChoice == "scissors") {
            resultText.textContent = "You lose!";
            pcScore++;
        }
    } else if(humanChoice == "scissors") {
        if(computerChoice == "rock") {
            resultText.textContent = "You lose!";
            pcScore++;
        } else if(computerChoice == "paper") {
            resultText.textContent = "You win!";
            playerScore++;
        }
    }
    
    playerScoreCard.textContent = playerScore;
    pcScoreCard.textContent = pcScore;
}

const handleChoice = e => {
    const playerChoice = e.target.id;
    const pcChoice = getComputerChoice();

    playRound(playerChoice, pcChoice);

    rockBtn.classList.remove("underlined");
    paperBtn.classList.remove("underlined");
    scissorsBtn.classList.remove("underlined");

    e.target.classList.add("underlined");
};

rockBtn.addEventListener("click", handleChoice);
paperBtn.addEventListener("click", handleChoice);
scissorsBtn.addEventListener("click", handleChoice);

resetBtn.addEventListener("click", resetGame);