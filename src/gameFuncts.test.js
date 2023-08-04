import {
	handleWin,
	checkDiagonal,
	checkHorizontal,
	checkReverseDiagonal,
	checkVertical,
} from './gameFuncts.js';

import pkg from '@jest/globals';
const { test } = pkg;

const rocketHorizontalWin = [
	['🚀', '🚀', '🚀'],
	[null, null, null],
	[null, null, null],
];

const alienHorizontalWin = [
	['🛸', '🛸', '🛸'],
	[null, null, null],
	[null, null, null],
];

const rocketVerticalWin = [
	['🚀', null, null],
	['🚀', null, null],
	['🚀', null, null],
];

const alienVerticalWin = [
	['🛸', null, null],
	['🛸', null, null],
	['🛸', null, null],
];

const rocketDiagonalWin = [
	['🚀', null, null],
	[null, '🚀', null],
	[null, null, '🚀'],
];

const alienDiagonalWin = [
	['🛸', null, null],
	[null, '🛸', null],
	[null, null, '🛸'],
];

const rocketReverseDiagonalWin = [
	[null, null, '🚀'],
	[null, '🚀', null],
	['🚀', null, null],
];

const alienReverseDiagonalWin = [
	[null, null, '🛸'],
	[null, '🛸', null],
	['🛸', null, null],
];

const drawCase = [
	['🚀', '🛸', '🚀'],
	['🛸', '🚀', '🛸'],
	['🛸', '🚀', '🛸'],
];

test('checkVertical returns "Alien" for alienVerticalWin', () => {
	const result = '';
	expect(checkVertical(alienVerticalWin, result)).toBe('Alien');
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
