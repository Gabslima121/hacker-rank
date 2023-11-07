const arr = [5, 5, 5, 5, 5];

function minMaxSum() {
  let maxSum = 0;
  let minSum = 0;

  let biggestValue = Math.max(...arr);
  let minimunValue = Math.min(...arr);

  if (biggestValue === minimunValue) {
    arr.pop();

    arr.map((item) => {
      minSum += item;
      maxSum += item;
    });
  }

  arr.map((item) => {
    if (item !== biggestValue) {
      minSum += item;
    }

    if (item !== minimunValue) {
      maxSum += item;
    }
  });

  console.log(`${minSum} ${maxSum}`);
}

minMaxSum();
