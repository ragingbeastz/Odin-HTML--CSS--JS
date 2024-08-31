//copilot:ignore
let playerScore = 0;
let compScore = 0;
let roundsLeft = 5;
let buttonsEnabled = true;

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getComputerChoice() {
    let x;
    x = getRandomInt(1, 4);

    let computerChoice;

    switch (x) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;
}


function playRound(playerSelection, computerSelection) {

    let outcome;
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    outcome = "Drawn";
                    break;

                case "paper":
                    outcome = "Lost";
                    break;

                case "scissors":
                    outcome = "Won";
                    break;
            }
            break;

        case "paper":
            switch (computerSelection) {
                case "rock":
                    outcome = "Won";
                    break;

                case "paper":
                    outcome = "Drawn";
                    break;

                case "scissors":
                    outcome = "Lost";
                    break;
            }
            break;

        case "scissors":
            switch (computerSelection) {
                case "rock":
                    outcome = "Lost";
                    break;

                case "paper":
                    outcome = "Won";
                    break;

                case "scissors":
                    outcome = "Drawn";
                    break;
            }
            break;
    }

    return outcome;

}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    roundsLeft = 5;

    document.getElementById("rock").classList.remove("red-hover");
    document.getElementById("paper").classList.remove("red-hover");
    document.getElementById("scissors").classList.remove("red-hover");


    document.getElementById("rock").classList.add("green-hover");
    document.getElementById("paper").classList.add("green-hover");
    document.getElementById("scissors").classList.add("green-hover");

    document.getElementById("flexEndContainer").style.display = "none";

    let box = document.getElementById("Box");
    box.style.backgroundColor = 'grey';
    box.style.color = 'black';
    box.innerText = "";

    buttonsEnabled = true;
}

function runProgram(playerChoiceInput) {

    if (buttonsEnabled == false) {
        return;
    }

    let playerChoice;
    let box = document.getElementById("Box");

    switch (playerChoiceInput) {
        case 1:
            playerChoice = "rock";
            break;

        case 2:
            playerChoice = "paper";
            break;

        case 3:
            playerChoice = "scissors";
            break;
    }

    roundsLeft--;

    let computerChoice = getComputerChoice();
    switch (playRound(playerChoice, computerChoice)) {
        case "Won":
            box.style.backgroundColor = 'lightgreen';
            box.style.color = 'black';
            box.innerText = playerChoice + " beats " + computerChoice + "! You win";
            playerScore++;
            break;

        case "Lost":
            box.style.backgroundColor = 'red';
            box.style.color = 'white';
            box.innerText = playerChoice + " lost to " + computerChoice + "! You lost";
            compScore++;
            break;

        case "Drawn":
            box.style.backgroundColor = 'yellow';
            box.style.color = 'black';
            box.innerText = playerChoice + " draws against " + computerChoice + "! You drew";
            roundsLeft++;
            break;
    }


    document.getElementById("playerScore").innerText = "Player Score: " + playerScore;
    document.getElementById("compScore").innerText = "Computer Score: " + compScore;
    document.getElementById("roundsLeft").innerText = "Rounds Left: " + roundsLeft;

    if (roundsLeft == 0 || playerScore == 3  || compScore == 3) {
        buttonsEnabled = false;
        document.getElementById("playerScore").innerText = "";
        document.getElementById("compScore").innerText = "";
        document.getElementById("roundsLeft").innerText = "";


        document.getElementById("rock").classList.remove("green-hover");
        document.getElementById("paper").classList.remove("green-hover");
        document.getElementById("scissors").classList.remove("green-hover");


        document.getElementById("rock").classList.add("red-hover");
        document.getElementById("paper").classList.add("red-hover");
        document.getElementById("scissors").classList.add("red-hover");



        document.getElementById("flexEndContainer").style.display = "flex";

        if (playerScore > compScore) {
            document.getElementById("finalBox").style.backgroundColor = "lightgreen";
            document.getElementById("finalBox").style.color = "black";
            document.getElementById("finalboxText").innerText = "You Win!"
        }

        else {
            document.getElementById("finalBox").style.backgroundColor = "red";
            document.getElementById("finalBox").style.color = "white";
            document.getElementById("finalboxText").innerText = "You Lost!"
        }

        document.getElementById("finalboxText2").innerText = "Player Score: " + playerScore + " || Computer Score: " + compScore + " || Rounds Left: " + roundsLeft;


    }
}


