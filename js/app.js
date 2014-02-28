// alert('Hey find me to know where to put the javascript');

var num = Math.floor((Math.random()*100)+1);


var name = prompt("What is your name?");


var guess = prompt("Guess a number between 1 and 100");



if (guess == num) {
  alert('Congratulations '+ name +', you\'re correct!');
}

else { (guess != num)
  alert('Wrong ' + name + '. You\'ve lost!');
}

// else {
//   (guess !=== num) {
//   alert('Wrong number!');
// }

