import { createAvailableMovesArray } from './ManageAIMoves.js';
import { handleWin } from '../gameFunctions/gameFuncts.js';
import { findWinningMove } from './Intermediate.js';
import { findBlockingMove } from './Intermediate.js';

export const miniMax = (
	gameboard,
	depth,
	maximizingPlayer,
	createAvailableMovesArray,
	handleWin,
	findWinningMove,
	findBlockingMove,
) => {
	// Check if the game is over or the depth limit has been reached
	if (
		depth === 0 ||
		gameIsOver(gameboard, createAvailableMovesArray, handleWin)
	) {
		return evaluatePosition(gameboard, findWinningMove, findBlockingMove);
	}

	if (maximizingPlayer) {
		let maxEval = -Infinity;
		let bestMove = null;

		// Loop through each cell on the game board
		for (let row = 0; row < gameboard.length; row++) {
			for (let col = 0; col < gameboard[row].length; col++) {
				if (gameboard[row][col] === null) {
					// Check if the position is empty
					// Create a copy of the game board and make a move for the maximizing player
					const child = JSON.parse(JSON.stringify(gameboard));
					child[row][col] = 'Rockets';

					// Recursive call to evaluate the child position
					const evaluation = miniMax(
						child,
						depth - 1,
						!maximizingPlayer,
						createAvailableMovesArray,
						handleWin,
						findWinningMove,
						findBlockingMove,
					);

					// Update the maximum evaluation and bestMove
					if (evaluation > maxEval) {
						maxEval = evaluation;
						bestMove = row * gameboard[row].length + col;
					}
				}
			}
		}

		return { bestMove, score: maxEval };
	} else {
		let minEval = +Infinity;
		let bestMove = null;

		// Loop through each cell on the game board
		for (let row = 0; row < gameboard.length; row++) {
			for (let col = 0; col < gameboard[row].length; col++) {
				if (gameboard[row][col] === null) {
					// Check if the position is empty
					// Create a copy of the game board and make a move for the minimizing player
					const child = JSON.parse(JSON.stringify(gameboard));
					child[row][col] = 'Aliens';

					// Recursive call to evaluate the child position
					const evaluation = miniMax(
						child,
						depth - 1,
						!maximizingPlayer,
						createAvailableMovesArray,
						handleWin,
						findWinningMove,
						findBlockingMove,
					);

					// Update the minimum evaluation and bestMove
					if (evaluation < minEval) {
						minEval = evaluation;
						bestMove = row * gameboard[row].length + col;
					}
				}
			}
		}

		return { bestMove, score: minEval };
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

const evaluatePosition = (gameboard, findWinningMove, findBlockingMove) => {
	let evaluation = 0;

	const blockingMoves = findBlockingMove(gameboard) || [];

	// Assign higher values to winning positions
	if (findWinningMove(gameboard, 'Aliens').found) {
		evaluation += 10;
	} else if (findWinningMove(gameboard, 'Rockets').found) {
		evaluation -= 10;
	}

	// Assign additional values to blocking moves
	evaluation += blockingMoves.length * 5; // +5 for each blocking move for "Aliens"
	evaluation -= blockingMoves.length * 5; // -5 for each blocking move for "Rockets"

	return evaluation;
};
console.log(findWinningMove);

console.log(
	miniMax(
		[
			['Rockets', 'Rockets', null],
			[null, 'Aliens', null],
			[null, null, 'Aliens'],
		],
		2,
		true,
		createAvailableMovesArray,
		handleWin,
		findWinningMove,
		findBlockingMove,
	),
);
