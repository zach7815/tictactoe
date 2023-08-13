export const generateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const handleEasyAi = (
	gameBoard,
	randomNumber,
	coordinates,
	CellChecker,
	isRoundDone,
) => {
	if (isRoundDone) {
		return;
	} else {
		let compChoice = coordinates.get(randomNumber);
		console.log(`compChoice is: ${compChoice}`);
		let isCellFull = CellChecker(gameBoard, randomNumber, coordinates);
		while (isCellFull === true) {
			compChoice = coordinates.get(randomNumber);
			isCellFull = CellChecker(gameBoard, randomNumber, coordinates);
		}

		console.log(`compChoice is ${compChoice}`);
		return compChoice;
	}
};
