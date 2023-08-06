export const checkHorizontal = (gameBoard, result = '') => {
	for (let row of gameBoard) {
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
export const checkVertical = (gameBoard, result = '') => {
	const numRows = gameBoard.length;
	const numCols = gameBoard[0].length;

	for (let col = 0; col < numCols; col++) {
		let cell = null;
		let isWinningColumn = true;

		for (let row = 0; row < numRows; row++) {
			if (gameBoard[row][col] === null) {
				isWinningColumn = false;
				break;
			}
			if (cell === null) {
				cell = gameBoard[row][col];
			} else if (gameBoard[row][col] !== cell) {
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
	let winner = '';
	let direction = '';

	winner = checkHorizontal(gameBoard);
	if (winner !== 'Draw') {
		direction = 'Horizontal';
		return { direction, winner };
	}

	winner = checkVertical(gameBoard);
	if (winner !== 'Draw') {
		direction = 'Vertical';
		return { direction, winner };
	}

	winner = checkDiagonal(gameBoard);
	if (winner !== 'Draw') {
		direction = 'Diagonal';
		return { direction, winner };
	}

	winner = checkReverseDiagonal(gameBoard);
	if (winner !== 'Draw') {
		direction = 'ReverseDiagonal';
		return { direction, winner };
	}

	return { direction, winner };
};

export const findHorizontalWin = (gameBoard) => {
	for (let rowIndex = 0; rowIndex < gameBoard.length; rowIndex++) {
		const row = gameBoard[rowIndex];
		if (row.every((cell) => cell === 'Alien' || cell === 'Rocket')) {
			return rowIndex;
		}
	}
	return -1; // Return -1 if no winning row is found
};

export const findVerticalWin = (gameBoard) => {
	const numCols = gameBoard[0].length;

	for (let col = 0; col < numCols; col++) {
		const column = [gameBoard[0][col], gameBoard[1][col], gameBoard[2][col]];
		if (column.every((cell) => cell === 'Alien' || cell === 'Rocket')) {
			return col;
		}
	}

	return -1; // Return -1 if no winning column is found
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
