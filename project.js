console.log('Welcome to BlackJack, circa 1997');
////////////////////////////////////////////Game Setup

//Two globally defined variables to keep track of player points and dealer points to see who is winning or losing
var playerPoints = 0;
var dealerPoints = 0;

//Two globally defined variables to assign values to the player's cash and bet aspects of gameplay
var cash = 100;
var bet = 10;

/////////////Update the bank and bet functions and display them
function updateCash() {
$('#cash').html('You have $' + cash.toString());
$('#add-bet').html('Standard Bet: $' + bet.toString());
}

////Enable or disable buttons based on game play
function buttonDisabling(betButton, playButtons) {
  $('#bet').attr('disabled', betButton);
  $('#hit').attr('disabled', playButtons);
  $('#stay').attr('disabled', playButtons);
}

//Constructor Function that generates the objects of the cards in the game, including the image of the back of the card.
var Card = function (suit, value, royal, image) {
  this.suit = suit;
  this.value = value;
  this.royal = royal || "none";
  this.image = image;
  this.backOfCard = "card_images/cardreverse.png";
}

//Collect and contain the card objects in an array from the Constructor Function. This is the deck of cards.
var cardObjects = [];
//List of cardfaces to be used in a loop to generate card objects
var cardFace = 'A23456789TJQK';
//Array of suits to loop though for the card objects
var suit = ['spade', 'hearts', 'diamonds', 'clubs'];
//Function that sets values for each card object and pushes a card object into the cardObjects array
var makeCards = function() {
  var setSuit;
  var setRoyal;
  var setValue;
  var setImage = "card_images/cardreverse.png"; // set image to back of the card.
//For loop that iterates through the suit array
  for (var s = 0; s < suit.length; s++) {
// for each suit, iterate over the cardFace string (13 times) for a total of 52 times
  for (var f = 1; f <= cardFace.length; f++) {
//check for ace king queen or jack or none and assigning the setValue and setRoyal for the constructor function to include in gameplay
      if (f === 1) {
        setRoyal = 'ace';
        setValue = f;
      } else if (f === 11) {
        setRoyal = 'jack';
        setValue = 10;
      } else if(f === 12) {
        setRoyal = 'queen';
        setValue = 10;
      } else if(f === 13) {
        setRoyal = 'king';
        setValue = 10;
      } else {
        setValue = f;
        setRoyal = "none";
      };
      //assigns the images from the card_images folder and assigns the suit, value and sets if the card object is a royal
      setImage = "card_images/" + suit[s] + setValue + setRoyal + ".png"
      //Runs the constructor function with all of the values generated within the nested loop will run for each of the 52 card objects
      var card = new Card (suit[s], setValue, setRoyal, setImage);
      //cardObjects.push places another card from the constructor function into the array
      cardObjects.push(card);
      } //end inner loop
    } //end outer loop
    console.log(cardObjects); //looking for missing cards
}  //end of make card function

makeCards(); //invoking the function that creates the cards
shuffle (cardObjects);  //Calls the cardObjects function to shuffle the cards
buttonDisabling(false, true); //Use boolean statement to activate or disable buttons for limiting gameplay within the rules of the game
// console.log(cardObjects);
//shuffle cards with math.random
// credit to + Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
//Takes an array and shuffles the elements
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


//////////////////winning conditions function
var checkPlayerPoints = function(){
    if (playerPoints < 21) {
      //keep the player's button active using else if statements
    } else if (playerPoints > 21){
      //operate on the variable cash to reduce the player's bank by $10
      cash -= 10;
      //update the player's bank in the browser window to show reduced amount
      updateCash();
      // report back to the player the result of the game and apppend that to the page
      $('#player-result').append('You have busted and lost $10. Please refresh the page to play again.');
      buttonDisabling(false, true); ////Use boolean statement to activate or disable buttons for limiting gameplay within the rules of the game
    } else if (playerPoints == 21){
      //operate on the variable cash to increase the player's bank by $10
      cash += 10;
      updateCash();
      // report back to the player the result of the game and apppend that to the page
      $('#player-result').append('You win $10! Great Job!');
      buttonDisabling(false, true); //Use boolean statement to activate or disable puttons for limiting gameplay within the rules of the game
    }
};

var checkDealerPoints = function(){
    if (dealerPoints < 17) {
    } else if (dealerPoints > 21){
      ////operate on the variable cash to increase the player's bank by $10
      cash += 10;
      updateCash();
      // report back to the player the result of the game and apppend that to the page
      $('#player-result').append('You win $10!');
      buttonDisabling(false, true); //Use boolean statement to activate or disable puttons for limiting gameplay within the rules of the game
    } else if (dealerPoints > playerPoints){
      //operate on the variable cash to reduce the player's bank by $10
      cash -= 10;
      updateCash();
      // report back to the player the result of the game and apppend that to the page
      $('#player-result').append('You have lost $10 sorry! Please refresh the page to play again.');
      buttonDisabling(false, true); //Use boolean statement to activate or disable puttons for limiting gameplay within the rules of the game
    } else if (dealerPoints == playerPoints){
      //don't need to update the variable cash if there is a tie
      // report back to the player the result of the game and apppend that to the page
      $('#player-result').append('You have a tie, please play again!');
      buttonDisabling(false, true); //Use boolean statement to activate or disable puttons for limiting gameplay within the rules of the game
    }
};

