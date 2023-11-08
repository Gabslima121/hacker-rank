const points = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
const points2 = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingBestAndWorseRecords(points) {
  let highestScore = [];
  let lowestScore = [];
  let highestScorePoints = 0;
  let lowestScorePoints = 0;

  for (let i = 0; i < points.length; i++) {
    if (i === 0) {
      highestScorePoints = points[i];
      lowestScorePoints = points[i];
    }

    if (points[i] > highestScorePoints) {
      highestScorePoints = points[i];
      highestScore.push(points[i]);
    }

    if (points[i] < lowestScorePoints) {
      lowestScorePoints = points[i];
      lowestScore.push(points[i]);
    }
  }

  return [highestScore.length, lowestScore.length];
}

console.log(breakingBestAndWorseRecords(points2));
