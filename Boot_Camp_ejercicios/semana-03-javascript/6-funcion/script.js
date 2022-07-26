"use strict";

let password = Math.round(Math.random() * 100);

console.log(password);

let resultado = prompt("Introduce un numero del 1 al 100",);
let resul = Number(resultado);
console.log(resul);

if (resul === password) {
  alert("Has acertado");
}else{
  alert("Has fallado!.. Prueba otea vez")
}
