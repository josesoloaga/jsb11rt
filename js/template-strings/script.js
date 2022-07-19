"use strict"


//TEMPLATE STRING
let nombre = "Jose"

let edad = 37;

let miString = "Me llamo"  + nombre + "y tengo " + edad +" años."

console.log (miString)

//se inyecta codigo js con ${codigo}
//Se escriben con comillas francesas ``
let miTemplateString =  `Me llamo ${nombre} y tengo ${edad} años`

console.log (miTemplateString)
