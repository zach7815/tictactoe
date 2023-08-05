import { useState, useEffect, useCallback } from 'react';
import { Tile } from './Tile.js';
import { handleWin, isTurnStillPossible } from './gameFuncts.js';

export const Gameboard = () => {
	const [gameBoard, setGameBoard] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [fillStatus, setFillStatus] = useState({ value: null });

	const [currentPlayer, setCurrentPlayer] = useState('player1');

	const [gameWin, setGameWin] = useState('');
	const [areMovesPossible, setAreMovesPossible] = useState(true);

	function handleCellClick(row, col) {
		// update the gameBoard state with the new fill value
		const newGameBoard = [...gameBoard];
		newGameBoard[row][col] = currentPlayer === 'player1' ? 'Rocket' : 'Alien';
		setGameBoard(newGameBoard);
		// switch to the next player's turn
		setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
	}

	const handleEndGame = useCallback(() => {
		if (gameWin === 'Rocket') {
			console.log('Congrats you won');
		} else if (gameWin === 'Alien') {
			console.log('Aliens have won');
		} else if (gameWin === 'Draw' && areMovesPossible === false) {
			console.log('Its a draw');
		} else {
			console.log('The game is still up for grabs');
		}
	}, [areMovesPossible, gameWin]);

	useEffect(() => {
		console.log(gameBoard);
		setAreMovesPossible(isTurnStillPossible(gameBoard));
		setGameWin(handleWin(gameBoard));
		console.log(areMovesPossible);
		console.log(gameWin);
		handleEndGame();
	}, [gameBoard, gameWin, areMovesPossible, handleEndGame]);

	return (
		<div>
			{gameBoard.map((row, rowIndex) => (
				<div className='game-board' key={rowIndex}>
					{row.map((cell, colIndex) => (
						<Tile
							key={colIndex}
							fill={cell}
							fillStatus={fillStatus}
							setFillStatus={setFillStatus}
							onClick={() => handleCellClick(rowIndex, colIndex)}
						/>
					))}
				</div>
			))}
		</div>
	);
};
