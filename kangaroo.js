/**
 * Kangaroo 1:
 *  - Posição inicial = 0
 *  - Distância de pulo = 3
 *
 * Kangaroo 2:
 *  - Posição inicial = 4
 *  - Distância de pulo = 2
 *
 */

const x1 = 0;
const v1 = 3;

const x2 = 4;
const v2 = 2;

function kangaroo() {
  if (v1 < v2) {
    return "NO";
  }

  if ((x2 - x1) % (v1 - v2) === 0) {
    return "YES";
  }

  return "NO";
}

console.log(kangaroo());
