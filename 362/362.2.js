const layoutCreator = (text, columns, rows, clockwise) => {
  const textArr = text
    .replace(/[^a-zA-Z]/g, '')
    .toUpperCase()
    .split('');
  let x = 0;
  let xl = columns;
  let y = 0;
  let yl = rows;
  const out = [];
  const c = columns - 1;

  while (x < xl && y < yl) {
    let i;
    let position;
    // Print the last column (down)
    for (i = y; i < yl; i++) {
      position = (i * c) - x;
      out.push(textArr[position]);
    }
    xl--;

    if (x < xl) {
      // Print the last row <=
      for (i = xl - 1; i > x; i--) {
        position = (yl * c) - i;
        out.push(textArr[position]);
      }
      yl--;
    }

    if (y < yl) {
      // Print the first column (up)
      for (i = yl - 1; i > y; i--) {
        position = (i * c) - i;
        out.push(textArr[position]);
      }
      x++;
    }

    // Print the first row =>
    for (i = x; i < xl; i++) {
      position = (y * c) + i;
      out.push(textArr[position]);
    }
    y++;
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
