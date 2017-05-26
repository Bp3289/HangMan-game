(function () {
    "use strict";
    var availableLetters, wordBank, guessInput, guess, guessButton, lettersGuessed, lettersMatched, outcome, molly, letters, lives, currentWord, numLettersMatched, messages;

    function game() {
        /* start game options */
        availableLetters = "abcdefghijklmnopqrstuvwxyz";
        lives = 6;
        wordBank = ["baseball", "ginandtonic", "ihopeyoulose", "beer", "generalassembly"];
        messages = {
            win: 'You win (probably cheated)!',
            lose: 'You lose which seems about right',
            guessed: '.....already tried this letter loser, try again...',
            validLetter: 'Please enter a letter from A-Z'
        };
        /* end game options */

        lettersGuessed = lettersMatched = '';
        numLettersMatched = 0;

        /* choose a word */
        currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

        /* make #molly and #outcome blank, create vars for later access */
        outcome = document.getElementById("outcome");
        molly = document.getElementById("molly");
        guessInput = document.getElementById("letter");

        molly.innerHTML = 'You have ' + lives + ' miserable lives remaining';
        outcome.innerHTML = '';

        document.getElementById("letter").value = '';

        /* make sure guess button is enabled */
        guessButton = document.getElementById("wrong");
        guessInput.style.display = 'inline';
        guessButton.style.display = 'inline';

        /* set up display of letters in current word */
        letters = document.getElementById("letters");
        letters.innerHTML = '<class="current-word">Current word:</li>';

        var letter, i;
        for (i = 0; i < currentWord.length; i++) {
            letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }
    }

    /*Determines when a user wins*/
    function gameOver(win) {
        if (win) {
            outcome.innerHTML = messages.win;
            outcome.classList.add('win');
        } else {
            outcome.innerHTML = messages.lose;
            outcome.classList.add('error');
        }

        guessInput.style.display = guessButton.style.display = 'none';
        guessInput.value = '';
    }

    /* Start game on window.onload */
    window.onload = game();

    /* buttons */
    document.getElementById("restart").onclick = game;

    /* reset letter to guess on click */
    guessInput.onclick = function () {
        this.value = '';
    };

    /* main guess function */
    document.getElementById('main').onsubmit = function (e) {
        if (e.preventDefault) e.preventDefault();
        outcome.innerHTML = '';
        outcome.classList.remove('error', 'warning');
        guess = guessInput.value;

        /* does guess have a value? if yes continue, if no, error */
        if (guess) {
            /* is guess a valid letter? if so go on else error */
            if (availableLetters.indexOf(guess) > -1) {
                /* has it been guessed (missed or matched) already? if so, abandon & add notice */
                if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
                    outcome.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
                    outcome.classList.add("warning");
                }
                /* does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message */
                else if (currentWord.indexOf(guess) > -1) {
                    var lettersToShow;
                    lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

                    for (var i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                    }

                    /* check to see if letter appears multiple times */
                    for (var j = 0; j < currentWord.length; j++) {
                        if (currentWord.charAt(j) === guess) {
                            numLettersMatched += 1;
                        }
                    }

                    lettersMatched += guess;
                    if (numLettersMatched === currentWord.length) {
                        gameOver(true);
                    }
                }
                /* guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, reduce lives & update user */
                else {
                    lettersGuessed += guess;
                    lives--;
                    molly.innerHTML = 'You have ' + lives + ' miserable lives remaining';
                    if (lives === 0) gameOver();
                }
            }
            /* not a valid letter, error */
            else {
                outcome.classList.add('error');
                outcome.innerHTML = messages.validLetter;
            }
        }
        /* no letter entered, error */
        else {
            outcome.classList.add('error');
            outcome.innerHTML = messages.validLetter;
        }
        return false;
    };
}());