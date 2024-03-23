import { useState } from 'react';
import { Tile } from './Tile.js';

export const Gameboard = ({ gameBoard }) => {
  const [fillStatus, setFillStatus] = useState({ value: null });

  return (
    <>
      {gameBoard.map((row, rowIndex) => (
        <div className="game-board" key={rowIndex}>
          {row.map((cell, colIndex) => {
            const id = rowIndex * gameBoard.length + colIndex + 1;
            return (
              <Tile
                key={colIndex}
                id={id}
                fill={cell}
                fillStatus={fillStatus}
                setFillStatus={setFillStatus}
                rowIndex={rowIndex}
                colIndex={colIndex}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};
