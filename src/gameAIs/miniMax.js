import { createAvailableMovesArray } from './ManageAIMoves.js';
import { handleWin } from '../gameFunctions/gameFuncts.js';

// This function in short finds all the possible moves, get the score for those.
// then we need to call the minimax function
// which will find the best move.

export function bestMove(gameboard, createAvailableMovesArray, handleWin) {
	// Object to track best score and associated move
	let best = {
		score: -Infinity,
		move: null,
	};

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			// Check if spot is available
			if (gameboard[i][j] === null) {
				// Make move
				gameboard[i][j] = 'Alien';

				// Get score for move
				let score = miniMax(
					gameboard,
					9,
					true,
					createAvailableMovesArray,
					handleWin,
					4,
				);

				// Undo move
				gameboard[i][j] = null;

				// Update best if score is higher
				if (score > best.score) {
					best.score = score;

					best.move = [i, j];
				}
			}
		}
	}

	// Return move that resulted in highest score
	return best.move;
}

const scores = {
	Rocket: -1,
	Alien: 1,
	Draw: 0,
};

const miniMax = (
	gameboard,
	depth,
	maximizingPlayer,
	createAvailableMovesArray,
	handleWin,
	maxDepth = 9,
) => {
	if (depth > maxDepth) {
		return 0; // default score if max depth reached
	}

	const availableMoves = createAvailableMovesArray(gameboard);
	const result = gameIsOver(gameboard, availableMoves, handleWin);
	if (result !== null) {
		return scores[result];
	}

	if (maximizingPlayer) {
		// Even depths maximize
		let bestScore = -Infinity;

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (gameboard[i][j] === null) {
					gameboard[i][j] = 'Alien';
					console.log(i, j);

					let score = miniMax(
						gameboard,
						depth + 1,
						false,
						createAvailableMovesArray,
						handleWin,
					);

					if (depth === 0) {
						return 1;
					}
					if (score !== null) {
						bestScore = maximizingPlayer
							? Math.max(score, bestScore)
							: Math.min(score, bestScore);
					}

					gameboard[i][j] = null;

					bestScore = Math.max(score, bestScore);
				}
			}
		}

		return bestScore;
	} else {
		// Odd depths minimize

		let bestScore = Infinity;

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (gameboard[i][j] === null) {
					gameboard[i][j] = 'Rocket';

					let score = miniMax(
						gameboard,
						depth + 1,
						true,
						createAvailableMovesArray,
						handleWin,
					);
					if (score !== null) {
						bestScore = maximizingPlayer
							? Math.max(score, bestScore)
							: Math.min(score, bestScore);
					}

					gameboard[i][j] = null;

					bestScore = Math.min(score, bestScore);
				}
			}
		}
		console.log(bestScore);
		return bestScore;
	}
};

// Base Case
const gameIsOver = (gameboard, moves, handleWin) => {
	const result = handleWin(gameboard);
	let score = 0;

	// First check if someone won
	if (result.winner === 'Alien') {
		score = 1;
	}

	if (result.winner === 'Rocket') {
		score = -1;
	}

	// Now check for draw
	if (moves.length === 0 && result.winner === 'Draw') {
		score = 0; // draw
	} else {
		score = null;
	}
	// Game is still in progress
	return score;
};

const gameboard5 = [
	['Rocket', 'Rocket', 'Alien'],
	['Alien', null, 'Rocket'],
	['Rocket', null, 'Alien'],
];

const test = miniMax(
	gameboard5,
	1,
	true,
	createAvailableMovesArray,
	handleWin,
	9,
);

console.log(test);
