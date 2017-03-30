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

	}

