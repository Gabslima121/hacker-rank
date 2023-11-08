const a = [2, 4];
const b = [16, 32, 96];

function teste() {
  let matches = 0;

  for (let i = 1; i <= b[0]; i++) {
    const multipleOfA = a.reduce((m, e) => m && i % e == 0, true);
    const factorOfB = b.reduce((m, e) => m && e % i == 0, true);
    matches += multipleOfA && factorOfB ? 1 : 0;
  }

  return matches;
}

console.log(teste());
