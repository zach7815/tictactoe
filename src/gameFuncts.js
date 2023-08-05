export const checkHorizontal = (gameboard, result = '') => {
	for (let row of gameboard) {
		if (row.every((cell) => cell === 'Alien')) {
			result = 'Alien';
			break;
		}
		if (row.every((cell) => cell === 'Rocket')) {
			result = 'Rocket';
			break;
		} else {
			result = 'Draw';
		}
	}

	return result;
};
export const checkVertical = (gameboard, result = '') => {
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
			result = cell === 'Alien' ? 'Alien' : 'Rocket';
			break;
		}
	}

	if (result === '') {
		result = 'Draw';
	}

	return result;
};

export const checkDiagonal = (gameBoard, result) => {
	const diagonal = [];
	for (let i = 0; i < gameBoard.length; i++) {
		diagonal.push(gameBoard[i][i]);
	}

	if (diagonal.every((val) => val === `Rocket`)) {
		result = 'Rocket';
	} else if (diagonal.every((val) => val === `Alien`)) {
		result = 'Alien';
	} else {
		result = 'Draw';
	}

	return result;
};

export const checkReverseDiagonal = (gameBoard, result) => {
	const reverseDiagonal = [];
	for (let i = 0; i < gameBoard.length; i++) {
		reverseDiagonal.push(gameBoard[i][gameBoard.length - 1 - i]);
	}

	if (reverseDiagonal.every((val) => val === `Rocket`)) {
		result = 'Rocket';
	} else if (reverseDiagonal.every((val) => val === `Alien`)) {
		result = 'Alien';
	} else {
		result = 'Draw';
	}

	return result;
};

export const handleWin = (gameBoard) => {
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

export const isTurnStillPossible = (gameBoard) => {
	let movesStillPossible = true;

	for (let i = 0; i < gameBoard.length; i++) {
		if (gameBoard[i].every((cell) => cell === 'Alien' || cell === 'Rocket')) {
			movesStillPossible = false;
		}
		return movesStillPossible;
	}
};
