const { parentPort, workerData } = require('worker_threads');

const { solve } = require('./363.2');

const { words, patterns } = workerData;
const solver = word => solve(word, patterns).split('-').length - 1;
const reducer = (countArr, hyphens) => {
  countArr[hyphens]++; // eslint-disable-line no-param-reassign
  return countArr;
};
const result = words.map(solver).reduce(reducer, Array(10).fill(0));
parentPort.postMessage(result);
