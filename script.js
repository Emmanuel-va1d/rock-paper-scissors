let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
        return "Rock";
    else if (choice == 1)
        return "Paper";
    else
        return "Scissors";
};

let playRound = (player, computer) => {
    if (player == "Rock" && computer == "Scissors" || 
    player == "Paper" && computer == "Rock" || 
    player == "Scissors" && computer == "Paper")
        score = 2;
    else if (player == computer)
        score = 1;
    else
        score = 0;
};

var score = 0;
var playerChoice;
var computerChoice;

window.addEventListener("click", () => {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => playerChoice = "Rock");
    paper.addEventListener("click", () => playerChoice = "Paper");
    scissors.addEventListener("click", () => playerChoice = "Scissors");
    

});