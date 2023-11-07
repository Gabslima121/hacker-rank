function stairCase() {
  const stairSize = 6;
  const blankSpace = " ";
  const hash = "#";
  let stair;

  for (let i = 1; i <= stairSize; i++) {
    const spaces = blankSpace.repeat(stairSize - i);
    const hashes = hash.repeat(i);

    stair = spaces + hashes;
    console.log(`${stair}`);
  }
}

stairCase();
