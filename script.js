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
    (player == "Paper" && computer == "Rock")) {
        score += 2;
        return `You win! ${player} beats ${computer}`;
    }
    else if (player == computer) {
        score++;
        return `Draw! You both chose ${player}`;
    }
    else 
        return `You lose! ${computer} beats ${player}`;
};

/*let game = (player, computer) => {
    for (let i = 0; i < 5; i++) {
        player = prompt("Choose Rock, Paper, or Scissors: ")
        computer = getComputerChoice();
        console.log(playRound(player, computer));
    }
    if (score > 5)
        console.log("You're the winner!");
    else if (score == 5)
        console.log("It's a tie!");
    else
        console.log("The computer is the winner!");
};*/

var score = 0;

let playerChoice;
let computerChoice;

game(playerChoice, computerChoice);