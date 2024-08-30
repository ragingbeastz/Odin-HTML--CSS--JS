//copilot:ignore
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

function inputValidation(playerInput){
    x = String(playerInput);
    x = x.trim().toLowerCase();

    if (x == "rock" || x == "scissors" || x == "paper"){
        return x;
    }

    else{
        return playerChoice == false;
    }
}

function runProgram() {
    
    let playerChoice = inputValidation(document.getElementById("playerChoice").value)
    let box = document.getElementById("Box");
    if (playerChoice == false){
        box.style.backgroundColor = 'red'; 
        box.style.color = 'white';
        box.innerText="Incorrect Entry"
    }

    else {
        let computerChoice = getComputerChoice();
        switch (playRound(playerChoice, computerChoice)) {
            case "Won":
                box.style.backgroundColor = 'lightgreen';
                box.style.color = 'black';
                box.innerText = playerChoice + " beats " + computerChoice + "! You win";
                break;

            case "Lost":
                box.style.backgroundColor = 'red';
                box.style.color = 'white';
                box.innerText = playerChoice + " lost to " + computerChoice + "! You lost";
                break;

            case "Drawn":
                box.style.backgroundColor = 'yellow';
                box.style.color = 'black';
                box.innerText = playerChoice + " draws against " + computerChoice + "! You drew";
                break;
        }
    }
}