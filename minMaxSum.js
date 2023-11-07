const arr = [5, 5, 5, 5, 5];

function minMaxSum() {
  let maxSum = 0;
  let minSum = 0;

  let biggestValue = Math.max(...arr);
  let minimunValue = Math.min(...arr);

  arr.map((item) => {
    if (item !== biggestValue && biggestValue !== minimunValue) {
      minSum += item;
    }

    if (item !== minimunValue && biggestValue !== minimunValue) {
      maxSum += item;
    }

    if (biggestValue === minimunValue) {
      maxSum = maxSum + item - item;
      minSum = item;
    }
  });

  console.log(`${maxSum}`);
}

minMaxSum();
