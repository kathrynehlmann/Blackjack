console.log('the constructor file is connected');

var cards = ["aceSpadelow", "aceSpadehigh", "kingSpade", "queenSpade", "jackSpade", "tenSpade", "nineSpade", "eightSpade", "sevenSpade", "sixSpade", "fiveSpade", "fourSpade", "threeSpade", "twoSpade", "aceHeartslow", "aceHeartshigh", "kingHearts", "queenHearts", "jackHearts", "tenHearts", "nineHearts"]
//why are these turning gray? Is there a limit to how many items I can place in an array manually?
console.log('cards')

//create 52 cards as objects, using a constructor function to give them a value. Use a boolean true or false statement to show them face up or face down.
//Spades
var aceSpadelow = {
  value: 1,
  image: "card_images/acespades.png",
  //want to add images to each object, need help with this
  // document.setAttribute("src", "card_images/acespades.png");
  // document.setAttribute("width", "165");
  // document.setAttribute("height", "240");
  // document.setAttribute("alt", "Ace of Spades");
  // document.body.append(x);
}

// Do five of these and test, then do the rest
console.log(aceSpadelow);
var aceSpadehigh = {
  value: 11,
  image: "card_images/acespades.png",
}

var kingSpade = {
  value: 10,
  image: "card_images/kingspades.png",
}

var queenSpade = {
  value: 10,
  image: "card_images/queenspades.png",
}

var jackSpade = {
  value: 10,
  image: "card_images/jackspades.png",
}

var tenSpade = {
  value: 10,
  image:"card_images/tenspades.png",
}

var nineSpade = {
  value: 9,
  image: "card_images/ninespades.png",
}

var eightSpade = {
  value: 8,
  image: "card_images/eightspades.png",
}

var sevenSpade = {
  value: 7,
  image: "card_images/sevenspades.png",
}

var sixSpade = {
  value: 6,
  image: "card_images/sixspades.png",
}

var fiveSpade = {
  value: 5,
  image: "card_images/fivespades.png",
}

var fourSpade = {
  value: 4,
  image: "card_images/fourspades.png",
}

var threeSpade = {
  value: 3,
  image: "card_images/threespades.png",
}

var twoSpade = {
  value: 2,
  image: "card_images/twospades.png",
}

//Hearts
var aceHeartslow = {
  value: 1,
  image: "card_images/acehearts.png",
}

var aceHeartshigh = {
  value: 11,
  image: "card_images/acehearts.png",
}

var kingHearts = {
  value: 10,
  image: "card_images/kinghearts.png",
}

var queenHearts = {
  value: 10,
  image: "card_images/queenhearts.png",
}

var jackHearts = {
  value: 10,
  image: "card_images/jackhearts.png",
}

var tenHearts = {
  value: 10,
  image: "card_images/tenhearts.png",
}

var nineHearts = {
  value: 9,
  image: "card_images/niinehearts.png",
}

var eightHearts = {
  value: 8,
  image: "card_images/eighthearts.png",
}

var sevenHearts = {
  value: 7,
  image: "card_images/sevenhearts.png",
}

var sixHearts = {
  value: 6,
  image: "card_images/sixhearts.png",
}

var fiveHearts = {
  value: 5,
  image: "card_images/fivehearts.png"
}

var fourHearts = {
  value: 4,
  image: "card_images/fourhearts.png"
}

var threeHearts = {
  value: 3,
  image: "card_images/threehearts.png",
}

var twoHearts = {
  value: 2,
  image: "card_images/twohearts.png",
}

//Diamonds
var aceDiamondslow = {
  value: 1,
  image: "card_images/acediamonds.png",
}

var aceDiamondshigh = {
  value: 11,
  image: "card_images/acediamonds.png",
}

var kingDiamonds = {
  value: 10,
  image: "card_images/kingdiamonds.png",
}

var queenDiamonds = {
  value: 10,
  image: "card_images/quenndiamonds.png",
}

var jackDiamonds = {
  value: 10,
  image: "card_images/jackdiamonds.png",
}

var tenDiamonds = {
  value: 10,
  image: "card_images/tendiamonds.png",
}

var nineDiamonds = {
  value: 9,
  image: "card_images/ninediamonds.png",
}

var eightDiamonds = {
  value: 8,
  image: "card_images/eightdiamonds.png",
}

var sevenDiamonds = {
  value: 7,
  image: "card_images/sevendiamonds.png",
}

var sixDiamonds = {
  value: 6,
  image: "card_images/sixdiamonds.png",
}

var fiveDiamonds = {
  value: 5,
  image: "card_images/fivediamonds.png",
}

var fourDiamonds = {
  value: 4,
  image: "card_images/fourdiamonds.png",
}

var threeDiamonds = {
  value: 3,
  image: "card_images/threediamonds.png",
}

var twoDiamonds = {
  value: 2,
  image: "card_images/twodiamonds.png",
}

//Clubs
var aceClubslow = {
  value: 1,
  image: "card_images/Aceclubs.png",
}

var aceClubshigh = {
  value: 11,
  image: "card_images/Aceclubs.png",
}

var kingClubs = {
  value: 10,
  image: "card_images/kingclubs.png",
}

var queenClubs = {
  value: 10,
  image: "card_images/queenclubs.png",
}

var jackClubs = {
  value: 10,
  image: "card_images/jackclubs.png",
}

var tenClubs = {
  value: 10,
  image: "card_images/tenclubs.png",
}

var nineClubs = {
  value: 9,
  image: "card_images/nineclubs.png",
}

var eightClubs = {
  value: 8,
  image: "card_images/eightclubs.png",
}

var sevenClubs = {
  value: 7,
  image: "card_images/sevenclubs.png",
}

var sixClubs = {
  value: 6,
  image: "card_images/sixclubs.png",
}

var fiveClubs = {
  value: 5,
  image: "card_images/fiveclubs.png",
}

var fourClubs = {
  value: 4,
  image: "card_images/fourclubs.png",
}

var threeClubs = {
  value: 3,
  image: "card_images/threeclubs.png",
}

var twoClubs = {
  value: 2,
  image: "card_images/Twoclubs.png",
}

//Vectorized Playing Cards 2.0 - http://sourceforge.net/projects/vector-cards/
// Copyright 2015 - Chris Aguilar - conjurenation@gmail.com
// Licensed under LGPL 3 - www.gnu.org/copyleft/lesser.html
