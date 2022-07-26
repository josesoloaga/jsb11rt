"use strict";
/*
Edita el archivo script.js para crear un "reloj de cuco".

El reloj sólo funcionará un día y dará la hora (imprimiendola por consola) de 8 a 22.

Nota: Aunque lo llamemos reloj, no tiene que funcionar a tiempo real, sino que en cada vuelta aumentará una hora.

Puedes elegir el tipo de bucle que prefieras. Puedes hacer que empiece en 8 y termine en 22 o que vaya de 0 a 24 y usar un condicional, a tu eleccion.

Extra: ¡Hagámoslo un poco más difícil! Además de decir la hora con un número, hará la cantidad de "cucús" correspondientes (ej: "8 cucú cucú cucú cucú cucú cucú cucú cucú"). ¿Serías capaz de hacerlo sin usar el método repeat? Si lo quieres complicar aún más, ¡que los cucús sean en base 12 y no 24!
*/

/*

for (let i = 8; i <= 22; i++) {
  console.log(i);
  let j = 1;
  while (j <= i) {
    if (j >= 13) {
      j - 13;
      j++;
      console.log("cucu");
    } else {
      j++;
      
      console.log("cucu");
    }
  }
}


CASI CASI
*/

let counter = 0;
for (let i = 1; i <= 24; i++) {
  console.log(`La hora es ${i}`);

  if (i <= 12) {
    for (let j = 0; j < i; j++) {
      console.log("cucu");
    }
  } else {
    counter++;
    for (let j = 0; j < counter; j++) {
      console.log("cucu");
    }
  }
}

/*


Ejer. Nacho

let counter = 0;
for (let i = 1; i <= 24; i++) {
  console.log(`La hora es ${i}`);

  if (i <= 12) {
    for (let j = 0; j < i; j++) {
      console.log("cucu");
    }
  } else {
    counter++;
    for (let j = 0; j < counter; j++) {
      console.log("cucu");
    }
  }
}

















for(let i=1; i<=24; i++){
  console.log(`ahora mismo son las ${i}`)
  

   
} 
console.log()
*/

/*

Prueba para
if( j>= 12){
  j==1;
  j++;
console.log("cucu");
} 


Ejer resuelto menos ultimo punto:

for (let i = 8; i <= 22; i++) {
  
  console.log(i);
  
  let j = 1;
  while (j <= i) {
    j++;
    console.log ("cucu");  
  }
}



CASI CASI

for (let i = 8; i <= 22; i++) {
  console.log(i);
  let j = 1;
  while (j <= i) {
    if (j >= 13) {
      j == 1;
      j++;
      console.log("cucu");
    } else {
      j++;

      console.log("cucu");
    }
  }
}

OTRO CASI CASI
for (let i = 8; i <= 22; i++) {
  console.log(i);
  let j = 1;
  while (j <= i) {
    if (j >= 13) {
      j - 13;
      j++;
      console.log("cucu");
    } else {
      j++;
      
      console.log("cucu");
    }
  }
}

*/
