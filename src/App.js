import React, { useState, useEffect } from 'react';
import './css/App.css';
import { Button } from '@mui/material';
import { Gameboard } from './components/GameBoard.js';
import { difficulties } from './gameFunctions/gameDifficulties.js';
import { FullWidthTabs } from './MuiComponents/FullWidthTabs.js';
import { generateRandomNumber, handleEasyAi } from './gameAIs/Easy.js';

import GameContext from './context/GameContext.js';

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

	function handleCellClick(row, col) {
		if (!gameBoardInteractive || roundDone === true) {
			return;
		}

		const newGameBoard = [...gameBoard];
		newGameBoard[row][col] = currentPlayer === 'player 1' ? 'Rocket' : 'Alien';
		setGameBoard(newGameBoard);
		setCurrentPlayer(currentPlayer === 'player 1' ? 'player 2' : 'player 1');
	}

	useEffect(() => {
		if (difficulty !== '2 player Mode') {
			switch (difficulty) {
				case 'Easy':
					if (currentPlayer === 'player 2') {
						setGameBoardInteractive(false);
						console.log('Easy Mode chosen');
					}
					break;
				case 'Intermediate':
					if (currentPlayer === 'player 2') {
						setGameBoardInteractive(false);
						console.log('Intermediate Mode chosen');
					}
					break;
				case 'Impossible':
					if (currentPlayer === 'player 2') {
						setGameBoardInteractive(false);
						console.log('Impossible Mode chosen');
					}
					break;
				default:
					return;
			}
		}
	}, [difficulty, currentPlayer]);

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
