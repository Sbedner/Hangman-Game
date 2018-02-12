// VARIABLES
var hangmanwords = ["lefty","stagecoach","cactus", "arrow","shootout","Texas","calvalry","boots","cowboy","petroglyph"];
var userguess = [];

//RANDOMIZER
var randomword = hangmanwords[Math.floor(Math.random() * hangmanwords.length)];
console.log(randomword);
document.write(randomword);

document.onkeyup=function(event){
    console.log(event.key)
if (event.key = randomword.charAt(randomword.length-1));

then (document.write(event.key));
}



