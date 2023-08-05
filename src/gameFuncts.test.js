import {
	handleWin,
	checkDiagonal,
	checkHorizontal,
	checkReverseDiagonal,
	checkVertical,
	isTurnStillPossible,
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
test('checkVertical returns "Rocket" for alienVerticalWin', () => {
	const result = '';
	expect(checkVertical(rocketVerticalWin, result)).toBe('Rocket');
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

test('handleWin returns "Draw" for drawCase', () => {
	expect(handleWin(drawCase)).toBe('Draw');
});

test('handleWin returns "Alien" for alienDiagonalWin', () => {
	expect(handleWin(alienDiagonalWin)).toBe('Alien');
});

test('handleWin returns "Alien" for alienHorizontalWin', () => {
	expect(handleWin(alienHorizontalWin)).toBe('Alien');
});

test('handleWin returns "Rocket" for rocketHorizontalWin', () => {
	expect(handleWin(rocketHorizontalWin)).toBe('Rocket');
});

test('handleWin returns "Rocket" for rocketDiagonalWin', () => {
	expect(handleWin(rocketDiagonalWin)).toBe('Rocket');
});

test('isTurnStillPossible returns "false" for drawCase', () => {
	expect(isTurnStillPossible(drawCase)).toBe(false);
});
test('isTurnStillPossible returns "false" for drawCase2', () => {
	expect(isTurnStillPossible(drawCase2)).toBe(false);
});
test('isTurnStillPossible returns "true" for rocketDiagonalWin', () => {
	expect(isTurnStillPossible(rocketDiagonalWin)).toBe(true);
});
