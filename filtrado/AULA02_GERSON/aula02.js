// função geradora (tem seu retorno retardado
/*
function* cores(){
    yield 'Azul';
    yield 'Rosa';
    yield 'Roxo';
}

const empadinha = cores();

console.log(empadinha.next().value);
console.log(empadinha.next().value);
console.log(empadinha.next().value);

console.log(empadinha.next().value);
console.log(empadinha.next().value);
console.log(empadinha.next().value);

*/

// ex 2
/*
function* perguntas(){
    const nome = yield 'Qual o seu maior medo?'
    const fruta = yield 'Gosta de pitaia?'
    return 'Seu maior medo é ' + nome + ' e vc '+ fruta+ ' pitaia';
}

const itquestions = perguntas();
console.log(itquestions.next().value);
console.log(itquestions.next('Chico cesar').value);
console.log(itquestions.next('Ama').value);
*/

//ex 3
/*
function* contador(){
    let i = 0;
    while(true){
        yield i++;
    }
}

const itc = contador();

console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);

console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
*/

//método MAP (percorre array inteiro)

//ex 1
/*
const alunos = ['junin','boris','ramirez','Aramil','Akta','Erehorn','Krusk','Fawn'];
alunos.map((el,i) => {
    console.log('Personagem: '+el+' posição: '+i);
})
*/
/*
const converterInt = (e) => parseInt(e);
const dobrar = (e)=> e*2;
let num = ['1','2','3','4','5'].map(dobrar);
console.log(num);
*/

function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    console.log(nome);
    console.log(nota);
}

aluno('gerson', 100)