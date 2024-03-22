import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import './css/App.css';
import { Button } from '@mui/material';
import { Gameboard } from './components/GameBoard.js';
import { WinState } from './components/WinState.js';
import { difficulties } from './gameFunctions/gameDifficulties.js';
import { FullWidthTabs } from './MuiComponents/FullWidthTabs.js';
import { generateRandomNumber, handleEasyAi } from './gameAIs/Easy.js';
import { LoseState } from './components/LoseState.js';
import {
  coordinatesMap,
  createAvailableMovesArray,
  placeComputerMove,
} from './gameAIs/ManageAIMoves.js';
import {
  handleWin,
  isTurnStillPossible,
  winStrikeThrough,
} from './gameFunctions/gameFuncts.js';
import GameContext from './context/GameContext.js';

import { makeIntermediateAIMove } from './gameAIs/Intermediate.js';
import { bestSpot } from './gameAIs/minMaxai.js';

function App() {
  const [difficulty, setDifficulty] = useState('2 player mode');
  const [gameStart, setGameStart] = useState(true);
  const [roundDone, setRoundDone] = useState(false);
  const [aiMoveMade, setAiMoveMade] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState('player 1');
  const [gameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [availableMoves, setAvailableMoves] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  const [gameBoardInteractive, setGameBoardInteractive] = useState(false);
  const timeoutRef = useRef(null);
  const [areMovesPossible, setAreMovesPossible] = useState(true);
  const [gameWin, setGameWin] = useState({ direction: '', winner: 'Draw' });
  const [scores, setScores] = useState({ Rockets: 0, Draws: 0, Aliens: 0 });

  const handleEndGame = useCallback(() => {
    if (gameWin.winner === 'Rocket') {
    } else if (gameWin.winner === 'Alien') {
    } else if (gameWin.winner === 'Draw' && !areMovesPossible) {
    } else {
    }
  }, [areMovesPossible, gameWin.winner]);

  const handleClick = () => {
    setGameStart(false);
    setGameBoardInteractive(true);
  };

  const handleReset = () => {
    if (gameWin.winner === 'Rocket') {
      setScores((prevScores) => ({
        ...prevScores,
        Rockets: prevScores.Rockets + 1,
      }));
    }
    if (gameWin.winner === 'Alien') {
      setScores((prevScores) => ({
        ...prevScores,
        Aliens: prevScores.Aliens + 1,
      }));
    } else if (gameWin.winner === 'Draw') {
      setScores((prevScores) => ({
        ...prevScores,
        Draws: prevScores.Draws + 1,
      }));
    }

    setGameBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);

    setRoundDone(false);
    setGameStart(true);
    setCurrentPlayer('player 1');

    const strike = document.querySelector('#strike');
    if (strike) {
      const classList = strike.classList;
      while (classList.length > 0) {
        classList.remove(classList.item(0));
      }
      classList.add('strike', 'hidden');
      strike.style.borderColor = 'greenyellow';
    }
  };

  useEffect(() => {
    if (!isTurnStillPossible(gameBoard)) {
      setRoundDone(true);
    }
  }, [gameBoard]);

  useEffect(() => {
    setAreMovesPossible(isTurnStillPossible(gameBoard));
    const winResult = handleWin(gameBoard);
    setGameWin(winResult);

    if (winResult.winner !== 'Draw') {
      setRoundDone(true);
      handleEndGame();
      winStrikeThrough(winResult, gameBoard);
    }
  }, [gameBoard, handleEndGame, areMovesPossible, setRoundDone, roundDone]);

  const memoizedHandleCellClick = useMemo(() => {
    return function handleCellClick(row, col) {
      if (!gameBoardInteractive || roundDone) {
        return;
      }

      const cellValue = gameBoard[row][col];
      if (cellValue === null) {
        const newGameBoard = [...gameBoard];
        newGameBoard[row][col] =
          currentPlayer === 'player 1' ? 'Rocket' : 'Alien';
        setGameBoard(newGameBoard);
        setAvailableMoves(createAvailableMovesArray(gameBoard));
        setCurrentPlayer(
          currentPlayer === 'player 1' ? 'player 2' : 'player 1'
        );
      }
    };
  }, [
    gameBoardInteractive,
    roundDone,
    gameBoard,
    currentPlayer,
    setGameBoard,
    setAvailableMoves,
    setCurrentPlayer,
  ]);

  useEffect(() => {
    if (
      difficulty === 'Easy' &&
      currentPlayer === 'player 2' &&
      areMovesPossible === true &&
      roundDone !== true &&
      gameWin.winner !== 'Rocket' &&
      !aiMoveMade
    ) {
      setGameBoardInteractive(false);
      timeoutRef.current = setTimeout(() => {
        let compChoice = handleEasyAi(
          availableMoves,
          generateRandomNumber,
          coordinatesMap
        );

        setGameBoard((prevGameBoard) =>
          placeComputerMove(prevGameBoard, compChoice)
        );

        setCurrentPlayer('player 1');
        setGameBoardInteractive(true);
        setAiMoveMade(true); // Mark AI move as made
      }, 3000);
    }
  }, [
    currentPlayer,
    difficulty,
    areMovesPossible,
    roundDone,
    gameWin,
    aiMoveMade,
    availableMoves,
  ]);

  useEffect(() => {
    if (
      difficulty === 'Intermediate' &&
      currentPlayer === 'player 2' &&
      areMovesPossible === true &&
      roundDone !== true &&
      gameWin.winner !== 'Rocket'
    ) {
      setGameBoardInteractive(false);
      timeoutRef.current = setTimeout(() => {
        let compChoice = makeIntermediateAIMove(
          gameBoard,
          createAvailableMovesArray,
          generateRandomNumber,
          coordinatesMap
        );
        console.log(compChoice);

        setGameBoard((prevGameBoard) =>
          placeComputerMove(prevGameBoard, compChoice)
        );

        setCurrentPlayer('player 1');
        setGameBoardInteractive(true);
      }, 3000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [
    difficulty,
    currentPlayer,
    gameBoard,
    availableMoves,
    roundDone,
    areMovesPossible,
    gameWin,
  ]);

  useEffect(() => {
    if (
      difficulty === 'Easy' &&
      currentPlayer === 'player 2' &&
      areMovesPossible === true &&
      roundDone !== true &&
      gameWin.winner !== 'Rocket'
    ) {
      setGameBoardInteractive(false);
      timeoutRef.current = setTimeout(() => {
        let compChoice = handleEasyAi(
          availableMoves,
          generateRandomNumber,
          coordinatesMap
        );

        setGameBoard((prevGameBoard) =>
          placeComputerMove(prevGameBoard, compChoice)
        );

        setCurrentPlayer('player 1');
        setGameBoardInteractive(true);
      }, 3000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [
    difficulty,
    currentPlayer,
    gameBoard,
    availableMoves,
    roundDone,
    areMovesPossible,
    gameWin,
  ]);

  useEffect(() => {
    if (
      difficulty === 'Impossible' &&
      currentPlayer === 'player 2' &&
      areMovesPossible === true &&
      roundDone !== true &&
      gameWin.winner !== 'Rocket'
    ) {
      setGameBoardInteractive(false);
      timeoutRef.current = setTimeout(() => {
        let compChoice = bestSpot(gameBoard, 'Alien');
        console.log(compChoice);

        setGameBoard((prevGameBoard) =>
          placeComputerMove(prevGameBoard, compChoice)
        );

        setCurrentPlayer('player 1');
        setGameBoardInteractive(true);
      }, 3000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [
    difficulty,
    currentPlayer,
    gameBoard,
    availableMoves,
    roundDone,
    areMovesPossible,
    gameWin,
  ]);

  return (
    <>
      <div className="background"></div>
      <header>
        <h1>Tic Tac Toe</h1>
        <h4> Rockets vs Aliens</h4>
        <h3>{currentPlayer}'s turn</h3>
        <div className="scores">
          <span>Rockets: {scores.Rockets}</span>{' '}
          <span>Draws: {scores.Draws}</span>{' '}
          <span>Aliens: {scores.Aliens}</span>
        </div>
      </header>

      <div className="container">
        <div className="game-board-wrapper">
          <GameContext.Provider value={{ memoizedHandleCellClick }}>
            <Gameboard
              gameBoard={gameBoard}
              handleCellClick={memoizedHandleCellClick}
              disabled={!gameBoardInteractive}
              setRoundDone={setRoundDone}
            />
          </GameContext.Provider>
          <div id="strike" className="strike hidden">
            {' '}
          </div>
        </div>
      </div>
      {gameWin.winner === 'Rocket' && <WinState />}
      {gameWin.winner === 'Alien' && difficulty === '2 player mode' && (
        <LoseState />
      )}

      {gameStart && <div className="start-blur"></div>}
      {gameStart && (
        <div className="start-game-component">
          <p className="instruction">
            Choose your level then click start to play
          </p>
          <FullWidthTabs
            difficulties={difficulties}
            setDifficulty={setDifficulty}
          />

          <Button
            className="start-button"
            variant="contained"
            onClick={handleClick}
          >
            Start
          </Button>
        </div>
      )}

      {roundDone === true ? (
        <div className="reset">
          <Button variant="contained" onClick={handleReset}>
            Play Again
          </Button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default App;
