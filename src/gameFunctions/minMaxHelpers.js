
const flatten2DArray = (matrix) => {
  return matrix.flat(1);
};

const assignIndex = (flatBoard) => {
  return flatBoard.map((cell, index) => {
    if (cell === null) {
      return (cell = index);
    } else {
      return cell;
    }
  });
};

export const convertBoard = (matrix) => {
  const flatBoard = flatten2DArray(matrix);
  return assignIndex(flatBoard);
};

