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

// Hay distintos métodos para obtener un array de un objeto.
//Entre otras cosas sirve para poder mirar el length


// OBJECT.KEYS()
/// Devuelve un array con las claves del objeto

console.log(Object.keys(user))


// OBJECT.VALUES()
/// Devuelve un array con los valores del objeto

console.log(Object.values(user))


// OBJECT.ENTRIES()
/// Devuelve un array con las entradas del objeto
/// Las entradas las devuelve en forma de array de dos posiciones: 0 - clave, 1 - valor

console.log(Object.entries(user))





