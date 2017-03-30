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
	man = document.getElementById('man');
	guessInput = document.getElementById('letter');

	man.innerHTML = 'You have ' + lives + ' miserable lives remaining';
	outcome.innerHTML = '';

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

