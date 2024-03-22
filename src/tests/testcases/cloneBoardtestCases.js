export const rocketHorizontalWin = [
  ['Rocket', 'Rocket', 'Rocket'],
  [null, null, null],
  [null, null, null],
];

export const alienHorizontalWin = [
  ['Alien', 'Alien', 'Alien'],
  [null, null, null],
  [null, null, null],
];

export const rocketHorizontalFilledBoard = [
  ['Rocket', 'Rocket', 'Rocket'],
  ['Alien', 'Rocket', 'Alien'],
  ['Alien', 'Alien', 'Rocket'],
];
export const alienVeticalFilledBoard = [
  ['Rocket', 'Rocket', 'Alien'],
  ['Alien', 'Rocket', 'Alien'],
  ['Alien', 'Alien', 'Alien'],
];

export const alienHorizontalFilledBoardMiddle = [
  ['Rocket', 'Rocket', 'Alien'],
  ['Alien', 'Alien', 'Alien'],
  ['"Rocket', 'Alien', 'Rocket'],
];

export const alienHorizontalWinMiddleRow = [
  [null, null, null],
  ['Alien', 'Alien', 'Alien'],
  [null, null, null],
];

export const alienHorizontalWinLastRow = [
  [null, null, null],
  [null, null, null],
  ['Alien', 'Alien', 'Alien'],
];

// Vertical tests
export const rocketVerticalWin = [
  ['Rocket', null, null],
  ['Rocket', null, null],
  ['Rocket', null, null],
];

export const alienVerticalWin = [
  ['Alien', null, null],
  ['Alien', null, null],
  ['Alien', null, null],
];

export const alienVerticalWinLastCol = [
  [null, null, 'Alien'],
  [null, null, 'Alien'],
  [null, null, 'Alien'],
];

export const alienVerticalFilledBoardMiddle = [
  ['Rocket', 'Alien', 'Alien'],
  ['Alien', 'Alien', 'Alien'],
  ['"Rocket', 'Alien', 'Rocket'],
];

export const rocketVerticalFilledBoardcol1 = [
  ['Rocket', 'Alien', 'Rocket'],
  ['Rocket', 'Rocket', 'Alien'],
  ['Rocket', 'Alien', 'Alien'],
];

export const AlienVerticalFilledBoardcol3 = [
  ['Rocket', 'Alien', 'Alien'],
  ['Alien', 'Rocket', 'Alien'],
  ['Rocket', 'Alien', 'Alien'],
];
export const rocketDiagonalWin = [
  ['Rocket', null, null],
  [null, 'Rocket', null],
  [null, null, 'Rocket'],
];

export const alienDiagonalWin = [
  ['Alien', null, null],
  [null, 'Alien', null],
  [null, null, 'Alien'],
];

export const rocketReverseDiagonalWin = [
  [null, null, 'Rocket'],
  [null, 'Rocket', null],
  ['Rocket', null, null],
];

export const alienReverseDiagonalWin = [
  [null, null, 'Alien'],
  [null, 'Alien', null],
  ['Alien', null, null],
];

// Draw cases
export const drawCase = [
  ['Rocket', 'Alien', 'Rocket'],
  ['Alien', 'Rocket', 'Alien'],
  ['Alien', 'Rocket', 'Alien'],
];

export const drawCase2 = [
  ['Rocket', 'Alien', 'Rocket'],
  ['Rocket', 'Alien', 'Alien'],
  ['Alien', 'Rocket', 'Alien'],
];
