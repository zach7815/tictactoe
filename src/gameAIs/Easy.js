import { createAvailableMovesArray, coordinatesMap } from './ManageAIMoves.js';

export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const handleEasyAi = (gameboard) => {
  const movesAvailable = createAvailableMovesArray(gameboard);
  const randomIndex = generateRandomNumber(0, movesAvailable.length - 1);
  const chosenIndex = movesAvailable[randomIndex];
  const compChoice = coordinatesMap.get(chosenIndex);
  return compChoice;
};
