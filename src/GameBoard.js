import { useState, useEffect, useCallback } from 'react';
import { Tile } from './Tile.js';
import {
	handleWin,
	isTurnStillPossible,
	winStrikeThrough,
} from './gameFunctions/gameFuncts.js';

export const Gameboard = ({ gameBoard, handleCellClick, setRoundDone }) => {
	const [fillStatus, setFillStatus] = useState({ value: null });
	const [gameWin, setGameWin] = useState('');
	const [areMovesPossible, setAreMovesPossible] = useState(true);

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

		if (winResult.winner !== 'Draw') {
			setRoundDone(true);
			winStrikeThrough(winResult, gameBoard);
		}
	}, [gameBoard, handleEndGame, areMovesPossible, setRoundDone]);
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
								rowIndex={rowIndex}
								colIndex={colIndex}
							/>
						);
					})}
				</div>
			))}
		</>
	);
};
