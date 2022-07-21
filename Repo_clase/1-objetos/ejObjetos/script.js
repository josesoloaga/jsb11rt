"use strict"

// Como los objetos son punteros, no los podemos comparar directamente

// Haz una función que reciba dos objetos y devuelva true si son iguales y false si no

// Ten en cuenta que el orden no existe en los objetos. Dos objetos son iguales cuando tienen las mismas claves y el mismo valor para cada clave


let obj1 = {
  a: 1,
  b: 2,
  c: 3
}

let obj2 = {
  b: 2,
  a: 1,
  c: 3
}

let obj3 = {
  a: 1,
  b: 4,
  c: 3
}

let obj4 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

let obj5 = {
  a: 1,
  d: 2,
  c: 3
}
/*
let objArr1 = Object.keys(obj1)
let objArr2 = Object.keys(obj2)


function misObjetos (objArr1, objArr2){
  if(objA.toString() === objB.toString()){
    return true
  } else {
    return false
  }
  
  
}

console.log(misObjetos(obj1, obj2))
*/

function sonIguales(objA, objB){

  let objAarray = object.keys(objA)
  let objBarray = object.keys(objB)

  if(objAarray.length !== objBarray.length){
    return false
  }

  for(let key in objA){
    console.log(key)
    console.log(objA[key])
    console.log(objB[key])
    if(objA[key] === objB[key]){
      return true
    }
  }
  return true
}

console.log(sonIguales(obj1, obj2))