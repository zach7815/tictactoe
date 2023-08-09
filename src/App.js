import React, { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Gameboard } from './GameBoard.js';
import { difficulties } from './gameFunctions/gameDifficultyFuncts.js';
import { FullWidthTabs } from './MuiComponents/FullWidthTabs.js';

function App() {
	const [difficulty, setDifficulty] = useState('');
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

	function handleCellClick(row, col) {
		if (!gameBoardInteractive) {
			return; // Exit early if the game board is not interactive
		} else if (roundDone === true) {
			return;
		}

		// update the gameBoard state with the new fill value
		const newGameBoard = [...gameBoard];
		newGameBoard[row][col] = currentPlayer === 'player 1' ? 'Rocket' : 'Alien';
		setGameBoard(newGameBoard);
		// switch to the next player's turn
		setCurrentPlayer(currentPlayer === 'player 1' ? 'player 2' : 'player 1');
	}

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
