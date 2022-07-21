"use strict"

let user = {
  nombre: "Zoe",
  edad: 28,
  email: "zoe.porta.garcia@hackaboss.com",

  coloresFavoritos: ["morado", "azul", "negro"],
  mascota: {
    nombre: "Nymeria",
    especie: "gato",
    color: "azul"
  }
}


// Si duplico la varible, duplico la refeencia, NO el objeto (sigue siendo el mismo)
let user2 = user;

user2.pais= "España"
user2.nombre = "María"

console.log(user)
console.log(user === user2)



// Aunque tenga dos objetos idénticos, JS siempre los va a considerar distintos (la referencia es distinta)

let vacio1 = {};
let vacio2 = {};

console.log(vacio1 === vacio2)



// COPIA POCO PROFUNDA
/// Utilizando spread (...) (lo que tiene dentro)

let copiaSuperficial = {...user}

console.log(copiaSuperficial)

console.log(copiaSuperficial === user)

copiaSuperficial.nombre = "Ana"

console.log(user.nombre, copiaSuperficial.nombre)

//// OJO! Es una copia poco profunda, los arrays y objetos que tenga dentro siguen siendo los mismos (copiamos el puntero)

copiaSuperficial.mascota.nombre = "Buffy"

console.log(user.mascota)




// COPIA PROFUNDA
// structuredClone()
// OJO! Es un método del navegador, NO de JS.

// OJO! No sirve para objetos que contengan métodos

let copiaProfunda = structuredClone(user)


copiaProfunda.mascota.nombre = "Nymeria"
console.log(copiaProfunda.mascota)
console.log(user.mascota)