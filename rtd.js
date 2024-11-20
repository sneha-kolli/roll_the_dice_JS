// Default player names
var player1 = "Player 1";
var player2 = "Player 2";

function edit_names() {
    // Prompt user to change names, with current names as defaults
    let newPlayer1 = prompt("Change Player1 name:", player1);
    while (!newPlayer1 || newPlayer1.trim() === "") {
        alert("Player1 name cannot be empty. Please enter a valid name.");
        newPlayer1 = prompt("Change Player1 name:", player1);
    }
    player1 = newPlayer1; // Update global variable
    document.getElementById("player1").textContent = player1;

    let newPlayer2 = prompt("Change Player2 name:", player2);
    while (!newPlayer2 || newPlayer2.trim() === "") {
        alert("Player2 name cannot be empty. Please enter a valid name.");
        newPlayer2 = prompt("Change Player2 name:", player2);
    }
    player2 = newPlayer2; // Update global variable
    document.getElementById("player2").textContent = player2;
}

// Function to roll the dice
function rollthedice() {
    setTimeout(function() {
        var randomnum1 = Math.floor(Math.random() * 6) + 1;
        var randomnum2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src", "dice" + randomnum1 + ".png");
        document.querySelector(".img2").setAttribute("src", "dice" + randomnum2 + ".png");

        if (randomnum1 === randomnum2) {
            document.getElementById("result").textContent = "Draw !!";
        } else if (randomnum1 > randomnum2) {
            document.getElementById("result").textContent = player1 + " Wins!!";
        } else {
            document.getElementById("result").textContent = player2 + " Wins!!";
        }
    }, 2500);
}

// Reset the game
function reset() {
    // Reset the dice
    document.querySelector(".img1").setAttribute("src", "dice6.png");
    document.querySelector(".img2").setAttribute("src", "dice6.png");

    // Make the result not visible
    document.getElementById("result").textContent = ' ';

    // Reset player names to default values
    player1 = "Player 1";
    player2 = "Player 2";
    document.getElementById("player1").textContent = player1;
    document.getElementById("player2").textContent = player2;
}
