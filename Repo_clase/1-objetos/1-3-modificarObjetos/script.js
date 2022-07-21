"use strict"

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

// Modificar una clave que ya existe
/// Simplemente cambiamos su valor

console.log(user)
console.log(user.nombre)

user.nombre = "María"

console.log(user)


// Añadir una clave
/// Simplemente le damos un valor

console.log(user.pais)
user.pais = "España"

console.log(user)
console.log(user.pais)


// Borrar claves (no es habitual, se suelen vaciar en vez de borrarlas)

delete user.pais
console.log(user)