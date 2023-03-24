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
    player = player.toLowerCase();
    player = player.replace(player.charAt(0), player.charAt(0).toUpperCase());
    // win condition
    if ((player == "Rock" && computer == "Scissors") || 
    (player == "Scissors" && computer == "Paper") ||
    (player == "Paper" && computer == "Rock"))
        return `You won! ${player} beats ${computer}`;
};

let playerChoice = "Rock";
let computerChoice = getComputerChoice();

console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));