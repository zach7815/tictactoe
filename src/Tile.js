export const Tile = ({ fill, onClick, setFillStatus }) => {
	const playerIcons = {
		Rocket: '🚀',
		Alien: '🛸',
	};

	function handleTileClick() {
		setFillStatus(playerIcons[fill]);
		onClick();
	}

	return (
		<div
			className='tile'
			onClick={fill === null ? handleTileClick : undefined}
			disabled={fill !== null}
		>
			{playerIcons[fill]}
		</div>
	);
};
