import React, { useState, useContext } from 'react';
import { playerContext } from './Context';

export const Tile = ({ fill, onClick }) => {
	const [fillStatus, setFillStatus] = useState({ value: null });
	const [playerTurn, setPlayerTurn] = useContext(playerContext);

	const playerIcons = {
		Rocket: '🚀',
		Alien: '🛸',
	};

	const handleTurns = (player1, player2) => {
		if (player1 === player2 || player1 < player2) {
			setFillStatus('Rocket');
			setPlayerTurn({ player1: player1 + 1, player2 });
		} else {
			setFillStatus('Alien');
			setPlayerTurn({ player1, player2: player2 + 1 });
		}
		console.log(fillStatus);
	};

	const handleClick = () => {
		handleTurns(playerTurn.player1, playerTurn.player2);
		console.log(playerTurn);
	};

	return (
		<div className='tile' onClick={onClick}>
			{playerIcons[fill]}
		</div>
	);
};
