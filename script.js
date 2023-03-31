var getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
        return "Rock";
    else if (choice == 1)
        return "Paper";
    else
        return "Scissors";
};

var playRound = (choice, computer) => {
    if (choice == "Rock" && computer == "Scissors" ||
    choice == "Paper" && computer == "Rock" ||
    choice == "Scissors" && computer == "Paper")
        console.log(++playerScore);
    else if (choice == computer)
        console.log("tie");
    else
        console.log(++computerScore);
}


var game = (choice) => {
    let computerChoice = getComputerChoice();

    if (playerScore < 5 && computerScore < 5) {

        console.log(computerChoice);
        console.log(choice);

        playRound(choice, computerChoice);
        
        pChoice.textContent = choice;
        cChoice.textContent = computerChoice;

    }

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

    rock.addEventListener("click", () => game("Rock"));
    paper.addEventListener("click", () => game("Paper"));
    scissors.addEventListener("click", () => game("Scissors"));

};