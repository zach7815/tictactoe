import { bestMove } from './miniMax';
import { createAvailableMovesArray } from './ManageAIMoves.js';
import { handleWin } from '../gameFunctions/gameFuncts.js';

const gameboard1 = [
	['Rocket', null, 'Alien'],
	[null, null, null],
	[null, null, 'Rocket'],
];
const gameboard2 = [
	['Alien', 'Rocket', 'Alien'],
	['Rocket', null, 'Rocket'],
	[null, null, null],
];

const gameboard3 = [
	['Alien', null, null],
	[null, null, 'Rocket'],
	[null, null, 'Rocket'],
];

const gameboard4 = [
	['Rocket', null, null],
	[null, 'Alien', 'Rocket'],
	['Rocket', null, 'Alien'],
];

const gameboard5 = [
	['Alien', null, null],
	['Rocket', 'Rocket', 'Alien'],
	[null, 'Rocket', null],
];

const gameboard6 = [
	['Rocket', null, 'Alien'],
	[null, 'Alien', null],
	['Rocket', null, 'Rocket'],
];

const bestmove1 = [1, 1];
const bestmove2 = [1, 1];
const bestmove3 = [0, 2];
const bestmove4 = [0, 1];
const bestmove5 = [0, 1];

test('bestMove with gameboard1 returns bestmove1', () => {
	expect(bestMove(gameboard1, createAvailableMovesArray, handleWin)).toEqual(
		bestmove1,
	);
});

test('bestMove with gameboard2 returns bestmove2', () => {
	expect(bestMove(gameboard2, createAvailableMovesArray, handleWin)).toEqual(
		bestmove2,
	);
});

test('bestMove with gameboard3 returns bestmove3', () => {
	expect(bestMove(gameboard3, createAvailableMovesArray, handleWin)).toEqual(
		bestmove3,
	);
});

test('bestMove with gameboard4 returns bestmove4', () => {
	expect(bestMove(gameboard4, createAvailableMovesArray, handleWin)).toEqual(
		bestmove4,
	);
});

test('bestMove with gameboard5 returns bestmove5', () => {
	expect(bestMove(gameboard5, createAvailableMovesArray, handleWin)).toEqual(
		bestmove5,
	);
});
