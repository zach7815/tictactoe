import { useState, useEffect, useCallback } from 'react';
import { Tile } from './Tile.js';
import {
	handleWin,
	isTurnStillPossible,
	findHorizontalWin,
	findVerticalWin,
} from './gameFuncts.js';

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

	const winStrikeThrough = (gameWin, gameBoard) => {
		const { direction, winner } = gameWin;
		console.log(direction);
		const strike = document.querySelector('.strike');
		const cssHorizontalClasses = {
			0: 'row1',
			1: 'row2',
			2: 'row3',
		};
		const cssVerticalClasses = {
			0: 'col1',
			1: 'col2',
			2: 'col3',
		};

		if (winner === 'Rocket') {
			strike.style.borderColor = '#fe2c54';
		}

		if (direction === 'Horizontal') {
			const winningRow = findHorizontalWin(gameBoard);
			const rowCSS = cssHorizontalClasses[winningRow];
			strike.classList.remove('hidden');
			strike.classList.add('rows');
			strike.classList.add(rowCSS);
		}
		if (direction === 'Vertical') {
			const winningRow = findVerticalWin(gameBoard);
			const columnCSS = cssVerticalClasses[winningRow];
			strike.classList.remove('hidden');
			strike.classList.add('columns');
			strike.classList.add(columnCSS);
		}

		if (direction === 'Diagonal') {
			strike.classList.remove('hidden');
			strike.classList.add('diagonal');
		}

		if (direction === 'ReverseDiagonal') {
			strike.classList.remove('hidden');
			strike.classList.add('reverse-diagonal');
		}
	};

	const handleEndGame = useCallback(() => {
		if (gameWin.winner === 'Rocket') {
			console.log('Congrats you won');
		} else if (gameWin.winner === 'Alien') {
			console.log('Aliens have won');
		} else if (gameWin.winner === 'Draw' && !areMovesPossible) {
			console.log("It's a draw");
		} else {
			console.log('The game is still up for grabs');
		}
	}, [areMovesPossible, gameWin.winner]);

	useEffect(() => {
		setAreMovesPossible(isTurnStillPossible(gameBoard));
		const winResult = handleWin(gameBoard);
		setGameWin(winResult);

		winStrikeThrough(winResult, gameBoard);

		// handleEndGame();
	}, [gameBoard, handleEndGame, areMovesPossible]);
	return (
		<>
			{gameBoard.map((row, rowIndex) => (
				<div className='game-board' key={rowIndex}>
					{row.map((cell, colIndex) => {
						const id = rowIndex * gameBoard.length + colIndex + 1;
						return (
							<Tile
								key={colIndex}
								id={id}
								fill={cell}
								fillStatus={fillStatus}
								setFillStatus={setFillStatus}
								onClick={() => handleCellClick(rowIndex, colIndex)}
							/>
						);
					})}
				</div>
			))}
		</>
	);
};
