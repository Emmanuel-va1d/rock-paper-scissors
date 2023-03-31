var getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
        return "Rock";
    else if (choice == 1)
        return "Paper";
    else
        return "Scissors";
};

var game = (choice) => {
    console.log(choice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);

    if (playerScore < 5 && computerScore < 5) {
        if (choice == "Rock" && computerChoice == "Scissors" ||
        choice == "Paper" && computerChoice == "Rock" ||
        choice == "Scissors" && computerChoice == "Paper")
            console.log(++playerScore);
        else if (choice == computerChoice)
            console.log("tie");
        else
            console.log(++computerScore);
    } else 
        console.log("win");

    pScore.textContent = `You - ${playerScore}`;
    cScore.textContent = `${computerScore} - Comp`;
}

var playerScore = 0;
var computerScore = 0;

window.onload = () => {
    const reset = document.querySelector("#reset");
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const player = document.querySelector("#pScore");

    rock.addEventListener("click", () => game("Rock"));
    paper.addEventListener("click", () => game("Paper"));
    scissors.addEventListener("click", () => game("Scissors"));

};