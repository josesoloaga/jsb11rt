"use strict";

// OBJETOS
// Son como arrays, pero en vez de posición tienen claves



// Inicializar un objeto vacío

let vacio = {}


// Cada entrada (entry) en un objeto es una pareja clave-valor (key-value). Se separan por comas
/*
let user = {
  nombre: "Zoe",
  edad: 28,
  email: "zoe.porta.garcia@hackaboss.com",

  saludar: function(){console.log("Hola!")},

  coloresFavoritos: ["morado", "azul", "negro"],
  mascota: {
    nombre: "Nymeria",
    especie: "gato",
    color: "azul"
  }
}

console.log(user)

let falsoArray = {
  1: "b",
  0: "a",
  2: "c"
}

let array = ["a", "b", "c"]

console.log(falsoArray)
console.log(array)

console.log(falsoArray[1])


// Leer entradas de un objeto

/// Sintaxis de punto
/// Tiene que ser literal (tengo que conocer el nombre de lo que quiero seleccionar)

console.log(user.nombre)

console.log(user.email)

console.log(user.mascota)

/////// Métodos (funciones dentro de objetos)
user.saludar()

////// Entradas de objetos dentro de objetos

console.log(user.mascota.nombre)


console.log("///")
/// Sintaxis de corchetes


let clave = "nombre"

console.log(user[clave])

console.log(user["nombre"])

////// Métodos
user["saludar"]()


////// Objeto dentro de objeto

console.log(user["mascota"]["nombre"])


// Combinar sintaxis para objetos dentro de objetos

console.log(user["mascota"].nombre)
console.log(user.mascota["nombre"])



console.log("//////////")


// Lectura condicional
/// Si intentetamos leer una propiedad que no existe, nos da undefined
/// Si intentamos leer una propiedad de algo que no es un objeto, sale error

console.log(user.mascota.edad)

let user2 = {
  nombre: "Pepe"
}


/// Cuando queremos leer una propiedad de algo, pero ese algo puede ser undefined, usamos ?.

/// ?. devuelve undefined si el elemento de la izquierda es undefined, y el valor que toque si no

console.log(user2["mascota"]?.edad)
console.log(user2?.mascota?.edad)


//Antes de exisitir ese operador, se hacía así:
/* if(user2 && user2.mascota){
  console.log(mascota.edad)
} */


//ERROR


