import React, { useContext } from 'react';
import GameContext from './GameContext.js';

export const Tile = ({ fill, setFillStatus, id, rowIndex, colIndex }) => {
	const { handleCellClick } = useContext(GameContext);

	const playerIcons = {
		Rocket: '🚀',
		Alien: '🛸',
	};

	function handleTileClick() {
		setFillStatus(playerIcons[fill]);
		handleCellClick(rowIndex, colIndex);
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
