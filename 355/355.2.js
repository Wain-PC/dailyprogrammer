const pumpkinPie = ({ pumpkin, apples, eggs, milk, sugar }, n = 1) => ({
  pumpkin: pumpkin - n,
  apples,
  eggs: eggs - 3 * n,
  milk: milk - 4 * n,
  sugar: sugar - 3 * n
});
const applePie = ({ pumpkin, apples, eggs, milk, sugar }, n = 1) => ({
  pumpkin,
  apples: apples - n,
  eggs: eggs - 4 * n,
  milk: milk - 3 * n,
  sugar: sugar - 2 * n
});
const canBake = ingredients =>
  Object.keys(ingredients).every(i => ingredients[i] >= 0);
const bakeN = (cookFn, ingredients, n) => cookFn(ingredients, n);

const solve = (pumpkin, apples, eggs, milk, sugar) => {
  const ingredients = {
    pumpkin,
    apples,
    eggs,
    milk,
    sugar
  };
  let max = 0;
  // Simple `check all possible combinations` strategy`, save a maximum total value and return it.
  for (
    let i = 0, a = bakeN(applePie, ingredients, i);
    canBake(a);
    i++, a = bakeN(applePie, ingredients, i)
  ) {
    for (
      let j = 0, b = bakeN(pumpkinPie, a, j);
      canBake(b);
      j++, b = bakeN(pumpkinPie, a, j)
    ) {
      const current = i + j;
      if (current > max) {
        max = current;
      }
    }
  }
  return max;
};

module.exports = solve;
