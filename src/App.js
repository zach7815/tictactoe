import React, {
	useState,
	useEffect,
	useRef,
	useCallback,
	useMemo,
} from 'react';
import './css/App.css';
import { Button } from '@mui/material';
import { Gameboard } from './components/GameBoard.js';
import { WinState } from './components/WinState.js';
import { difficulties } from './gameFunctions/gameDifficulties.js';
import { FullWidthTabs } from './MuiComponents/FullWidthTabs.js';
import { generateRandomNumber, handleEasyAi } from './gameAIs/Easy.js';
import {
	coordinatesMap,
	createAvailableMovesArray,
	placeComputerMove,
} from './gameAIs/ManageAIMoves.js';
import {
	handleWin,
	isTurnStillPossible,
	winStrikeThrough,
} from './gameFunctions/gameFuncts.js';
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
	const [areMovesPossible, setAreMovesPossible] = useState(true);
	const [gameWin, setGameWin] = useState({ direction: '', winner: 'Draw' });

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

	const handleClick = () => {
		setGameStart(false);
		setGameBoardInteractive(true);
	};

	useEffect(() => {
		setAreMovesPossible(isTurnStillPossible(gameBoard));
		const winResult = handleWin(gameBoard);
		setGameWin(winResult);

		if (winResult.winner !== 'Draw') {
			setRoundDone(true);
			handleEndGame();
			winStrikeThrough(winResult, gameBoard);
		}
	}, [gameBoard, handleEndGame, areMovesPossible, setRoundDone, roundDone]);

	const memoizedHandleCellClick = useMemo(() => {
		return function handleCellClick(row, col) {
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
				setCurrentPlayer(
					currentPlayer === 'player 1' ? 'player 2' : 'player 1',
				);
			}
		};
	}, [
		gameBoardInteractive,
		roundDone,
		gameBoard,
		currentPlayer,
		setGameBoard,
		setAvailableMoves,
		setCurrentPlayer,
	]);
	useEffect(() => {
		if (
			difficulty === 'Easy' &&
			currentPlayer === 'player 2' &&
			areMovesPossible === true &&
			roundDone !== true &&
			gameWin.winner !== 'Rocket'
		) {
			setGameBoardInteractive(false);
		}
	}, [difficulty, currentPlayer, areMovesPossible, roundDone, gameWin.winner]);

	useEffect(() => {
		if (
			difficulty === 'Easy' &&
			currentPlayer === 'player 2' &&
			areMovesPossible === true &&
			roundDone !== true &&
			gameWin.winner !== 'Rocket'
		) {
			timeoutRef.current = setTimeout(() => {
				let compChoice = handleEasyAi(
					availableMoves,
					generateRandomNumber,
					coordinatesMap,
				);

				setGameBoard((prevGameBoard) =>
					placeComputerMove(prevGameBoard, compChoice),
				);

				setCurrentPlayer('player 1');
				setGameBoardInteractive(true);
			}, 3000);
		}

		return () => clearTimeout(timeoutRef.current);
	}, [
		difficulty,
		currentPlayer,
		gameBoard,
		availableMoves,
		roundDone,
		areMovesPossible,
		gameWin,
	]);

	return (
		<>
			<header>
				<h1>Tic Tac Toe</h1>
				<h4> Rockets vs Aliens</h4>
				<h3>{currentPlayer}'s turn</h3>
			</header>

			<div className='container'>
				<div className='game-board-wrapper'>
					<GameContext.Provider value={{ memoizedHandleCellClick }}>
						<Gameboard
							gameBoard={gameBoard}
							handleCellClick={memoizedHandleCellClick}
							disabled={!gameBoardInteractive}
							setRoundDone={setRoundDone}
						/>
					</GameContext.Provider>
					<div className='strike hidden'> </div>
				</div>
			</div>
			{gameWin.winner === 'Rocket' && <WinState />}

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
