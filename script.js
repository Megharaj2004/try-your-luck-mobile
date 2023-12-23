var randomNumber = generateRandomNumber();

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
    var userGuess = parseInt(document.getElementById("userGuess").value);
    var resultElement = document.getElementById("result");

    if (userGuess === randomNumber) {
        resultElement.innerText = "Congratulations! You guessed the correct number!";
        // Generate a new random number after correct guess
        randomNumber = generateRandomNumber();
    } else {
        var hint = userGuess > randomNumber ? "Too high! Try a smaller number." : "Too low! Try a larger number.";
        resultElement.innerText = "Sorry, " + hint;
    }
}

function restartGame() {
    // Reset the random number and clear the result message
    randomNumber = generateRandomNumber();
    document.getElementById("result").innerText = "";
    document.getElementById("userGuess").value = "";
}
