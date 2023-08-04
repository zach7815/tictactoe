import { useState, useEffect } from 'react';
import { Tile } from './Tile';
import { handleWin, checkHorizontal, checkVertical } from './gameFuncts';

export const Gameboard = () => {
	const [gameBoard, setGameBoard] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [fillStatus, setFillStatus] = useState({ value: null });

	const [currentPlayer, setCurrentPlayer] = useState('player1');

	function handleCellClick(row, col) {
		// update the gameBoard state with the new fill value
		const newGameBoard = [...gameBoard];
		newGameBoard[row][col] = currentPlayer === 'player1' ? 'Rocket' : 'Alien';
		setGameBoard(newGameBoard);
		// switch to the next player's turn
		setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
	}

	useEffect(() => {}, [gameBoard]);

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
