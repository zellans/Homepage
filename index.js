let name = prompt('Hello! What is your name?');

while ( name == '' || name == null) {
   name = prompt ('Hello! What is your name?');
}

alert(name +', let play a game, i guessed a number from 1 to 10. Try to guess it in the fewest number of attempts. After each attempt I will say "a little", "a lot" or "I guessed".');

let number = random(10);
let guess = prompt('What number did I guess?');
let numberOfGuesses = 0;

while (guess != number) {
    if (guess > number) {
        guess = prompt('Many. try again.');
        numberOfGuesses = numberOfGuesses + 1;
    }

    if (guess < number) {
        guess = prompt('Small. One more try!');
        numberOfGuesses = numberOfGuesses +1;

    }
}

alert('You guessed it! This is a number ' + number + '. You needed it ' + numberOfGuesses +' attempts');
