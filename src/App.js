import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Gameboard } from './GameBoard.js';
import { difficulties } from './gameFunctions/gameDifficultyFuncts.js';
import { FullWidthTabs } from './MuiComponents/FullWidthTabs.js';
import { generateRandomNumber } from './gameAIs/Easy.js';
import { placeComputerMove } from './gameAIs/ManageTurns.js';
import { isCellOccupied, coordinates } from './gameFunctions/gameFuncts.js';

function App() {
	const [difficulty, setDifficulty] = useState('2 player mode');
	const [gameStart, setGameStart] = useState(true);
	const [roundDone, setRoundDone] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState('player 1');
	const [gameBoard, setGameBoard] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [gameBoardInteractive, setGameBoardInteractive] = useState(false);

	const handleClick = () => {
		setGameStart(false);
		setGameBoardInteractive(true);
	};

	function handleCellClick(row, col, level, currentPlayer) {
		if (!gameBoardInteractive || roundDone === true) {
			return;
		}

		const newGameBoard = [...gameBoard];
		newGameBoard[row][col] = currentPlayer === 'player 1' ? 'Rocket' : 'Alien';
		setGameBoard(newGameBoard);
		setCurrentPlayer(currentPlayer === 'player 1' ? 'player 2' : 'player 1');
	}

	useEffect(() => {
		if (difficulty !== '2 player mode' && currentPlayer === 'player 2') {
			setGameBoardInteractive(false);
			let isCellFull = true;
			let randomNumber = generateRandomNumber(0, 8);
			let compChoice = coordinates.get(randomNumber);
			console.log(randomNumber);
			console.log(compChoice);
			isCellFull = isCellOccupied(gameBoard, randomNumber, coordinates);
			console.log(isCellFull);

			while (isCellFull) {
				randomNumber = generateRandomNumber(0, 9);
				console.log(typeof randomNumber);
				compChoice = coordinates[randomNumber];
				console.log(compChoice);
				isCellFull = isCellOccupied(gameBoard, randomNumber, compChoice);
			}

			let newGameBoard = placeComputerMove(gameBoard, compChoice);
			console.log(newGameBoard);
		}
	}, [setGameBoardInteractive, difficulty, currentPlayer, gameBoard]);

	return (
		<>
			<header>
				<h1>Tic Tac Toe</h1>
				<h4> Rockets vs Aliens</h4>
				<h3>{currentPlayer}'s turn</h3>
			</header>

			<div className='container'>
				<div className='game-board-wrapper'>
					<Gameboard
						gameBoard={gameBoard}
						handleCellClick={handleCellClick}
						disabled={!gameBoardInteractive}
						setRoundDone={setRoundDone}
						difficulty={difficulty}
						currentPlayer={currentPlayer}
					/>
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
