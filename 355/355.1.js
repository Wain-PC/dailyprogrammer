const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const rotate = (n) => {
  const slice = alphabet.slice(0, n);
  return alphabet.slice(n).concat(slice);
};

const getCodeString = (keyWord, length) => {
  const keyLength = keyWord.length;
  if (!keyLength) {
    return '';
  }
  return keyWord.repeat(Math.ceil(length / keyLength));
};

const encode = (keyWord, input) => {
  const codeString = getCodeString(keyWord, input.length);
  return input.split('').map((letter, index) => {
    const rotatedAlphabet = rotate(alphabet.indexOf(letter));
    return rotatedAlphabet[alphabet.indexOf(codeString.charAt(index))];
  }).join('');
};

const decode = (keyWord, encodedInput) => {
  const codeString = getCodeString(keyWord, encodedInput.length);
  return encodedInput.split('').map((letter, index) => {
    const rotatedAlphabet = rotate(alphabet.indexOf(codeString.charAt(index)));
    return alphabet[rotatedAlphabet.indexOf(letter)];
  }).join('');
};

module.exports = { encode, decode };
