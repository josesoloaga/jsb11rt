"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

/*



*/
//Estructura de Datos
const sinRepes = new Set(names);

let resultado = [...sinRepes];

console.log(resultado);

function quitarRepes(Array) {
  const nuevoarray = new Set(Array);
  return nuevoarray;
}

console.log(quitarRepes(names));
