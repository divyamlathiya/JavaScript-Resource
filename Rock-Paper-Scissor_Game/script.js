let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreInc = document.querySelector("#user-score");
const computerScoreInc = document.querySelector("#computer-score");

const generateComputerChoice = () => {
    // Rock, Paper, Scissor
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        userScore++;
        userScoreInc.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else {
        msg.innerText = `You Lose! ${computerChoice} beats yours ${userChoice}`;
        computerScore++;
        computerScoreInc.innerText = computerScore;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // Generate computer choice
    const computerChoice = generateComputerChoice();
    console.log(computerChoice);

    if (userChoice === computerChoice) {
        // Draw game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // Scissor, Paper
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //  Rock, Scissor
            userWin = computerChoice === "scissor" ? false : true;
        }
        else {
            // Rock, Paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
