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


// Bucle for

/// Primero convierto a array
let userArr = Object.keys(user)
console.log(userArr.length)

for(let i = 0; i < userArr.length; i++){
  console.log(i)

  let clave = userArr[i]
  console.log(clave)

  console.log(user[clave])
}



console.log("/////")


// For... in (especifico para objetos)

/* 
for(let key in objeto){
//codigo
// En cada vuelta, "key" será una clave diferente de "objeto"
}

*/

 
for(let key in user){
console.log(key)
console.log(user[key])


console.log(user.mascota[key])
} 

