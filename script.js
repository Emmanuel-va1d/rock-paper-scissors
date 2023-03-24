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
    return player;
};
player = "ROCK";
console.log(playRound(player));