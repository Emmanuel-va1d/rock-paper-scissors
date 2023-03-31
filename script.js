let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
        return "Rock";
    else if (choice == 1)
        return "Paper";
    else
        return "Scissors";
};

let score = 0;
let playerChoice;
let computerChoice;

window.onload = () => {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => playerChoice = "Rock");
    paper.addEventListener("click", () => playerChoice = "Paper");
    scissors.addEventListener("click", () => playerChoice = "Scissors");

    console.log(playerChoice);
}