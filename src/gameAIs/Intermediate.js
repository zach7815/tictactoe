import { createAvailableMovesArray, coordinatesMap } from './ManageAIMoves.js';
import { generateRandomNumber } from './Easy.js';

export function makeIntermediateAIMove(
  gameBoard,
  createAvailableMovesArray,
  generateRandomNumber,
  coordinatesMap
) {
  console.log(gameBoard);
  const winningMove = findWinningMove(gameBoard);

  const blockingMove = findBlockingMove(gameBoard);

  if (winningMove !== null) {
    return winningMove;
  }

  if (blockingMove !== null) {
    return blockingMove;
  }

  // Check if any corner positions are available
  const corners = [
    [0, 0],
    [0, 2],
    [2, 0],
    [2, 2],
  ];

  const availableCorners = corners.filter(
    (corner) => gameBoard[corner[0]][corner[1]] === null
  );

  if (availableCorners.length > 0) {
    const randomCorner =
      availableCorners[Math.floor(Math.random() * availableCorners.length)];
    return randomCorner;
  }

  // Check if the center position is available
  if (gameBoard[1][1] === null) {
    return [1, 1];
  }

  // Select any remaining available position
  const availablePositions = createAvailableMovesArray(gameBoard);
  const randomIndex = generateRandomNumber(0, availablePositions.length - 1);

  const randomAvailablePosition = availablePositions[randomIndex];
  const position = coordinatesMap.get(randomAvailablePosition);

  return position;
}

// Helper function to check if a player has won
export function checkWinningMove(gameBoard, player) {
  const boardSize = gameBoard.length;

  // Check rows
  for (let row = 0; row < boardSize; row++) {
    let count = 0;
    let emptyCell = null;
    for (let col = 0; col < boardSize; col++) {
      if (gameBoard[row][col] === player) {
        count++;
      } else if (gameBoard[row][col] === null) {
        emptyCell = [row, col];
      }
    }
    if (count === boardSize - 1 && emptyCell) {
      return emptyCell;
    }
  }

  // Check columns
  for (let col = 0; col < boardSize; col++) {
    let count = 0;
    let emptyCell = null;
    for (let row = 0; row < boardSize; row++) {
      if (gameBoard[row][col] === player) {
        count++;
      } else if (gameBoard[row][col] === null) {
        emptyCell = [row, col];
      }
    }
    if (count === boardSize - 1 && emptyCell) {
      return emptyCell;
    }
  }

  // Check diagonals
  let count = 0;
  let emptyCell = null;
  for (let i = 0; i < boardSize; i++) {
    if (gameBoard[i][i] === player) {
      count++;
    } else if (gameBoard[i][i] === null) {
      emptyCell = [i, i];
    }
  }
  if (count === boardSize - 1 && emptyCell) {
    return emptyCell;
  }

  count = 0;
  emptyCell = null;
  for (let i = 0; i < boardSize; i++) {
    if (gameBoard[i][boardSize - 1 - i] === player) {
      count++;
    } else if (gameBoard[i][boardSize - 1 - i] === null) {
      emptyCell = [i, boardSize - 1 - i];
    }
  }
  if (count === boardSize - 1 && emptyCell) {
    return emptyCell;
  }

  return null;
}

// Helper function to find a winning move
export function findWinningMove(gameBoard) {
  const winningMove = checkWinningMove(gameBoard, 'Alien');
  return winningMove;
}

// Helper function to find a blocking move
export function findBlockingMove(gameBoard) {
  const blockingMove = checkWinningMove(gameBoard, 'Rocket');
  return blockingMove;
}

const gameBoard = [
  ['Alien', 'Alien', 'Rocket'],
  [null, 'Rocket', 'Rocket'],
  ['Alien', 'Rocket', 'Alien'],
];

const testCase1 = makeIntermediateAIMove(
  gameBoard,
  createAvailableMovesArray,
  generateRandomNumber,
  coordinatesMap
);

console.log(testCase1);
