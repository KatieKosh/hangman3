//scoreboard

var wins;
var loses;
//lettersguessed
var correctLetter; //(array)
//word to be guessed
var word;
var incorrectLetter;
var letterGuessed;


function startGame() {
    wins = 0;
    losses = 0;
    word = "music";
    correctLetter = [];
    incorrectLetter = [];
    letterGuessed = 0;
    var ulelement = $("<ul>");
    ulelement.addClass("word"); //<ul class="word"></ul>
    for (var i = 0; i < word.length; i++) {
        var lielement = $("<li>_______</li>")
        lielement.addClass(word[i]); //<li class="m">_______</li>
        ulelement.append(lielement);
        console.log("ul:", ulelement.html());
    }
    $('body').append(ulelement);
}

startGame();

$(document).on("keypress", function(e) {
    console.log(e.key);

    if (letterGuessed === 6) {

        console.log("You lost!");
        return;
    }


    if (word.indexOf(e.key) < 0) {

        letterGuessed++
        incorrectLetter.push(e.key);
        console.log("Incorrect Letter!", incorrectLetter);

    } else {
        //correct
        var element = $("." + e.key); //$(".m")
        element.html(e.key);
        correctLetter.push(e.key);
        console.log("Correct Letter!", correctLetter);

    }







    console.log("Guessed Letter", letterGuessed);


});
