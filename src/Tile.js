export const Tile = ({ fill, onClick, setFillStatus, id }) => {
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
			id={id}
			onClick={fill === null ? handleTileClick : undefined}
			disabled={fill !== null}
		>
			{playerIcons[fill]}
		</div>
	);
};
