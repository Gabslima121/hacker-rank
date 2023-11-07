const arr = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
const arr2 = [3, 2, 1, 3];

function birthdayCakeCandles(candles = []) {
  const maxValue = Math.max(...candles);
  let newArr = [];

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxValue) {
      newArr.push(candles[i]);
    }
  }

  return newArr.length;
}

console.log(birthdayCakeCandles(arr));
