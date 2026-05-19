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

function getHumanChoice() {
    return prompt("Pick rock, paper or scissors:");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const humanChoiceNormed = humanChoice.toLowerCase();
        console.log("You picked: " + humanChoiceNormed);
        console.log("Computer picked: " + computerChoice);
        if(humanChoiceNormed == computerChoice) {
            console.log("Tie");
        } else if(humanChoiceNormed == "rock") {
            if(computerChoice == "paper") {
                console.log("You lose!");
                computerScore++;
            } else if(computerChoice == "scissors") {
                console.log("You win!");
                humanScore++;
            }
        } else if(humanChoiceNormed == "paper") {
            if(computerChoice == "rock") {
                console.log("You win!");
                humanScore++;
            } else if(computerChoice == "scissors") {
                console.log("You lose!");
                computerScore++;
            }
        } else if(humanChoiceNormed == "scissors") {
            if(computerChoice == "rock") {
                console.log("You lose!");
                computerScore++;
            } else if(computerChoice == "paper") {
                console.log("You win!");
                humanScore++;
            }
        }
        console.log("Current score: You - " + humanScore + " | PC - " + computerScore);
    }

    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore) {
        console.log("Congrats you win!");
    } else if(humanScore < computerScore) {
        console.log("The machines are taking over, you lose!");
    } else {
        console.log("How boring, a tie.");
    }
}

playGame();