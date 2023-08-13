export const placeComputerMove = (gameboard, coordinates) => {
	const newGameBoard = gameboard.map((row) => [...row]);
	newGameBoard[coordinates[0]][coordinates[1]] = 'Alien';
	return newGameBoard;
};

const manageGameMode = (gameBoard, gameMode) => {
	switch (gameMode) {
		case '2 player mode':
			break;

		case 'Easy':
			break;

		case 'Intermediate':
			break;

		case 'Impossible':
			break;

		default:
	}
};

export const createAvailableMovesArray = (gameboard) => {
	const availableMoves = [];

	for (let i = 0; i < gameboard.length; i++) {
		const row = gameboard[i];
		for (let j = 0; j < row.length; j++) {
			if (row[j] === null) {
				const index = i * row.length + j;
				availableMoves.push(index);
			}
		}
	}

	return availableMoves;
};

export const coordinatesMap = new Map([
	[0, [0, 0]],
	[1, [0, 1]],
	[2, [0, 2]],
	[3, [1, 0]],
	[4, [1, 1]],
	[5, [1, 2]],
	[6, [2, 0]],
	[7, [2, 1]],
	[8, [2, 2]],
]);
