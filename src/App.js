import React, { useState } from 'react';
import { playerContext } from './Context';
import './App.css';
import { Gameboard } from './GameBoard';

function App() {
	const [playerTurn, setPlayerTurn] = useState({ player1: 0, player2: 0 });
	const [gameBoard, setGameBoard] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);

	const handleTurns = (player1, player2) => {
		if (player1.player1 === player2.player2) {
		}
	};
	return (
		<div className='container'>
			<div className='game-board-wrapper'>
				<playerContext.Provider value={[playerTurn, setPlayerTurn]}>
					<Gameboard />
				</playerContext.Provider>
			</div>
		</div>
	);
}

export default App;
