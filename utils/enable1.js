const { readFile } = require('fs');
const { EOL } = require('os');

const url = './utils/enable1.txt';

const string = () => new Promise((resolve, reject) => {
  readFile(url, (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(data.toString('utf-8'));
  });
});

const array = async () => {
  const data = await string();
  return data.split(EOL);
};
const object = async () => {
  const data = await array();
  return data.reduce((obj, str) => {
    obj[str] = true; // eslint-disable-line no-param-reassign
    return obj;
  }, {});
};

const tree = async () => {
  const fn = (str, obj) => {
    if (!str.length) {
      obj.end = true; // eslint-disable-line no-param-reassign
      return;
    }
    const letter = str[0];
    if (!obj[letter]) {
      obj[letter] = {}; // eslint-disable-line no-param-reassign
    }
    fn(str.substr(1), obj[letter]);
  };
  const data = await array();
  return data.reduce((obj, str) => {
    fn(str, obj); // eslint-disable-line no-param-reassign
    return obj;
  }, {});
};

module.exports = {
  string, array, object, tree,
};
