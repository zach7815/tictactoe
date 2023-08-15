import React, { useContext } from 'react';
import GameContext from '../context/GameContext.js';

export const Tile = ({ fill, setFillStatus, id, rowIndex, colIndex }) => {
	const { memoizedHandleCellClick } = useContext(GameContext);

	const playerIcons = {
		Rocket: '🚀',
		Alien: '🛸',
	};

	function handleTileClick() {
		setFillStatus(playerIcons[fill]);
		memoizedHandleCellClick(rowIndex, colIndex);
	}

	return (
		<div
			className='tile'
			id={id}
			onClick={fill === null ? handleTileClick : undefined}
			disabled={fill !== null}
		>
			{playerIcons[fill]}
		</div>
	);
};
