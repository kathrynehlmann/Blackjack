console.log('Welcome to Project One');

//attempting at first to simply create the cards in the console to get the game functional, then adding additional files to utilize graphics with the DOM, per Karolyn's recommendation

//every card has the same image, the Ace of Spades, need to add these later

var Card = function (suit, value, royal, image) {
  this.suit = suit;
  this.value = value;
  this.royal = royal || "none";
  this.image = image;
  this.backOfCard = "card_images/cardreverse.png";
}
var cardObjects = [];

var cardFace = '23456789TJQK';
var suit = '♤♡♢♧';
var cards = [];
//use a for loop to check the legnth of the suit (s for suit) and cardFace (f for cardFace)
var makeCards = function() {
  var setSuit;
  var setRoyal;
  var setValue;
  var setImage = "card_images/cardreverse.png"; // set to back of the card image

  for (var s = 0; s < suit.length; s++) {
    for (var f = 1; f <= cardFace.length; f++) {
      //if s = 0 then Spades
      if (s === 0){setSuit = 'spade'}
      //if s = 1 then Hearts
      else if (s === 1){setSuit = 'hearts'}
      //if s = 2 then Diamonds
      else if (s === 2){setSuit = 'diamonds'}
      //if s = 3 then Clubs
      else {setSuit = 'clubs'}


      // if f = 1 then value = 1 royal = ace
      if (f === 1){setRoyal = 'ace'; setValue = 1}
      //if f = 10 then value = 10 royal = jack
      else if (f === 11){setRoyal = 'jack'; setValue = 10}
      // if f = 11 then value = 10 royal = queen
      else if(f === 12){setRoyal = 'queen'; setValue = 10}
      // if f = 12 then value = 10 royal = king
      else if(f === 13){setRoyal = 'king'; setValue = 10}
      //if f is in between 2 and 10 in the index number then the royal is going to be none
      else {setValue = f; setRoyal = "none"};
      setImage = "card_images/" + setSuit + setValue + setRoyal + ".png"
      
      var card = new Card (setSuit, setValue, setRoyal, setImage);
      cardObjects.push(card);

      cards.push(cardFace[f] + suit[s]);
      // console.log(cards);
      }
    }
  // console.log("I'm making cards", cardFace.length, suit.length);
}

//define an image key set of objects with set value within a for loop to add images with if else statement then append this image to the table
//deck object to reset

// generate a random number to call on an index
// look into disabling click events



//shuffle cards with math.random
// credit to + Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
makeCards();

////////////////////////////////////////////This works!
  // var cardFace = '23456789TJQK';
  // var suit = '♤♡♢♧';
  // var cards = [];
  // //use a for loop to check the legnth of the suit (s for suit) and cardFace (f for cardFace)
  // var makeCards = function() {
  //   for (var s = 0; s < suit.length; s++) {
  //     for (var f = 0; f < cardFace.length; f++) {
  //       cards.push(cardFace[f] + suit[s]);
  //       console.log(cards);
  //       }
  //     }
  //   console.log("I'm making cards", cardFace.length, suit.length);
  // }
  // //shuffle cards with math.random
  // // credit to + Jonas Raoni Soares Silva
  // //@ http://jsfromhell.com/array/shuffle [v1.0]
  // function shuffle(o){ //v1.0
  //     for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  //     return o;
  // }
  // makeCards();
  // //Cards are shuffled
  // var displayCards = shuffle(cards);


  //Step three then create a loop or nested loop to deal cards to player and dealer

/////////////////////////////////////////////Jquery to show each card
  $(function() {
    var dealCard = function () {
      var shuffleCardobjects = shuffle(cardObjects);
      var getCard = shuffleCardobjects.pop();
      var firstCard = $('#first-card');
      firstCard.text(getCard.value + " " + getCard.suit + " " + getCard.royal);
      // create an image element and set it to the variable
      var cardImage = $("<img>")
      cardImage.attr("src", getCard.image)
      firstCard.append(cardImage);
      console.log(firstCard);
    }
    $('#deal').click( dealCard)
  });
//////call twice for each of the player or dealer

$(function() {
  var dealCardtwo = function () {
    var shuffleCardobjects = shuffle(cardObjects);
    var getCard = shuffleCardobjects.pop();
    var secondCard = $('#second-card');
    secondCard.text(getCard.value + " " + getCard.suit + " " + getCard.royal);
    // create an image element and set it to the variable
    var cardImage = $("<img>")
    cardImage.attr("src", getCard.image)
    secondCard.append(cardImage);
    console.log(secondCard);
  }
  $('#dealTwo').click( dealCardtwo)
});

$(function() {
  var dealCardthree = function () {
    var shuffleCardobjects = shuffle(cardObjects);
    var getCard = shuffleCardobjects.pop();
    var thirdCard = $('#third-card');
    thirdCard.text(getCard.value + " " + getCard.suit + " " + getCard.royal);
    // create an image element and set it to the variable
    var cardImage = $("<img>")
    cardImage.attr("src", getCard.image)
    thirdCard.append(cardImage);
    console.log(thirdCard);
  }
  $('#dealThree').click( dealCardthree)
});

$(function() {
  var dealCardfour = function () {
    var shuffleCardobjects = shuffle(cardObjects);
    var getCard = shuffleCardobjects.pop();
    var fourthCard = $('#fourth-card');
    fourthCard.text(getCard.value + " " + getCard.suit + " " + getCard.royal);
    // create an image element and set it to the variable
    var cardImage = $("<img>")
    cardImage.attr("src", getCard.image)
    fourthCard.append(cardImage);
    console.log(fourthCard);
  }
  $('#dealFour').click( dealCardfour)
});















/////////////////////////////////////////////////////////////////////////////
//Cards are shuffled
// var displayCards = shuffle(cards);
// console.log(cards);

// function displayCards

//Tania recommended a set of globally defined variables for major parts or players of the game:
//store dealt in variables for player and dealer
// var playerHand = [];
// var dealerHand = [];
//
// var players = [playerHand, dealerHand];

//Using the .pop and .push methods can we deal the cards, two cards to each player?


//thinking an if else statement with functions in each part of the statement to compare the players hand to the dealers hand



//if else statement to check aces for values in each direction, using 11 as the indicator - "if less than 11 deal aceSpadehigh" "if more than 11 deal aceSpadelow"


  //thinking an if else statement with functions in each part to add or subtract from the players bank
