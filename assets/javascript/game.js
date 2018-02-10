// HANGMAN WORDS
var hangmanwords = ["lefty","stagecoach","cactus", "arrowhead","shootout","Texas","calvalry","boots","cowboy","petroglyph"];
//RANDOMIZER
var randomword = hangmanwords[Math.floor(Math.random() * hangmanwords.length)];
document.write(randomword);
document.write(randomword.charAt(randomword.length-1));

document.write(randomword.charAt(randomword.length-2));

document.write(randomword.charAt(randomword.length-3));


document.write(randomword.charAt(randomword.length-4));
