// VARIABLES and ARRAYS
var hangmanwords = ["lefty","stagecoach","cactus", "arrow","shootout","Texas","calvalry","boots","cowboy","petroglyph"];
var selectedWord = "";
var lettersinWord ="";
var numBlanks=0;
var blanksAndSuccess= [];
var wrongLetters = [];

// COUNTERS

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Game Logic

function beginGame () {
    selectedWord = wordOptions[Math.floor(math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length("");

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccess = [];

    // Populate blanks and Success with right number of blanks

    for (var i=0; i<numBlanks; i++) {
        blanksAndSuccess.push("");
    }


    // testing debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
}


