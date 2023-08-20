import {
	handleWin,
	checkDiagonal,
	checkHorizontal,
	checkReverseDiagonal,
	checkVertical,
	isTurnStillPossible,
	findHorizontalWin,
	findVerticalWin,
} from './gameFuncts.js';

import pkg from '@jest/globals';
const { test } = pkg;

const rocketHorizontalWin = [
	['Rocket', 'Rocket', 'Rocket'],
	[null, null, null],
	[null, null, null],
];

const alienHorizontalWin = [
	['Alien', 'Alien', 'Alien'],
	[null, null, null],
	[null, null, null],
];

const movesStillPlayayble1 = [
	['Alien', 'Rocket', 'Alien'],
	[null, 'Rocket', null],
	['Rocket', 'ALien', 'Rocket'],
];

const rocketHorizontalFilledBoard = [
	['Rocket', 'Rocket', 'Rocket'],
	['Alien', 'Rocket', 'Alien'],
	['Alien', 'Alien', 'Rocket'],
];
const alienHorizontalFilledBoard = [
	['Rocket', 'Rocket', 'Alien'],
	['Alien', 'Rocket', 'Alien'],
	['Alien', 'Alien', 'Alien'],
];

const alienHorizontalFilledBoardMiddle = [
	['Rocket', 'Rocket', 'Alien'],
	['Alien', 'Alien', 'Alien'],
	['"Rocket', 'Alien', 'Rocket'],
];

const alienHorizontalWinMiddleRow = [
	[null, null, null],
	['Alien', 'Alien', 'Alien'],
	[null, null, null],
];

const alienHorizontalWinLastRow = [
	[null, null, null],
	[null, null, null],
	['Alien', 'Alien', 'Alien'],
];

// Vertical tests
const rocketVerticalWin = [
	['Rocket', null, null],
	['Rocket', null, null],
	['Rocket', null, null],
];

const alienVerticalWin = [
	['Alien', null, null],
	['Alien', null, null],
	['Alien', null, null],
];

const alienVerticalWinLastCol = [
	[null, null, 'Alien'],
	[null, null, 'Alien'],
	[null, null, 'Alien'],
];

const alienVerticalFilledBoardMiddle = [
	['Rocket', 'Alien', 'Alien'],
	['Alien', 'Alien', 'Alien'],
	['"Rocket', 'Alien', 'Rocket'],
];

const rocketVerticalFilledBoardcol1 = [
	['Rocket', 'Alien', 'Rocket'],
	['Rocket', 'Rocket', 'Alien'],
	['Rocket', 'Alien', 'Alien'],
];

const AlienVerticalFilledBoardcol3 = [
	['Rocket', 'Alien', 'Alien'],
	['Alien', 'Rocket', 'Alien'],
	['Rocket', 'Alien', 'Alien'],
];
const rocketDiagonalWin = [
	['Rocket', null, null],
	[null, 'Rocket', null],
	[null, null, 'Rocket'],
];

const alienDiagonalWin = [
	['Alien', null, null],
	[null, 'Alien', null],
	[null, null, 'Alien'],
];

const rocketReverseDiagonalWin = [
	[null, null, 'Rocket'],
	[null, 'Rocket', null],
	['Rocket', null, null],
];

const alienReverseDiagonalWin = [
	[null, null, 'Alien'],
	[null, 'Alien', null],
	['Alien', null, null],
];

// Draw cases
const drawCase = [
	['Rocket', 'Alien', 'Rocket'],
	['Alien', 'Rocket', 'Alien'],
	['Alien', 'Rocket', 'Alien'],
];

const drawCase2 = [
	['Rocket', 'Alien', 'Rocket'],
	['Rocket', 'Alien', 'Alien'],
	['Alien', 'Rocket', 'Alien'],
];

test('checkVertical returns "Alien" for alienVerticalWin', () => {
	const result = '';
	expect(checkVertical(alienVerticalWin, result)).toBe('Alien');
});
test('checkVertical returns "Rocket" for rocketVerticalWin', () => {
	const result = '';
	expect(checkVertical(rocketVerticalWin, result)).toBe('Rocket');
});

test('checkVertical returns "Alien" for alienVerticalWinLastCol', () => {
	const result = '';
	expect(checkVertical(alienVerticalWinLastCol, result)).toBe('Alien');
});

test('checkHorizontal returns "Rocket" for rocketHorizontalWin', () => {
	const result = '';
	expect(checkHorizontal(rocketHorizontalWin, result)).toBe('Rocket');
});

test('checkHorizontal returns "Alien" for alienHorizontalWin', () => {
	const result = '';
	expect(checkHorizontal(alienHorizontalWin, result)).toBe('Alien');
});

test('checkDiagonal returns "Rocket" for rocketDiagonalWin', () => {
	const result = '';
	expect(checkDiagonal(rocketDiagonalWin, result)).toBe('Rocket');
});

