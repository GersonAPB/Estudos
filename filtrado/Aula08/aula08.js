const caixa = document.querySelector('#caixa');

const INIMIGOS = [];

let mapa = new Map();

mapa.set('aluno1','Adalberto');
mapa.set('aluno2','Aqweo');
mapa.set('aluno3',3424234);
mapa.set(4,'ADALDAL');
mapa.set(12,43234);

console.log(mapa)

caixa.innerHTML = mapa.get('aluno1')

// if (mapa.has(42)) {
//     caixa.innerHTML += mapa.get(42);
// } else {
//     caixa.innerHTML += mapa.get(12);
// }

let pes = 'aluno2';
let res = '';

if (mapa.has(pes)) {
    res = " A chave blabla bla "+ mapa.get(pes);
} else {
    res = " não deu blabla bla "
}

res+='<br/> O tamanho é igual: '+mapa.size;
caixa.innerHTML = res;

mapa.delete(12);
console.log(mapa);