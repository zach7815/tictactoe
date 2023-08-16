import React from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti/dist/react-confetti.js';

export default () => {
	const { width, height } = useWindowSize();

	return (
		<div>
			<Confetti
				width={width}
				height={height}
				drawShape={(ctx) => {
					ctx.beginPath();
					ctx.arc(0, 0, 10, 0, 2 * Math.PI); // Modify the radius as per your requirements
					ctx.stroke();
					ctx.closePath();
					ctx.strokeStyle = '#8EFF00'; // Set stroke color
					ctx.lineWidth = 2; // Set stroke width
					ctx.stroke();
				}}
			/>
		</div>
	);
};
