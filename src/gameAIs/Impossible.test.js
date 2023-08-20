import { miniMax } from './Impossible.js';
import { createAvailableMovesArray } from './ManageAIMoves.js';
import { handleWin } from '../gameFunctions/gameFuncts.js';
import { findBlockingMove, findWinningMove } from './Intermediate.js';

const gameboard1 = [
	['Rockets', 'Rockets', null],
	[null, 'Aliens', null],
	[null, null, 'Aliens'],
];

const gameboard2 = [
	['Aliens', null, null],
	[null, 'Rockets', 'Rockets'],
	[null, null, 'Aliens'],
];

const gameboard3 = [
	['Aliens', null, 'Rockets'],
	[null, 'Aliens', null],
	[null, 'Rockets', null],
];

const gameboard4 = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const expectedresult1 = {
	2: 2, // Score for position (0, 2)
	3: 0, // Score for position (1, 0)
	5: 2, // Score for position (1, 2)
	6: 0, // Score for position (2, 0)
	7: 0, // Score for position (2, 1)
	8: 2, // Score for position (2, 2)
};

const expectedresult2 = {
	0: 0, // Score for position (0, 0)
	1: 0, // Score for position (0, 1)
	2: 2, // Score for position (0, 2)
	3: 2, // Score for position (1, 0)
	5: 0, // Score for position (1, 2)
	6: 0, // Score for position (2, 0)
	7: 0, // Score for position (2, 1)
	8: 0, // Score for position (2, 2)
};

const expectedresult3 = {
	0: 0, // Score for position (0, 0)
	1: 0, // Score for position (0, 1)
	3: 0, // Score for position (1, 0)
	5: 0, // Score for position (1, 2)
	7: 2, // Score for position (2, 1)
	8: 0, // Score for position (2, 2)
};

const expectedresult4 = {
	0: 0, // Score for position (0, 0)
	1: 0, // Score for position (0, 1)
	2: 0, // Score for position (0, 2)
	3: 0, // Score for position (1, 0)
	4: 0, // Score for position (1, 1)
	5: 0, // Score for position (1, 2)
	6: 0, // Score for position (2, 0)
	7: 0, // Score for position (2, 1)
	8: 0, // Score for position (2, 2)
};

test('testCase1 should be equal to expectedResult1', () => {
	const testCase1 = miniMax(
		gameboard1,
		2,
		true,
		createAvailableMovesArray,
		handleWin,
		findWinningMove,
		findBlockingMove,
	);
	expect(testCase1).toEqual(expectedresult1);
});
