//Numero aleatorio del 0 al 1
Math.random();
//mostrarlo por consola
console.log(Math.random());
//definir una variable
let miVariable = 1;
let miVariable1 = 10 + 5;
console.log("");
console.log(miVariable);
console.log(miVariable1);
//tipoVar nombre = valor ;

/*
Tambien pueden ser:
    const  (no pueden cambiarse)
    const miVariablre = 10;
    */

///TIPOS DE DATOS

// string, numeros, booleanos(en consola salen em azul),
//undefined, null

if (false == true) {
  console.log("es correcto");
} else {
  console.log("no es correcto");
}

let nombre = "Jose";
let edad = 37;
let mayor = " es mayor de edad ";
let menor = " es  menor de edad";

if (edad >= 18) {
  console.log(nombre + mayor);
} else {
  console.log(nombre + menor);
}

//SWITCH

let heroes = "hercules";

switch (heroes) {
  case "hercules":
    console.log(heroes + " era griego");
    break;

  case "leonidas":
    console.log(heroes + " era espartano");
    break;

  default:
    console.log("no conozco a ese heroe...");
    break;
}

let guiso = "alubias";

switch (guiso) {
  case "patatas":
    console.log(" Puedes hacer marmite");
    break;
  case "alubias":
    console.log(" Puedes hacer cocido");
    break;

  default:
    console.log(" no conozco ese ingrediente...");
    break;
}

for (let i = 0; i <= 100; i += 10) {
  console.log(i);
}
for (let i = 50; i >= 20; i--) {
  console.log(i);
}

console.log("");

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i % 2 == 0) {
    console.log("es par");
  } else {
    console.log("es impar");
  }
}
