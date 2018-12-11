const randomMatrix = (size) => {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = Math.round(Math.random());
    }
  }
  return matrix;
};

const check = (matrix) => {
  const { length } = matrix;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      const topLeft = matrix[i][j];
      for (let ii = i + 1; ii < length; ii++) {
        const bottomLeft = matrix[ii][j];
        for (let jj = j + 1; jj < length; jj++) {
          const topRight = matrix[i][jj];
          const bottomRight = matrix[ii][jj];
          const sum = topLeft + bottomLeft + topRight + bottomRight;
          if (sum === 0 || sum === 4) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

// eslint-disable-next-line no-console
const print = matrix => console.log(matrix.reduce((out, row) => `${out}${row.join(' ')}\n`, ''));

const solve = (n) => {
  let matrix;
  let result = false;
  do {
    matrix = randomMatrix(n);
    result = check(matrix);
  } while (!result);
  return matrix;
};

module.exports = { solve, check, print };