////////////////////////////////////////////Start of Click Events

//////////Start of player hand function
//Declare an anoymous function for window onload
  $(function() {
    var sum = 0
    ///Delcare the variable dealPlayercard and assigns it to a function.
    var dealPlayerCard = function () {
      //CardObjects is popping the last element from the array. Get card is holding on to the element that was popped out of the array.
      var getCard = cardObjects.pop();
      console.log(getCard);
      //Variable that is called playerCards and refers to a div with an id of #player-cards
      var $playerCards = $('#player-cards');
      //Image tag is being created and assigned to the variable cardImage
      var cardImage = $("<img>");
      //getCard.image is accessing a string, stored within the getCard object with the key image
      cardImage.attr("src", getCard.image);
      cardImage.addClass('card');
      //cardImage is being appended each time to playerCards
      $playerCards.append(cardImage);
      //tally up the score of the cards dealt using sum
        //each of the cards has a value, and that value needs to be accessed and added together to be used by the program
      console.log(getCard.value);
      sum = sum + getCard.value
      console.log("Current sum " + sum);
      //display that score to the user
      playerPoints += getCard.value;
      console.log(playerPoints);

      checkPlayerPoints();
      }

////////////////////////////Start of dealer hand function
      ///Delcare the variable dealDealerCard and assigns it to a function.
      var dealDealerCard = function () {
        //CardObjects is popping the last element from the array. Get card is holding on to the element that was popped out of the array.
        var getCard = cardObjects.pop();
        // console.log(getCard);
        //Variable that is called dealerCards and refers to a div with an id of #dealer-cards
        var $dealerCards = $('#dealer-cards');
        //Image tag is being created and assigned to the variable cardImage
        var cardImage = $("<img>");
        //getCard.image is accessing a string, stored within the getCard object with the key image
        cardImage.attr("src", getCard.image);
        cardImage.addClass('card');
        //cardImage is being appended each time to playerCards
        $dealerCards.append(cardImage);
        //tally up the score of the cards dealt using sum
          //each of the cards has a value, and that value needs to be accessed and added together to be used by the game
        console.log(getCard.value);
        dealerPoints += getCard.value;
        console.log(dealerPoints);
        checkDealerPoints ();

        }

/////////////function that only creates the first two cards for the dealer and for the player to start gameplay after the initial bet
    var twoCardsDealt = function() {
      buttonDisabling(true, false); //Use boolean statement to activate or disable puttons for limiting gameplay within the rules of the game 
      // console.log("This is the two cards dealt function");
      for (var i = 0; i < 2; i++) {
        var getCard = cardObjects.pop();
        var $dealerCards = $('#dealer-cards');
        var cardImage = $("<img>");
        cardImage.attr("src", getCard.image);
        cardImage.addClass('card');
        $dealerCards.append(cardImage);
        console.log(getCard.value);
        dealerPoints += getCard.value;

        var getCard = cardObjects.pop();
        // console.log(getCard);
        var $playerCards = $('#player-cards');
        var cardImage = $("<img>");
        cardImage.attr("src", getCard.image);
        cardImage.addClass('card');
        $playerCards.append(cardImage);
        playerPoints += getCard.value;
        // console.log(playerPoints);
      };
      checkPlayerPoints();
    };
    $('#bet').click(twoCardsDealt);

    /////////////Hit and Stay buttons
    $('#hit').click(dealPlayerCard);
    $('#stay').click(dealDealerCard);

    updateCash();

  });  //Reminder that this is part of the window onload

////Vectorized Playing Cards 2.0 - http://sourceforge.net/projects/vector-cards/
// Copyright 2015 - Chris Aguilar - conjurenation@gmail.com
// Licensed under LGPL 3 - www.gnu.org/copyleft/lesser.html
///////////////////////////////////////////////////////////////////////////
// ///////////Make a bet and win 10 dollars if you win the game
// $('#bet').click(function() {
//   if(cash >= bet) {
//     cash += 10;
//     updateCash();
//   }
// });
// ///////////Make a bet and lose 10 dollars if you lose the game
// $('#bet').click(function() {
//   if(cash >= bet) {
//     cash -= 10;
//     updateCash();
//   }
// });
///////////////////////////////////////////////////////////////////////////
//declaration to get two cards on the board for dealer and player
// });
// dealPlayerCard ();
// dealPlayerCard ();
//
// dealDealerCard ();
// dealDealerCard ();
///////////////////////////////////////////////////////////////////////////
//use the score to tell the program if the player has gone bust
// if (sum > 21) {
//   playerIs = 'bust';
//if the program determines that they have gone bust, a message needs to be displayed to the user.
  // alert('You have gone bust');
  //define the winning function for the player here

