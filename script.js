function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.querySelector('.result');
    const scoreDiv = document.querySelector('.score');
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = "Tie try again";
    } else if (humanChoice === "rock" && computerChoice === "scissors" || 
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        resultText = ("You win " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
       resultText = ("You lose " + computerChoice + " beats " + humanChoice); 
    }

    resultDiv.textContent = resultText;
    scoreDiv.textContent = "Score: You - " + humanScore + ", Computer - " + computerScore;
    
    if (humanScore === 5 || computerScore === 5) {
        pickWinner();
    }
}

function pickWinner() {    
    const resultDiv = document.querySelector('.result');
    
    if (humanScore > computerScore) {
        resultDiv.textContent = ("Congratulation! You won!");
    } else if (humanScore < computerScore) {
        resultDiv.textContent = ("Sorry, you lost!")
    } else {
        resultDiv.textContent = ("You tied")
    }
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.className.toLowerCase());
    })
})