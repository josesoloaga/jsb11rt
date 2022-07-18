"use strict";

//crea un bucle que vaya de 0 a 100
for (let i = 0; i <= 100; i += 10) {
  console.log(i);
}

console.log("");

//crear un bucle que vaya de 50 a 20 de uno en uno

for (let i = 50; i >= 20; i--) {
  console.log(i);
}

console.log("");

//Crea un bucle que recorra los numeros del 1 al 10 incluidos y que diga si son pares o impares

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " es PAR");
  } else {
    console.log(i + " es IMPAR");
  }
}
