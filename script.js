function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return humanChoice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie try again");
    } else if (humanChoice === "rock" && computerChoice === "scissors" || 
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock"){
        humanScore+=1;
        console.log("You win " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore+=1;
        console.log("You lose " + computerChoice + " beats " + humanChoice); 
    }
}

function playGame() {    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
        })
    });

    const content = document.createElement("div");
    
    console.log("Final Scores: ")
    console.log("My score: " + humanScore);
    console.log("Computer score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You won!");
    } else if (humanScore < computerScore) {
        console.log("You lost!")
    } else {
        console.log("You tied")
    }
}
playGame();