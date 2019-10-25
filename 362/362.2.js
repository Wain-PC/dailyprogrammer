const transpose = matrix => {
  if (!matrix[0]) {
    return matrix;
  }
  return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
};
const reverseRow = matrix => matrix.map(row => row.reverse());
const rotateRight = matrix => reverseRow(transpose(matrix));
const rotateLeft = matrix => transpose(reverseRow(matrix));

const layoutCreator = (text, columns, rows) => {
  const textArr = text
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase()
    .split("");
  return Array(rows)
    .fill(null)
    .map((item, row) => {
      const start = row * columns;
      const arr = Array(columns).fill("X");
      const slice = textArr.slice(start, start + columns);
      return arr.map((c, i) => slice[i] || c);
    });
};

const solve = input => {
  const re = /"(.*?)" \((\d+), (\d+)\) (clockwise|counter-clockwise)/i;
  const [, text, col, r, rot] = input.match(re);
  const columns = +col;
  const rows = +r;
  const clockwise = rot === "clockwise";
  let rotated = layoutCreator(text, columns, rows);
  let out = "";
  // Clockwise - turn then read (slice first row and concat it to output)
  if (clockwise) {
    while (rotated.length) {
      const [row, ...rest] = rotateLeft(rotated);
      out += row.join("");
      rotated = rest;
    }
    // Counterclockwise - read then turn (then slice and add reversed first row to output)
  } else {
    while (rotated.length) {
      const [row, ...rest] = rotated;
      rotated = rotateRight(rest);
      out += row.reverse().join("");
    }
  }

  return out;
};

module.exports = { solve };
