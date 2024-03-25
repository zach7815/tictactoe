export const handleReset = (
  gameWin,
  setScores,
  setDifficulty,
  setGameBoard,
  setRoundDone,
  setGameStart,
  setCurrentPlayer
) => {
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
  setDifficulty(' 2 player mode');
};
