const { readFile } = require("fs");
const { EOL } = require("os");

const url = "./utils/enable1.txt";

const string = (path = url) =>
  new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data.toString("utf-8"));
    });
  });

const array = async path => {
  const data = await string(path);
  return data.split(EOL).filter(l => l);
};
const object = async () => {
  const data = await array();
  return data.reduce((obj, str) => {
    obj[str] = true; // eslint-disable-line no-param-reassign
    return obj;
  }, {});
};

const tree = async path => {
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
  const data = await array(path);
  return data.reduce((obj, str) => {
    fn(str, obj); // eslint-disable-line no-param-reassign
    return obj;
  }, {});
};

module.exports = {
  string,
  array,
  object,
  tree
};
