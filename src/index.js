module.exports = function check(str, bracketsConfig) {
  let length = str.length / 2
  for (let i = 0; i < length; i++) {
    console.log(i)
    bracketsConfig.forEach(arr => {
      str = str.replace(`${arr[0]}${arr[1]}`, '')
      console.log(str)
    });
  }
  return !str.length
}