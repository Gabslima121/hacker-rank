const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let positiveOcc = 0;
  let negativeOcc = 0;
  let zerosOcc = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveOcc++;
    } else if (arr[i] < 0) {
      negativeOcc++;
    } else {
      zerosOcc++;
    }
  }

  positiveOcc = positiveOcc / arr.length;
  negativeOcc = negativeOcc / arr.length;
  zerosOcc = zerosOcc / arr.length;
  console.log(
    `${positiveOcc.toFixed(6)}\n${negativeOcc.toFixed(6)}\n${zerosOcc.toFixed(
      6
    )}`
  );
}

plusMinus(arr);
