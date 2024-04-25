const idades=[16,17,18,19,20,21,22,23,24];
//const filtroMaior21=(valor,indice,arr);

// const filtroMaior21=(valor)=>{
//     if(valor>=21){
//         return valor;
//     }
// }
// const maior=idades.filter(filtroMaior21);
// console.log(idades);
// console.log(maior)

const maior=idades.filter((valor)=>{
    if(valor>=21)
    return valor;
})
const menor=idades.filter((valor)=>{
    if(valor<21)
    return valor;
})

console.log(idades);
console.log(maior);
console.log(menor);