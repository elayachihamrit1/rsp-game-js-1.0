
		// VARSs 
		let playerScore = 0;
		let computerScore = 0;
		const numberOfRounds = getNumberOfRounds();
		let playerName = prompt('Your Computer wants your name :');
		let currRound = 1;
	
		// LET'S PLAY /////////////////////////////
		play(numberOfRounds);
		//////////////////////////////////////////
		
		function play(n) {
		for (i = 1 ; i <= n ; i++) {
				round();
				++currRound;
			}
			
			alert(checkGameWinner());
		}

		alert(checkRoundWinner(playRound(playerChoice, computerChoice)));
		// CHECK GAME'S WINNER /////////////////////////////

		function checkGameWinner() {
			if ( playerScore == computerScore ) {	
				return 'There is no Winner';
			}
			else if (playerScore > computerScore) {
				return `*** VICTORY ***\n${playerName} [${playerScore}] | Computer [${computerScore}]`;
			} else {
				return `DEFEAT!\n${playerName} [${playerScore}] | Computer [${computerScore}]`;
			} 
		}

		function getNumberOfRounds() {
			let input = prompt('How many rounds do you want to play ?');
			if (input == ''  || input == null) {
				alert('Ops! Invalid input');
				getNumberOfRounds();
			 }
			return input;
		}
	
	// PLAY A SINGLE ROUND /////////////////////////////
	////////////////////////////////////////////////////

		function round() {

		let playerChoice = getPlayerChoice();
		let computerChoice = getComputerChoice();

			function playRound(playerSelection, computerSelection) {

				if (playerSelection == computerSelection) {
					return 'Tie';
				} else if ( playerSelection == 'rock' && computerSelection == 'scissors'
						||  playerSelection == 'paper' && computerSelection == 'rock'
						||  playerSelection == 'scissors' && computerSelection == 'paper'
				) { 
				  return 'Player';
				} else {
				  return 'Computer';
				}
		}
 
		// GET COMPUTER CHOICE 
		function getComputerChoice() {
			const gameOptions = ['Rock', 'Paper', 'Scissors'];
			const choice = gameOptions[Math.floor(Math.random() * gameOptions.length)];	
			return choice.toLowerCase();
		}
	

		// GET PLAYER CHOICE 
		function getPlayerChoice() {
			let choice = prompt(`Welcome to RPS Game!\nRound ${currRound}/${numberOfRounds} \n> Rock Paper Scissors!`);
			return choice.toLowerCase();
		}

		// CHECK ROUND'S WINNER 
		function checkRoundWinner(result) {
			if ( result == 'Tie' ) {
				return "It's tie";
			} else if ( result == 'Player') {
				++playerScore;
				return 'You Won this round!';
			} else {
				++computerScore;
				return 'You lost this round.';
			}
		}
			alert(checkRoundWinner(playRound(playerChoice, computerChoice)));
		
		} 	
		///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	

	



 