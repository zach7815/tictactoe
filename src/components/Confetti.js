import React from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti/dist/react-confetti.js';

export default () => {
	const { width, height } = useWindowSize();

	return (
		<div>
			{/* Render "X" shape */}
			<Confetti
				width={width}
				height={height}
				drawShape={(ctx) => {
					ctx.beginPath();
					ctx.moveTo(-10, -10);
					ctx.lineTo(10, 10);
					ctx.moveTo(-10, 10);
					ctx.lineTo(10, -10);
					ctx.stroke();
					ctx.closePath();
				}}
			/>
		</div>
	);
};