//////////////////////////////////////////////////////

  // //Image tag is being created and assigned to the variable cardImage
  // var cardImage = $("<img>");
  // //getCard.image is accessing a string, stored within the getCard object with the key image
  // cardImage.attr("src", getCard.image);
  // cardImage.addClass('card');
  // //cardImage is being appended each time to playerCards
  // $playerCards.append(cardImage);
  // //tally up the score of the cards dealt using sum
  //   //each of the cards has a value, and that value needs to be accessed and added together to be used by the program
  // console.log(getCard.value);
  // sum = sum + getCard.value
  // //display that score to the user
  // playerPoints += getCard.value;
  // console.log(playerPoints);
  //
  // checkPlayerPoints();
// $(function() {
//   var dealCardtwo = function () {
//     var shuffleCardobjects = shuffle(cardObjects);
//     var getCard = shuffleCardobjects.pop();
//     var secondCard = $('#second-card');
//     secondCard.text(getCard.value + " " + getCard.suit + " " + getCard.royal);
//     // create an image element and set it to the variable
//     var cardImage = $("<img>")
//     cardImage.attr("src", getCard.image)
//     secondCard.append(cardImage);
//     console.log(secondCard);
//   }
//   $('#dealTwo').click( dealCardtwo)
// });
//
// $(function() {
//   var dealCardthree = function () {
//     var shuffleCardobjects = shuffle(cardObjects);
//     var getCard = shuffleCardobjects.pop();
//     var thirdCard = $('#third-card');
//     thirdCard.text(getCard.value + " " + getCard.suit + " " + getCard.royal);
//     // create an image element and set it to the variable
//     var cardImage = $("<img>")
//     cardImage.attr("src", getCard.image)
//     thirdCard.append(cardImage);
//     console.log(thirdCard);
//   }
//   $('#dealThree').click( dealCardthree)
// });
//
// $(function() {
//   var dealCardfour = function () {
//     var shuffleCardobjects = shuffle(cardObjects);
//     var getCard = shuffleCardobjects.pop();
//     var fourthCard = $('#fourth-card');
//     fourthCard.text(getCard.value + " " + getCard.suit + " " + getCard.royal);
//     // create an image element and set it to the variable
//     var cardImage = $("<img>")
//     cardImage.attr("src", getCard.image)
//     fourthCard.append(cardImage);
//     console.log(fourthCard);
//   }
//   $('#dealFour').click( dealCardfour)
// });
////////////////////////////
// Original sum function for player score
// sum = sum + getCard.value
////////////////////////////
//if the program determines that they have gone bust, a message needs to be displayed to the user.
//use the score to tell the program if the dealer has gone bust
// if (sum > 21) {
//   dealerIs = 'bust';
        // alert('The dealer has gone bust');
////////////////////////////

// var card = $('<div>').text(getCard.value + " " + getCard.suit + " " + getCard.royal);
// $playerCards.append(card);
// create an image element and set it to the variable

////////////////////////////

// firstCard.text(getCard.value + " " + getCard.suit + " " + getCard.royal);
// create an image element and set it to the variable
// var cardImage = $("<img>")
// cardImage.attr("src", getCard.image)
// firstCard.append(cardImage);
// console.log(firstCard);
////////////////////////////
// setSuit = suit[s];
/////////////////////////////////////////////
// console.log("I'm making cards", cardFace.length, suit.length);
// var cards = [];
//use a for loop to check the legnth of the suit (s for suit) and cardFace (f for cardFace)
//////////////////////////////////////////
//Work on Understanding usiing the elements within the array versus simply usiing the legnth of the array within the loop. Simiplify the  if/else statements to access the array.
// if f = 1 then value = 1 royal = ace
//////////////////////////////////////////
// cards.push(cardFace[f] + suit[s]);
// console.log(cards);
//////////////////////////////////////////
//define an image key set of objects with set value within a for loop to add images with if else statement then append this image to the table
//deck object to reset

// generate a random number to call on an index
// look into disabling click events
/////////////////
//attempting at first to simply create the cards in the console to get the game functional, then adding additional files to utilize graphics with the DOM, per Karolyn's recommendation

//every card has the same image, the Ace of Spades, need to add these later
////////////////////////////////////////////
//if s = 0 then Spades
// if (s === 0){setSuit = 'spade'}
// //if s = 1 then Hearts
// else if (s === 1){setSuit = 'hearts'}
// //if s = 2 then Diamonds
// else if (s === 2){setSuit = 'diamonds'}
// //if s = 3 then Clubs
// else {setSuit = 'clubs'}
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
