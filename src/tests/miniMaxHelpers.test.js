import {  cloneBoard, getWinner } from '../gameFunctions/minMaxHelpers';

import * as testBoards from './testcases/cloneBoardtestCases';

const testCases = Object.values(testBoards).map((originalBoard) => ({
  originalBoard,
  clonedBoard: cloneBoard(originalBoard),
}));

describe('cloneBoard', () => {
  testCases.forEach(({ originalBoard, clonedBoard }) => {
    it('should create a  copy with a different reference', () => {
      expect(clonedBoard).toEqual(originalBoard);
      expect(clonedBoard).not.toBe(originalBoard);
    });
  });
});

describe('getWinner', () => {
  it('should return the correct winner when there is a winning combination', () => {
    const board = [
      ['Rocket', 'Alien', null],
      ['Rocket', 'Alien', null],
      ['Rocket', null, null],
    ];
    expect(getWinner(board)).toBe('Rocket');
  });

  it('should return Rocket, diagonal win', () => {
    const board = [
      ['Rocket', 'Alien', null],
      ['Alien', 'Rocket', 'Alien'],
      [null, null, 'Rocket'],
    ];
    expect(getWinner(board)).toBe('Rocket');
  });

  it('should return Rocket, horizontal win', () => {
    const board = [
      ['Rocket', 'Rocket', 'Rocket'],
      [null, null, null],
      [null, null, null],
    ];
    expect(getWinner(board)).toBe('Rocket');
  });

  it('should return Alien, horizontal win', () => {
    const board = [
      ['Alien', 'Alien', 'Alien'],
      [null, null, null],
      [null, null, null],
    ];
    expect(getWinner(board)).toBe('Alien');
  });

  it('should return Rocket, horizontal win filled board', () => {
    const board = [
      ['Rocket', 'Rocket', 'Rocket'],
      ['Alien', 'Rocket', 'Alien'],
      ['Alien', 'Alien', 'Rocket'],
    ];
    expect(getWinner(board)).toBe('Rocket');
  });

  it('should return Alien, vertical win filled board', () => {
    const board = [
      ['Rocket', 'Rocket', 'Alien'],
      ['Alien', 'Rocket', 'Alien'],
      ['Alien', 'Alien', 'Alien'],
    ];
    expect(getWinner(board)).toBe('Alien');
  });

  it('should return Alien, diagonal', () => {
    const board = [
      ['Alien', null, null],
      [null, 'Alien', null],
      [null, null, 'Alien'],
    ];
    expect(getWinner(board)).toBe('Alien');
  });

  it('should return Alien, reverse diagonal', () => {
    const board = [
      [null, null, 'Alien'],
      [null, 'Alien', null],
      ['Alien', null, null],
    ];
    expect(getWinner(board)).toBe('Alien');
  });

  // game start scenario
  it('should return null when the board is empty', () => {
    const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(getWinner(board)).toBeNull();
  });

  // draw scenarios

  it('should return null as no more moves possible and draw scenario 1', () => {
    const board = [
      ['Rocket', 'Alien', 'Rocket'],
      ['Alien', 'Rocket', 'Alien'],
      ['Alien', 'Rocket', 'Alien'],
    ];
    expect(getWinner(board)).toBeNull();
  });

  it('should return null as no more moves possible and draw scenario 2', () => {
    const board = [
      ['Rocket', 'Alien', 'Rocket'],
      ['Rocket', 'Alien', 'Alien'],
      ['Alien', 'Rocket', 'Alien'],
    ];
    expect(getWinner(board)).toBeNull();
  });
});

