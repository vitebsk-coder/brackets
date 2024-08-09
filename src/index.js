module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const brackets = Object.fromEntries(bracketsConfig.map(([key, value]) => [value, key]));

  for (const currect of str) {
    if (currect in brackets) {
      if (brackets[currect] !== stack.pop()) return false;
    } else {
      stack.push(currect)
    }
  }
  return !stack.length;
}