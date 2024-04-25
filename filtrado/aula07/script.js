const p_array = document.querySelector('#array');
const txt_pesquisar = document.querySelector('#txt_pesquisar');
const btnPesquisar = document.querySelector('#btnPesquisar');
const resultado = document.querySelector('#resultado');

const elementos_array=['Figo','Uva','Morango','Manga'];

p_array.innerHTML='['+elementos_array+']';

btnPesquisar.addEventListener('click',(evt)=>{
    resultado.innerHTML = "valor não encontrado"
    const retorno = elementos_array.find((el,idc)=>{
        if (el.toUpperCase()==txt_pesquisar.value.toUpperCase()) {
            return ("O valor: "+el+" está presente no vetor na posição: "+idc);
        }
    })
    resultado.innerHTML = retorno;
})