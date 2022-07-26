let objeto1 = {
    name: 22,
    apellido: 11,
    edad: 37,
    color: 20,
}
console.log(objeto1)
let sumaTotal=0;
for (values in objeto1){
    console.log(sumaTotal)
   sumaTotal += objeto1 [values];
}
console.log(sumaTotal )



//PROPIEDAD.SORT

let arr = [2, 12, 5, 2, 6, 9, 10,];


arr.sort((a,b)=>{
    if(a==b){
        return 0;
    }
    if(a>b){
        return 1;
        
    }
    if(a<b){
        return -1;
    }
})
console.log(arr)


let objetos = [
    {
        name:'Alejandro',
        age: 24,
    },
    {
        name: 'Pedro',
        age: 45,
    },
    {
        name:'Julia',
        age: 62,
    },
    {
        name:'Julia',
        age: 56,
    },
];

objetos.sort((a,b)=>{
    if( a.age > b.age){
        return 1;
    }
    if(a.age < b.age){
        return -1;
    }
    
    if(a.age == b.age){
        return 0;
    }
});
console.log(objetos)


