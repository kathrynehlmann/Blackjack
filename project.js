console.log('Welcome to Project One');

//attempting at first to simply create the cards in the console to get the game functional, then adding additional files to utilize graphics with the DOM, per Karolyn's recommendation

var cardFace = '23456789TJQK';
var suit = '♤♡♢♧';
var cards = [];
//use a for loop to check the legnth of the suit (s for suit) and cardFace (f for cardFace)
for (var s = 0; s < suit.length; s++) {
  for (var f = 0; f < cardFace.legnth; f++) {

  }
}

//shuffle cards with math.random
// credit to + Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

cards = shuffle(cards);
//then create a loop or nested loop to distribute cards to player and dealer

//Tania recommended a set of globally defined variables for major parts or platers of the game:
//store in variables for player and dealer
var playerHand = [];
var dealerHand = [];

var players = [playerHand, dealerHand];

//Using the .pop and .push methods can we deal the cards, two cards to each player?


//thinking an if else statement with functions in each part of the statement to compare the players hand to the dealers hand











//if else statement to check aces for values in each direction, using 11 as the indicator - "if less than 11 deal aceSpadehigh" "if more than 11 deal aceSpadelow"


  //thinking an if else statement with functions in each part to add or subtract from the players bank
