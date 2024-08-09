module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const pairs = Object.fromEntries(bracketsConfig);

  for (const char of str) {
    if (pairs[char]) {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