test('checkDiagonal returns "Alien" for alienDiagonalWin', () => {
	const result = '';
	expect(checkDiagonal(alienDiagonalWin, result)).toBe('Alien');
});

test('checkReverseDiagonal returns "Rocket" for rocketReverseDiagonalWin', () => {
	const result = '';
	expect(checkReverseDiagonal(rocketReverseDiagonalWin, result)).toBe('Rocket');
});

test('checkReverseDiagonal returns "Alien" for alienReverseDiagonalWin', () => {
	const result = '';
	expect(checkReverseDiagonal(alienReverseDiagonalWin, result)).toBe('Alien');
});

// Tests for handleWin

test('handleWin returns {direction:"Draw", winner:"Draw"} for drawCase', () => {
	expect(handleWin(drawCase)).toEqual({ direction: '', winner: 'Draw' });
});

test('handleWin returns {direction: "Diagonal", winner: "Alien"} for alienDiagonalWin', () => {
	expect(handleWin(alienDiagonalWin)).toEqual({
		direction: 'Diagonal',
		winner: 'Alien',
	});
});

test('handleWin returns {direction: "Diagonal",winner: "Alien"} for alienHorizontalWin', () => {
	expect(handleWin(alienHorizontalWin)).toEqual({
		direction: 'Horizontal',
		winner: 'Alien',
	});
});

test('handleWin returns {direction: "Horizontal",winner: "Rocket"} for rocketHorizontalWin', () => {
	expect(handleWin(rocketHorizontalWin)).toEqual({
		direction: 'Horizontal',
		winner: 'Rocket',
	});
});

test('handleWin returns {direction: "Diagonal",winner: "Rocket"} for rocketDiagonalWin', () => {
	expect(handleWin(rocketDiagonalWin)).toEqual({
		direction: 'Diagonal',
		winner: 'Rocket',
	});
});

// Turn possible tests

test('isTurnStillPossible returns "false" for drawCase', () => {
	expect(isTurnStillPossible(drawCase)).toBe(false);
});
test('isTurnStillPossible returns "false" for drawCase2', () => {
	expect(isTurnStillPossible(drawCase2)).toBe(false);
});
test('isTurnStillPossible returns "true" for rocketDiagonalWin', () => {
	expect(isTurnStillPossible(rocketDiagonalWin)).toBe(true);
});

// Finding Winning row index for Horizontal directions

test('findHorizontal returns o for rocketHorizontal', () => {
	expect(findHorizontalWin(rocketHorizontalWin)).toBe(0);
});

test('findHorizontal returns o for alienHorizontalWin', () => {
	expect(findHorizontalWin(alienHorizontalWin)).toBe(0);
});
test('findHorizontal returns 1 for alienHorizontalWinMiddleRow', () => {
	expect(findHorizontalWin(alienHorizontalWinMiddleRow)).toBe(1);
});
test('findHorizontal returns 2 for alienHorizontalWinLastRow', () => {
	expect(findHorizontalWin(alienHorizontalWinLastRow)).toBe(2);
});

// mixed Full Board Horizontal:

test('findHorizontal returns o for rocketHorizontalFilledBoard', () => {
	expect(findHorizontalWin(rocketHorizontalFilledBoard)).toBe(0);
});
test('findHorizontal returns 2 for alienHorizontalFilledBoard', () => {
	expect(findHorizontalWin(alienHorizontalFilledBoard)).toBe(2);
});
test('findHorizontal returns 1 for alienHorizontalFilledBoardMiddle', () => {
	expect(findHorizontalWin(alienHorizontalFilledBoardMiddle)).toBe(1);
});

test('findHorizontal returns -1 for drawCase', () => {
	expect(findHorizontalWin(drawCase)).toBe(-1);
});
test('findHorizontal returns -1 for drawCase2', () => {
	expect(findHorizontalWin(drawCase)).toBe(-1);
});

// Find Winning Col for vertical cols.

test('findVertical returns 0 for rocketVerticalWin', () => {
	expect(findVerticalWin(rocketVerticalWin)).toBe(0);
});

test('findVertical returns 2 for alienVerticalWinLastCol', () => {
	expect(findVerticalWin(alienVerticalWinLastCol)).toBe(2);
});

// filled boards
test('findVertical returns 1 for alienVerticalFilledBoardMiddle', () => {
	expect(findVerticalWin(alienVerticalFilledBoardMiddle)).toBe(1);
});

test('findVertical returns 0 for rocketVerticalFilledBoardcol1', () => {
	expect(findVerticalWin(rocketVerticalFilledBoardcol1)).toBe(0);
});

test('findVertical returns 2 for AlienVerticalFilledBoardcol3', () => {
	expect(findVerticalWin(AlienVerticalFilledBoardcol3)).toBe(2);
});

// draw scenarios
test('findVertical returns -1 for drawCase', () => {
	expect(findVerticalWin(drawCase)).toBe(-1);
});
test('findVertical returns -1 for drawCase2', () => {
	expect(findVerticalWin(drawCase2)).toBe(-1);
});
