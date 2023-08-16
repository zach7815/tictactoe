import { createAvailableMovesArray, coordinatesMap } from './ManageAIMoves.js';
import { generateRandomNumber } from './Easy.js';

export function makeIntermediateAIMove(
	gameBoard,
	createAvailableMovesArray,
	generateRandomNumber,
	coordinatesMap,
) {
	// Check if any corner positions are available
	const corners = [
		[0, 0],
		[0, 2],
		[2, 0],
		[2, 2],
	];

	const availableCorners = corners.filter(
		(corner) => gameBoard[corner[0]][corner[1]] === null,
	);
	console.log(availableCorners);

	if (availableCorners.length > 0) {
		const randomCorner =
			availableCorners[Math.floor(Math.random() * availableCorners.length)];
		return randomCorner;
	}

	// Check if the center position is available
	if (gameBoard[1][1] === null) {
		return [1, 1];
	}

	// Select any remaining available position
	const availablePositions = createAvailableMovesArray(gameBoard);
	const randomIndex = generateRandomNumber(0, availablePositions.length - 1);

	const randomAvailablePosition = availablePositions[randomIndex];
	const position = coordinatesMap.get(randomAvailablePosition);

	return position || 'no moves available';
}

const gameBoard = [
	['Alien', 'Alien', 'Rocket'],
	[null, 'Rocket', 'Rocket'],
	['Alien', 'Rocket', 'Alien'],
];

const testCase1 = makeIntermediateAIMove(
	gameBoard,
	createAvailableMovesArray,
	generateRandomNumber,
	coordinatesMap,
);

console.log(testCase1);
