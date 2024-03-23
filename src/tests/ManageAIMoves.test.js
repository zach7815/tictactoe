import {
	placeComputerMove,
	createAvailableMovesArray,
} from '../gameAIs/ManageAIMoves.js';

const compFirstTurn = [
	['Rocket', null, null],
	[null, null, null],
	[null, null, null],
];

const compSecondTurn = [
	['Alien', 'Rocket', 'Rocket'],
	[null, null, null],
	[null, null, null],
];

const compThirdTurn = [
	['Alien', 'Rocket', 'Rocket'],
	['Alien', null, null],
	['Rocket', null, null],
];
const compFourthTurn = [
	['Alien', 'Rocket', 'Rocket'],
	['Alien', 'Alien', 'Rocket'],
	['Rocket', null, null],
];

const alienReverseDiagonalWin = [
	[null, null, 'Alien'],
	[null, 'Alien', null],
	['Alien', null, null],
];

// coordinates
const firstMoveCoord = [0, 1];
const secondMoveCoord = [1, 0];
const thirdMoveCoord = [1, 1];
const fourthMoveCoord = [2, 2];

// expectedResults

const expectedFirstResult = [
	['Rocket', 'Alien', null],
	[null, null, null],
	[null, null, null],
];

const expectedSecondResult = [
	['Alien', 'Rocket', 'Rocket'],
	['Alien', null, null],
	[null, null, null],
];

const expectedThirdResult = [
	['Alien', 'Rocket', 'Rocket'],
	['Alien', 'Alien', null],
	['Rocket', null, null],
];

const expectedFourthResult = [
	['Alien', 'Rocket', 'Rocket'],
	['Alien', 'Alien', 'Rocket'],
	['Rocket', null, 'Alien'],
];

// ...

test('placeCompTurn returns expected result for compFirstTurn', () => {
	const result = placeComputerMove(compFirstTurn, firstMoveCoord);
	expect(result).toEqual(expectedFirstResult);
});

test('placeCompTurn returns expected result for compSecondTurn', () => {
	const result = placeComputerMove(compSecondTurn, secondMoveCoord);
	expect(result).toEqual(expectedSecondResult);
});

test('placeCompTurn returns expected result for compThirdTurn', () => {
	const result = placeComputerMove(compThirdTurn, thirdMoveCoord);
	expect(result).toEqual(expectedThirdResult);
});

test('placeCompTurn returns expected result for compFourthTurn', () => {
	const result = placeComputerMove(compFourthTurn, fourthMoveCoord);
	expect(result).toEqual(expectedFourthResult);
});

// tests for createAvailableMovesArray function
test('createAvailableMovesArray returns expected result for compFirstTurn', () => {
	const availableMoves = createAvailableMovesArray(compFirstTurn);
	expect(availableMoves).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('createAvailableMovesArray returns expected result for compSecondTurn', () => {
	const availableMoves = createAvailableMovesArray(compSecondTurn);
	expect(availableMoves).toEqual([3, 4, 5, 6, 7, 8]);
});

test('createAvailableMovesArray returns expected result for compThirdTurn', () => {
	const availableMoves = createAvailableMovesArray(compThirdTurn);
	expect(availableMoves).toEqual([4, 5, 7, 8]);
});

test('createAvailableMovesArray returns expected result for compFourthTurn', () => {
	const availableMoves = createAvailableMovesArray(compFourthTurn);
	expect(availableMoves).toEqual([7, 8]);
});

test('createAvailableMovesArray returns expected result for alienReverseDiagonalWin', () => {
	const availableMoves = createAvailableMovesArray(alienReverseDiagonalWin);
	expect(availableMoves).toEqual([0, 1, 3, 5, 7, 8]);
});
