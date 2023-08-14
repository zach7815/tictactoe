export const generateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const handleEasyAi = (
	availableMoves,
	randomNumberGenerator,
	coordinatesObject,
) => {
	const randomIndex = randomNumberGenerator(0, availableMoves.length - 1);
	console.log(randomIndex);
	const chosenIndex = availableMoves[randomIndex];
	console.log(chosenIndex);

	const compChoice = coordinatesObject.get(chosenIndex);

	return compChoice;
};
