
		// VARSs 
		let player1Score = 0;
		let player2Score = 0;
		const numberOfRounds = getNumberOfRounds();
		let player1Name = prompt('Player 1 Name : ');
		let player2Name = prompt('Player 2 Name : ');
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

		alert(checkRoundWinner(playRound(player1Choice, player2Choice)));
		// CHECK GAME'S WINNER /////////////////////////////

		function checkGameWinner() {
			if ( player1Score == player2Score ) {
				
				return 'There is no Winner';
			}
			else if (player1Score > player2Score) {
			
				return `*** THE WINNER IS  ${player1Name} ***\n${player1Name} [${player1Score}] | ${player2Name} [${player2Score}]`;
			} else {
				return `*** THE WINNER IS  ${player2Name} ***\n${player1Name} [${player1Score}] | ${player2Name} [${player2Score}]`;
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
	
		let player1Choice = getPlayer1Choice();
		let player2Choice = getPlayer2Choice();

			function playRound(player1Selection, player2Selection) {
				if (player1Selection == player2Selection) {
					return 'Tie';
				} else if ( player1Selection == 'rock' && player2Selection == 'scissors'
						||  player1Selection == 'paper' && player2Selection == 'rock'
						||  player1Selection == 'scissors' && player2Selection == 'paper'
				) { 
				  return 'Player1';
				} else {
				  return 'Player2';
				}
		}
 
		// GET PLAYER 1 CHOICE 
		function getPlayer1Choice() {
			let choice = prompt(`Welcome to RPS Game!\nRound ${currRound}/${numberOfRounds} \n\n #${player1Name} > Rock Paper Scissors!`);
			return choice.toLowerCase();
		}

		// GET PLAYER 2 CHOICE 
		function getPlayer2Choice() {
			let choice = prompt(`Welcome to RPS Game!\nRound ${currRound}/${numberOfRounds} \n\n #${player2Name} > Rock Paper Scissors!`);
			return choice.toLowerCase();
		}

		// CHECK ROUND'S WINNER 
		function checkRoundWinner(result) {
			if ( result == 'Tie' ) {
				return "It's tie";
			} else if ( result == 'Player1') {
				++player1Score;
				return `${player1Name} Won this round!`;
			} else {
				++player2Score;
				return `${player2Name} Won this round!`;
			}
		}
			alert(checkRoundWinner(playRound(player1Choice, player2Choice)));
		} 	
		///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	

	



