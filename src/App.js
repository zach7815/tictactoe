import React, { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Gameboard } from './GameBoard.js';
import { difficulties } from './gameFunctions/gameDifficultyFuncts.js';
import { FullWidthTabs } from './MuiComponents/FullWidthTabs.js';

function App() {
	const [difficulty, setDifficulty] = useState('');
	const handleClick = () => {
		console.log(difficulty);
	};
	return (
		<>
			<header>
				<h1>Tic Tac Toe</h1>
				<h4> Rockets vs Aliens</h4>
			</header>

			<div className='container'>
				<div className='game-board-wrapper'>
					<Gameboard />
					<div className='strike hidden'> </div>
				</div>
			</div>
			<div className='start-game-component'>
				<p className='instruction'>
					{' '}
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
		</>
	);
}

export default App;
