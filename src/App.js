import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Gameboard } from './GameBoard.js';
import { difficulties } from './gameFunctions/gameDifficultyFuncts.js';
import { FullWidthTabs } from './MuiComponents/FullWidthTabs.js';

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
		console.log(difficulty);
		setGameBoardInteractive(true);
	};

	function handleCellClick(row, col, level, currentPlayer) {
		console.log(level);
		console.log(currentPlayer);
		if (!gameBoardInteractive) {
			return;
		} else if (roundDone === true) {
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
			console.log("It is player 2's move be patient");
		}
	}, [setGameBoardInteractive, difficulty, currentPlayer]);

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
