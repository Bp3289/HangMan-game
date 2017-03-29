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
}

