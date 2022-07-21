"use strict";

//escribe una funcion que reciba 2 arrays.

/*
let array1 = ["a", "b", "c"];
let array2 = ["a", "b", "c"];
let array3 = ["a", "b", "c"];
let array4 = ["a", "b", "c", "d"];

function misArrays(arraya, arrayb) {
  if (arraya.toString() === arrayb.toString()) {
    return true;
  } else {
    return false;
  }
}

console.log(misArrays(array1, array4));
*/
/*
//si el contenido es exactamente igual. devolvera true, si no, devolvera false

//REPASO EJER IF
let nombre = "jose";
let edad = "18"

if (edad <=18) {
    console.log(nombre +" es menor de edad")

} else {
    console.log(nombre + " es mayor de edad")
}


//REPASO EJER BUCLES

for (let i = 0; i <= 100 ; i += 10 ) {
  console.log(i);   
}

console.log("");

*/

//while
//que genere un numero aleatorio del 1 al 10 y que pare cuando sea par

let randomNum = Math.round(Math.random() * 10)
while (randomNum % 2 === 0) {
  console.log(randomNum)
  console.log()
}

console.log(randomNum)

