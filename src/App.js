import React, { useState, useEffect, useRef } from 'react';
import './css/App.css';
import { Button } from '@mui/material';
import { Gameboard } from './components/GameBoard.js';
import { difficulties } from './gameFunctions/gameDifficulties.js';
import { FullWidthTabs } from './MuiComponents/FullWidthTabs.js';
import { generateRandomNumber, handleEasyAi } from './gameAIs/Easy.js';
import {
	coordinatesMap,
	createAvailableMovesArray,
	placeComputerMove,
} from './gameAIs/ManageAIMoves.js';

import GameContext from './context/GameContext.js';

function App() {
	const [difficulty, setDifficulty] = useState('Easy');
	const [gameStart, setGameStart] = useState(true);
	const [roundDone, setRoundDone] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState('player 1');
	const [gameBoard, setGameBoard] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [availableMoves, setAvailableMoves] = useState([
		0, 1, 2, 3, 4, 5, 6, 7, 8,
	]);
	const [gameBoardInteractive, setGameBoardInteractive] = useState(false);
	const timeoutRef = useRef(null);
	const handleClick = () => {
		setGameStart(false);
		setGameBoardInteractive(true);
	};

	function handleCellClick(row, col) {
		if (!gameBoardInteractive || roundDone) {
			return;
		}

		const cellValue = gameBoard[row][col];
		if (cellValue === null) {
			const newGameBoard = [...gameBoard];
			newGameBoard[row][col] =
				currentPlayer === 'player 1' ? 'Rocket' : 'Alien';
			setGameBoard(newGameBoard);
			setAvailableMoves(createAvailableMovesArray(gameBoard));
			setCurrentPlayer(currentPlayer === 'player 1' ? 'player 2' : 'player 1');
		}
	}

	useEffect(() => {
		if (roundDone === true) {
			return;
		}

		if (difficulty === 'Easy' && currentPlayer === 'player 2') {
			console.log(availableMoves);
			console.log(roundDone);

			setGameBoardInteractive(false);

			// Generate the computer's move after a delay
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(() => {
				// Update available moves when game board changes

				let compChoice = handleEasyAi(
					availableMoves,
					generateRandomNumber,
					coordinatesMap,
				);
				console.log(compChoice);
				setGameBoard((prevGameBoard) =>
					placeComputerMove(prevGameBoard, compChoice),
				);

				setCurrentPlayer('player 1');
				setGameBoardInteractive(true);
			}, 3000);
		}
	}, [difficulty, currentPlayer, gameBoard, availableMoves, roundDone]);

	return (
		<>
			<header>
				<h1>Tic Tac Toe</h1>
				<h4> Rockets vs Aliens</h4>
				<h3>{currentPlayer}'s turn</h3>
			</header>

			<div className='container'>
				<div className='game-board-wrapper'>
					<GameContext.Provider value={{ handleCellClick }}>
						<Gameboard
							gameBoard={gameBoard}
							handleCellClick={handleCellClick}
							disabled={!gameBoardInteractive}
							setRoundDone={setRoundDone}
						/>
					</GameContext.Provider>
					<div className='strike hidden'> </div>
				</div>
			</div>

			{gameStart && <div className='start-blur'></div>}
			{gameStart && (
				<div className='start-game-component'>
					<p className='instruction'>
						Choose your level then click start to play
					</p>
					<FullWidthTabs
						difficulties={difficulties}
						setDifficulty={setDifficulty}
					/>

					<Button
						className='start-button'
						variant='contained'
						onClick={handleClick}
					>
						Start
					</Button>
				</div>
			)}
		</>
	);
}

export default App;
