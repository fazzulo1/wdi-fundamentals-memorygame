/*console.log("Up and running!");
var cardOne = "queen" ;
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
*/
var cards = [
	{rank: "queen",
	 suit: "hearts",	
	 cardImage: "images/queen-of-hearts.png" 
	},
	{rank: "queen",
	 suit: "diamonds",	
	 cardImage: "images/queen-of-diamonds.png" 
	},
	{rank: "king",
	 suit: "hearts",	
	 cardImage: "images/king-of-hearts.png" 
	},
	{rank: "king",
	 suit: "diamonds",	
	 cardImage: "images/king-of-diamonds.png" 
	}
];
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay.length === 2){
	//console.log(" 2cards");
		if(cardsInPlay[0] === cardsInPlay[1]){
			console.log(alert("You found a match!"));
		}else{
			console.log(alert("Sorry, try again"));
		}
	}
}

function flipCard(cardId){
/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped King");*/	
console.log("User flipped" + " " + cards[cardId].rank)
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
checkForMatch();
}

flipCard(0);
flipCard(2);




