var x = "hello";
var elem = document.getElementsByClassName('container');
var extraText = '<p>This is extra text from JS</p>';

elem[0].innerHTML = elem[0].innerHTML + extraText;


var randomNumber = Math.floor( Math.random() * 6 ) + 1;
//console.log('random number is ' + randomNumber);


var userGuess = prompt('Please guess a number between 1 and 6');

var userGuess = parseInt(userGuess);

var feedHolder = document.getElementById('feedHolder');

if ( userGuess === randomNumber ) {
	feedHolder.innerHTML = "<p class='right'>Amazing you guessed right! You are a wizard!</p>";
} else {
	feedHolder.innerHTML = "<p class='wrong'>Boomer!! You did not guess this time! The right number is " + randomNumber + "</p>";
}



