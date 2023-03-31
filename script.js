var getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
        return "Rock";
    else if (choice == 1)
        return "Paper";
    else
        return "Scissors";
};

window.onload = () => {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {console.log("Rock")});
    paper.addEventListener("click", () => {console.log("Paper")});
    scissors.addEventListener("click", () => {console.log("Scissors")});
};