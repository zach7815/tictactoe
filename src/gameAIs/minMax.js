// This function in short finds all the possible moves, get the score for those.
// then we need to call the minimax function
// which will find the best move.
function bestMove(gameboard) {
	let ai;
	let move;
	let bestScore = -Infinity;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			// Is spot available?
			if (gameboard[i][j] === null) {
				gameboard[i][j] = ai;
				let score = miniMax(gameboard, 0, true);
				gameboard[i][j] = null;
				if (score > bestScore) {
					bestScore = score;
					move = [i, j];
				}
			}
		}
	}
	return move;
}

const scores = {
	Rocket: 0,
	Alien: 1,
	Draw: 0,
};

const miniMax = (gameboard, depth, isMaximising, availableMoves, handleWin) => {
	let result = gameIsOver(gameboard, availableMoves, handleWin);

	if (result !== null) {
		let score = scores[result];
		return score;
	}
	if (isMaximising) {
	}
};

const gameIsOver = (gameboard, createAvailableMovesArray, handleWin) => {
	const availablePositions = createAvailableMovesArray(gameboard);

	if (availablePositions.length === 0) {
		return true;
	}

	const { winner } = handleWin(gameboard);

	if (winner && winner !== 'Draw') {
		return true;
	}

	return false;
};
