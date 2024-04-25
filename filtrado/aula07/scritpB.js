const p_array = document.querySelector('#array');
const btnVerificar =  document.querySelector('#btnVerifica');
const resultado = document.querySelector('#resultado');

const elementos_array =[21,25,3,20,16,27,33,3];
p_array.innerHTML = '['+elementos_array+']';

// btnVerificar.addEventListener('click',(evt)=>{
//     resultado.innerHTML='Array não confere';
//     const retorno = elementos_array.every((e,i)=>{
//         return e>=18;
//     })
//     if (retorno) {
//         resultado.innerHTML='array confere'
//     }
//     console.log(retorno)
// })

// btnVerificar.addEventListener('click',(evt)=>{
    
//     const retorno = elementos_array.every((e,i)=>{
//         if(e<18){
//             resultado.innerHTML='Array não conforme na posição '+ i;
//         }
//         return e>=18;
//     })
//     if (retorno) {
//         resultado.innerHTML='array confere'
//     }
//     console.log(retorno)
// })

//metodo SOME - caso haja

btnVerificar.addEventListener('click',(evt)=>{
    
    const retorno = elementos_array.some((e,i)=>{
        if (e<18) {
            resultado.innerHTML = 'Ha um de menor no grupo na posição '+i;
        }
        return e<18;
    })
    if (!retorno) {
      resultado.innerHTML = "Todos de maior";
    }
    console.log(retorno);
})