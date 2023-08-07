import React from 'react';

import './App.css';
import { Gameboard } from './GameBoard.js';

function App() {
	return (
		<div className='container'>
			<div className='game-board-wrapper'>
				<Gameboard />
				<div className='strike reverse-diagonal'> </div>
			</div>
		</div>
	);
}

export default App;
