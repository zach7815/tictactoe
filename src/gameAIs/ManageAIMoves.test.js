import { placeComputerMove } from './ManageTurns.js';

const CompFirstTurn = [
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

test(`placeCompTurn returns ${expectedFirstResult} for compFirstTurn`, () => {
	expect(placeComputerMove(CompFirstTurn, firstMoveCoord)).toEqual(
		expectedFirstResult,
	);
});

test(`placeCompTurn returns ${expectedSecondResult} for compSecondTurn`, () => {
	expect(placeComputerMove(compSecondTurn, secondMoveCoord)).toEqual(
		expectedSecondResult,
	);
});

test(`placeCompTurn returns ${expectedThirdResult} for compThirdTurn`, () => {
	expect(placeComputerMove(compThirdTurn, thirdMoveCoord)).toEqual(
		expectedThirdResult,
	);
});

test(`placeCompTurn returns ${expectedFourthResult} for compFourthTurn`, () => {
	expect(placeComputerMove(compFourthTurn, fourthMoveCoord)).toEqual(
		expectedFourthResult,
	);
});
