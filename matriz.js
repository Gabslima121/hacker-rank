const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function sumArr(arr) {
  let sumMainDiagonal = 0;
  let sumSecundaryDiagonal = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    sumMainDiagonal += arr[i][i];
    sumSecundaryDiagonal += arr[i][arr.length - 1 - i];
  }

  return (result = Math.abs(sumMainDiagonal - sumSecundaryDiagonal));
}

console.log(sumArr(arr));
