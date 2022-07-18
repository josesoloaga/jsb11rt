"use strict"

console.log("hola mundo, esto furrula!")

// CONCATENACION o SUMA (+)

let numA = 7;
let numB = 5
console.log ("a"+"b")
console.log(numA+numB)


//SI hay string en un calculo, convierte la operacion en string desde el string

console.log(2+2+"2"+2+2)


//RESTA (-)

console.log(numA-numB);
console.log(8-"4")

//MULTIPLICACION (*)

//DIVISION (/)

//MODULO (%) "el resto de la division"
console.log("MODULO")
console.log(numA % numB)


//POTENCIA (**)
console.log("POTENCIA")
console.log(numA ** numB)

//OPERADORES DE AUTO ASIGNACION

let puntos = 5;

puntos = puntos +1


console.log("OPERADORES DE AUTO-ASIGNACION")
console.log(puntos)

//DE AUMENTO (++) "aumenta de 1 en 1"

puntos++

console.log(puntos)

puntos++
console.log("AUMENTO")
console.log(puntos)


//DE DECREMENTO (--)  "disminuye de 1 en 1"

puntos--
console.log("DECREMENTO")
console.log(puntos)

//RESTA (-=)

puntos -=2;
console.log("RESTA")
console.log(puntos)

//MULTIPLICACION (*=)
puntos *= 3;

console.log("MULTIPLICACION")
console.log(puntos)


//DIVISION (/=)
puntos /= 3;
console.log("DIVISION")
console.log(puntos)

//MODULO (%=)
puntos %= 2;
console.log("MODULO")
console.log(puntos)

//ORDEN DE PRIORIDAD
/// El mismo que en mates: Potencias, Multiplicaciones - Divisiones, SUmas y Restas. En caso de empate de izquierda a derecha.

console.log(4+3*2)
console.log((4+3)*2)


