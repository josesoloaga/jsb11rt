"use strict"

//Crea 2 variables: nombre y edad
//Crea un condicional que diga por consola si es mayor de edad o no.
//Al salir por consola indicara tambien el nombre (usando la variable)

/*
ejem:

let nombre = "Jose"

let edad = 37;

"Jose es mayor de edad"

*/


let nombre = "Jose";
let edad = 19;
let mayor = " Mayor de edad"
let menor = " Menor de edad"


if (edad >= 18){
console.log (nombre + mayor);
} else if (edad <= 12){
    console.log(nombre + menor + " y es un niño")
} else if (edad <= 15, edad > 12){
    console.log(nombre + menor +" y es un adolescente")
}