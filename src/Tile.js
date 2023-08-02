import React, { useState, useContext } from 'react';
import { playerContext } from './Context';
import { Rocket } from './Rocket';
import { Alien } from './Alien';

export const Tile = (props) => {
	const [fillStatus, setFillStatus] = useState({ value: null });
	const [playerTurn, setPlayerTurn] = useContext(playerContext);

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
	};

	return (
		<div className='tile' onClick={handleClick}>
			{fillStatus === 'Rocket' && <Rocket />}
			{fillStatus === 'Alien' && <Alien />}
		</div>
	);
};
