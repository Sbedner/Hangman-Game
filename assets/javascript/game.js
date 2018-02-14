// VARIABLES and ARRAYS
var wordOptions = ["lefty", "stagecoach", "cactus", "arrow", "shootout", "texas", "calvalry", "boots", "cowboy", "petroglyph"];
var selectedWord = "";
var lettersInWord = "";
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// COUNTERS

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Game Logic

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and Success with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Change HTML to reflect game round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    // testing debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
}

function checkLetters(letter) {
    // check if letter exist in code at all

    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] === letter) {
            isLetterInWord = true;
        }
    }
    // check where in word letter exist
    if (isLetterInWord)
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }
        }

    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    console.log(blanksAndSuccesses);

}





function roundComplete() {
    console.log("Win Count:" + winCount + "| Loss Count:" + lossCount + "| Guesses Left" + guessesLeft);
    console.log(blanksAndSuccesses);
    // update HTML to reflect most recent information
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    // check if user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;

        alert("You Won!!!!!");

        // Update win counter in HTML
        document.getElementById("winCounter").innerHTML = winCount;

    }



    // check if user lost
    else if (guessesLeft === 0) {
        lossCount++;
        alert("You lost!");
        // Update HTML

        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();

    }
}
// Main Process

// Initiates code for the first time
startGame();


//Register keyclicks

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    console.log(letterGuessed);
}



