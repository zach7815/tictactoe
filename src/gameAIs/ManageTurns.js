export const placeComputerMove = (gameboard, coordinates) => {
	const newGameBoard = [...gameboard];
	newGameBoard[coordinates[0]][coordinates[1]] = 'Alien';
	return newGameBoard;
};
