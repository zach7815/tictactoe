const checkHorizontal = (gameboard, result = '') => {
	for (let row of gameboard) {
		if (row.every((cell) => cell === '🛸')) {
			result = 'Alien';
			break;
		}
		if (row.every((cell) => cell === '🚀')) {
			result = 'Rocket';
			break;
		} else {
			result = 'Draw';
		}
	}

	return result;
};
const checkVertical = (gameboard, result = '') => {
	const numRows = gameboard.length;
	const numCols = gameboard[0].length;

	for (let col = 0; col < numCols; col++) {
		let cell = null;
		let isWinningColumn = true;

		for (let row = 0; row < numRows; row++) {
			if (gameboard[row][col] === null) {
				isWinningColumn = false;
				break;
			}
			if (cell === null) {
				cell = gameboard[row][col];
			} else if (gameboard[row][col] !== cell) {
				isWinningColumn = false;
				break;
			}
		}

		if (isWinningColumn) {
			result = cell === '🛸' ? 'Alien' : 'Rocket';
			break;
		}
	}

	if (result === '') {
		result = 'Draw';
	}

	return result;
};

const checkDiagonal = (gameBoard, result) => {
	const diagonal = [];
	for (let i = 0; i < gameBoard.length; i++) {
		diagonal.push(gameBoard[i][i]);
	}

	if (diagonal.every((val) => val === `🚀`)) {
		result = 'Rocket';
	} else if (diagonal.every((val) => val === `🛸`)) {
		result = 'Alien';
	} else {
		result = 'Draw';
	}

	return result;
};

const checkReverseDiagonal = (gameBoard, result) => {
	const reverseDiagonal = [];
	for (let i = 0; i < gameBoard.length; i++) {
		reverseDiagonal.push(gameBoard[i][gameBoard.length - 1 - i]);
	}

	if (reverseDiagonal.every((val) => val === `🚀`)) {
		result = 'Rocket';
	} else if (reverseDiagonal.every((val) => val === `🛸`)) {
		result = 'Alien';
	} else {
		result = 'Draw';
	}

	return result;
};

const handleWin = (gameBoard) => {
	let result = '';

	result = checkHorizontal(gameBoard, result);
	if (result !== 'Draw') {
		return result;
	}

	result = checkVertical(gameBoard, result);
	if (result !== 'Draw') {
		return result;
	}

	result = checkDiagonal(gameBoard, result);
	if (result !== 'Draw') {
		return result;
	}

	result = checkReverseDiagonal(gameBoard, result);
	if (result !== 'Draw') {
		return result;
	}

	return 'Draw';
};

const verRocket = [
	['🚀', null, null],
	['🚀', null, null],
	['🚀', null, null],
];

const verRocketlastcol = [
	[null, null, '🚀'],
	[null, null, '🚀'],
	[null, null, '🚀'],
];

const verAlienlastcol = [
	[null, null, '🛸'],
	[null, null, '🛸'],
	[null, null, '🛸'],
];

const horRocket = [
	['🚀', '🚀', '🚀'],
	[null, null, null],
	[null, null, null],
];

const horAlien = [
	['🛸', '🛸', '🛸'],
	[null, null, null],
	[null, null, null],
];

let result = '';

console.log(checkVertical(verAlienlastcol, result));
