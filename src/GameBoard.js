import { Tile } from './Tile';

const tiles = Array(9).fill(null);

export const Gameboard = () => {
	return (
		<>
			<div className='game-board'>
				{tiles.map((tile, index) => {
					const randomInt = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
					return <Tile key={`${randomInt}${index}`} value={tile} />;
				})}
			</div>
		</>
	);
};
