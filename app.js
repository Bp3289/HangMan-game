(function () {
    "use strict";
    var availableLetters, wordBank, guessInput, guess, guessButton, lettersGuessed, lettersMatched, outcome, molly, letters, lives, currentWord, numLettersMatched, messages;

function game() {
	availableLetters = "abcdefghijklmnopqrstuvwxyz";
	lives = 6;
	wordBank = ["baseball", "ginandtonic", "ihopeyoulose", "beer", "generalassembly"];
	messages = {
		win: 'You win (probably cheated)!',
		lose: 'You lose which seems about right',
		guessed: 'already tried this letter loser, try again...',
		validLetter: 'Please enter a letter from A-Z'
	};

	letterGuessed = lettersMatched = '';
	numLettersMatched = 0;

	currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];


	outcome = document.getElementById('outcome');
	molly = document.getElementById('molly');
	guessInput = document.getElementById('letter');

	 molly.innerHTML = 'You have ' + molly + ' lives remaining';
	 outcome.innerHTML = ' ';

	document.getElementById('letter').value = '';


	guessButton = document.getElementById('wrong');
	guessInput.style.display = 'inline';
	guessButton.style.display = 'inline';

	letters = document.getElementById('letters');
	letters.innerHTML = '<li class="current-word">Current word:</li>';

	var letter, i;
	for (i = 0; i < currentWord.length; i++) {
		letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }

	}

	function gameOver(win) {
		if (win) {
			outcome.innerHTML = messages.win;
			outcome.classList.add('win');
		} else {
			outcome.innerHTML = messages.lose;
			outcome.classList.add('error');
		}
		guessInput.style.display = guessButton.style.display = 'none';
		guessInput = '';
	}

	window.onload = game();

	document.getElementById('restart').onclick = game;

	guessInput.onclick = function () {
		this.value = '';
	};


	document.getElementById('main').onsubmit = function (e) {
		 if (e.preventDefault) e.preventDefault();
        outcome.innerHTML = '';
        outcome.classList.remove('error', 'warning');
        guess = guessInput.value;

        if (guess) {
        	if (availableLetters.indexOf(guess) > -1) {

        		if((lettersMatched && numLettersMatched.indexOf(guess) > -1) || (letterGuessed && letterGuessed.indexOf(guess) > -1)) {
        			outcome.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
                    output.classList.add("warning");
        		}

        		else if (currentWord.indexOf(guess) > -1) {
        			var lettersToAppear;
        			lettersToAppear = document.querySelectorAll(".letter" + guess.toUpperCase());
        			
        			for ( var j = 0; i < lettersToAppear.length; j++) {
        				if (currentWord.charAt(j) === guess) {
        					numLettersMatched +=1;
        				}
        			}

        			lettersMatched += guess;
        			if (numLettersMatched === currentWord.length) {
        				gameOver(true);
        			}

        			else {
        				letterGuessed += guess;
        				lives--;
        				molly.innerHTML = 'You have ' + lives + ' miserable lives remaining';
        				if (lives === 0) gameOver();
        			}
        		}

        		else {
        			outcome.classList.add('error');
        			outcome.innerHTML = messages.validLetter;
        		}
        		return false;
        	}

        }
    };

	}());



