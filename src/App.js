import React from 'react';

import './App.css';
import { Gameboard } from './GameBoard.js';

function App() {
	return (
		<div className='container'>
			<div className='game-board-wrapper'>
				<Gameboard />
			</div>
		</div>
	);
}

export default App;
