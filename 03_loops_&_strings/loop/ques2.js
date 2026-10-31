//  Q- create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.



let gameNumber =25;
let userNumber =prompt("Guess the game number :");

while(userNumber != gameNumber ){
    userNumber = prompt("You entered the wrong number, Guess again: ");
}
console.log("congratulations , you entered the right number");