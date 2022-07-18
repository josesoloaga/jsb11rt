"use strict";
console.log("hola mundo!");

//BUCLE FOR
/*
SINTAXIS:

for(contador; condicion; modificacion){
    codigo que se repite
}
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*

i =0 ; i < 5 ; "si"; i + 1     (i = 1)
i = 1 ; i < 5; "si"; i + 1     (i = 2)
...

*/

for (let i = 10; i <= 50; i += 5) {
  console.log(i);
}
