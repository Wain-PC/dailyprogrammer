const layoutCreator = (text, columns, rows, startClockwise) => {
  const textArr = text
    .replace(/[^a-zA-Z]/g, '')
    .toUpperCase()
    .split('');
  let x = 0;
  const matrix = Array(rows).fill(null).map((item, i) => {
    const start = i * columns;
    return textArr.slice(start, start + columns);
  });
  let xl = columns - 1;
  let y = 0;
  let yl = rows - 1;
  const out = [];

  const down = () => {
    // Print the last column (down)
    for (let i = y; i <= yl; i++) {
      out.push(matrix[i][xl] || 'X');
    }
    xl--;
  };

  const up = () => {
    // Print the first column (up)
    for (let i = yl; i >= y; i--) {
      out.push(matrix[i][x] || 'X');
    }
    x++;
  };

  const left = () => {
    // Print the last row <=
    for (let i = xl; i >= x; i--) {
      out.push(matrix[yl][i] || 'X');
    }
    yl--;
  };

  const right = () => {
    // Print the first row =>
    for (let i = x; i <= xl; i++) {
      out.push(matrix[y][i] || 'X');
    }
    y++;
  };

  const check = () => out.length === rows * columns;
  while (true) {
    down();
    if (check()) {
      break;
    }
    left();
    if (check()) {
      break;
    }
    up();
    if (check()) {
      break;
    }
    right();
    if (check()) {
      break;
    }
  }

  return out.join('');
};
const solve = (input) => {
  const re = /"(.*?)" \((\d+), (\d+)\) (clockwise|counter-clockwise)/i;
  const [, text, col, r, rot] = input.match(re);
  const columns = +col;
  const rows = +r;
  const clockwise = rot === 'clockwise';
  return layoutCreator(text, columns, rows, clockwise);
};

module.exports = { solve };
