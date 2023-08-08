import React, { useState } from 'react';
import './App.css';
import { Gameboard } from './GameBoard.js';
import { difficulties } from './gameFunctions/gameDifficultyFuncts.js';
import { FullWidthTabs } from './MuiComponents/FullWidthTabs.js';

function App() {
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

			<FullWidthTabs difficulties={difficulties} />
		</>
	);
}

export default App;
