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
	lives = document.getElementById('lives');
	guessInput = document.getElementById('letter');

	 lives.innerHTML = 'You have ' + lives + ' lives remaining';
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

