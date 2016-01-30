var x = "hello";
var elem = document.getElementsByClassName('container');
var extraText = '<p>This is extra text from JS</p>';

elem[0].innerHTML = elem[0].innerHTML + extraText;


var randomNumber = Math.random();
console.log('random number is ' + randomNumber);