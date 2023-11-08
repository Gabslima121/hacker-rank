/**
 * Primeiro input sao comeco da casa do Sam e final da casa do Sam começo(s) = 7, final(t) = 11;
 * Segundo input localização das arvores apple(a) = posicao 5, orange(b) = posicao 15;
 * quantidade de apples (m) = 3, orange (n) = 2;
 * distancia de cada apple que caiu em relacao a posicao da arvore = [-2, 2, 1];
 * distancia de cada orange que caiu em relacao a posicao da arvore = [5, -6];
 */

const s = 7; //Inicio da casa do Sam
const t = 11; //Final da casa do Sam
const a = 5; //Localização da arvore de maçã
const b = 15; // Localização da arvore de laranja
const apples = [-2, 2, 1]; // Onde as maçãs cairam em relacao a (a)
const oranges = [5, -6]; // Onde as larangas cairam em relacao a (b)

function countApplesAndOranges() {
  let fallenOrangesSam = 0;
  let fallenApplesSam = 0;
  let orangeLocations = [];
  let appleLocations = [];
  let orange = 0;
  let apple = 0;

  apples.forEach((item) => {
    apple = a + item;
    appleLocations.push(apple);

    if (apple >= 7 && apple <= 11) {
      fallenApplesSam++;
    }
  });

  oranges.forEach((item) => {
    orange = b + item;
    orangeLocations.push(orange);

    if (orange >= 7 && orange <= 11) {
      fallenOrangesSam++;
    }
  });

  console.log(fallenApplesSam);
  console.log(fallenOrangesSam);
}

countApplesAndOranges();
