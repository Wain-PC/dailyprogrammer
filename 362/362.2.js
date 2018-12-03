const rotateRight = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const ret = [];
  for (let i = 0; i < cols; i++) {
    ret[i] = [];
    for (let j = 0; j < rows; j++) {
      ret[i][j] = matrix[rows - j - 1][i];
    }
  }
  return ret;
};

const layoutCreator = (text, columns, rows) => {
  const textArr = text
    .replace(/[^a-zA-Z]/g, '')
    .toUpperCase()
    .split('');
  return Array(rows).fill(null).map((item, row) => {
    const start = row * columns;
    const arr = Array(columns).fill('X');
    const slice = textArr.slice(start, start + columns);
    return arr.map((c, i) => slice[i] || c);
  });
};
const solve = (input) => {
  const re = /"(.*?)" \((\d+), (\d+)\) (clockwise|counter-clockwise)/i;
  const [, text, col, r, rot] = input.match(re);
  const columns = +col;
  const rows = +r;
  const clockwise = rot === 'clockwise';
  const matrix = layoutCreator(text, columns, rows);
  let rotated = matrix;
  let out = [];
  while (rotated.length) {
    let row;
    // Should rotate left here.
    [row, ...rotated] = rotateRight(rotated);
    out = out.concat(row);
  }
  return out.join('');
};

module.exports = { solve };
