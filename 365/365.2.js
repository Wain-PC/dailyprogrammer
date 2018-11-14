const { EOL } = require('os');

const filter = input => input.filter(s => s);
const split = input => filter(input.split(/\s/));

const getUsers = (input) => {
  // Step 1. Split the input into lines.
  const [headers] = filter(input.split(EOL));
  return split(headers);
};

const parse = (input) => {
  // Step 1. Split the input into lines.
  const [, ...data] = filter(input.split(EOL));
  const output = [];
  data.forEach((row) => {
    const [resource, ...values] = split(row);
    values.forEach((value, index) => {
      if (!output[index]) {
        output[index] = {};
      }
      output[index][resource] = +value;
    });
  });
  return output;
};

const calculateProfit = (revenue, expenses, commission) => revenue
  .map((r, i) => {
    const e = expenses[i];
    return Object.keys(r)
      .reduce((profit, resource) => profit + (commission * Math.max(0, r[resource] - e[resource])),
        0);
  })
  .map(profit => Math.round((profit + 0.00001) * 100) / 100);

const makeTable = (users, commissions) => {
  const initialSpaces = 12;
  const header = `${' '.repeat(initialSpaces)}${users.join(' ')}`;
  let content = 'Commission ';
  users.forEach((user, i) => {
    const commissionStrLength = commissions[i].toString().length;
    const userNameLength = user.toString().length;
    const spacesRequired = userNameLength - commissionStrLength;
    content += ` ${' '.repeat(spacesRequired)}${commissions[i]}`;
  });
  return `${header}${EOL}${content}${EOL}`;
};

const solve = (input, commission = 0.062) => {
  // Step 1. Split Revenue and Expenses matrices.
  // Step 2. Parse each raw input into a preferrable data structure.
  const [revenueInput, expensesInput] = filter(input.split(/Revenue|Expenses/));
  const users = getUsers(revenueInput);
  const revenue = parse(revenueInput);
  const expenses = parse(expensesInput);
  const commissions = calculateProfit(revenue, expenses, commission);
  return makeTable(users, commissions);
};

module.exports = { solve };
