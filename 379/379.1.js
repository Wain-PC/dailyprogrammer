const solve = (sumToTax) => {
  const brackets = [
    { cap: 10000, rate: 0 },
    { cap: 30000, rate: 0.1 },
    { cap: 100000, rate: 0.25 },
    { cap: 100000000, rate: 0.4 },
  ];

  let sumLeft = sumToTax;
  let tax = 0;

  for (let i = 0; i < brackets.length; i++) {
    const { cap, rate } = brackets[i];
    const prevCap = i > 0 ? brackets[i - 1].cap : 0;
    if (sumLeft > cap) {
      const sum = (cap - prevCap);
      tax += sum * rate;
      sumLeft -= sum;
    } else {
      tax += sumLeft * rate;
      break;
    }
  }

  return Math.floor(tax);
};


module.exports = { solve };
