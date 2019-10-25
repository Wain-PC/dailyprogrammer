const { readFile } = require("fs");
const { resolve } = require("path");

const get = path =>
  new Promise((res, rej) => {
    readFile(
      resolve(path),
      {
        encoding: "utf-8"
      },
      (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      }
    );
  });

module.exports = { get };
