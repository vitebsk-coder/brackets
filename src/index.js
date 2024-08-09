module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const pairs = Object.fromEntries(bracketsConfig.map(([key, value]) => [value, key]));

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if (isClosedBracket(current)) {
      if (pairs[current] !== stack.pop()) return false
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}

function isClosedBracket(ch) {
  return [")", "]", "}"].indexOf(ch) > -1;
}

