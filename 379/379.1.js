const brackets = [
  { cap: 10000, rate: 0 },
  { cap: 30000, rate: 0.1 },
  { cap: 100000, rate: 0.25 },
  { cap: 100000000, rate: 0.4 },
];

const solve = (sumToTax) => {
  let sumLeft = sumToTax;
  let tax = 0;

  for (let i = 0; i < brackets.length; i++) {
    const { cap, rate } = brackets[i];
    const prevCap = i > 0 ? brackets[i - 1].cap : 0;
    const sum = (cap - prevCap);

    if (sumLeft > sum) {
      tax += sum * rate;
      sumLeft -= sum;
    } else {
      tax += sumLeft * rate;
      break;
    }
  }

  return Math.floor(tax);
};

const bonus1 = (taxRate) => {
  if (taxRate === 0) {
    return 0;
  }

  const lastBracket = brackets[brackets.length - 1];

  if (taxRate >= lastBracket.rate) {
    return NaN;
  }

  const minStart = 0;
  const maxStart = lastBracket.cap;

  const binary = (min, max) => {
    if (max - min <= 1) {
      return NaN;
    }

    const middle = Math.round((max + min) / 2);
    const solveTax = solve(middle);
    const expectedTax = Math.floor(taxRate * middle);
    if (solveTax > expectedTax) {
      return binary(min, middle);
    }

    if (solveTax < expectedTax) {
      return binary(middle, max);
    }

    return middle;
  };

  return binary(minStart, maxStart);
};


module.exports = { solve, bonus1 };
