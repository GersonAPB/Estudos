class pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    setNome(nome){
        this.nome = nome;
    }
    setIdade(idade){
        this.idade = idade;
    }
    Info(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
        console.log(`-------------------------------------`);
    }
}

//pessoas  dinamicamnete

let pessoas = [];
const btn_add = document.querySelector('#btn_add');
const res = document.querySelector(".res");

//criando uma função que tem como objetivo receber os elementos do dom e inserilos dentro do array pessoas.

const addPessoa = ()=>{
    pessoas.map((p)=>{
        const div=document.createElement('div')
        div.setAttribute('class','pessoa');
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`;
        res.appendChild(div);
    })
}

btn_add.addEventListener('click', (evt)=>{
    //no click criar uma nova pessoa

    const nome = document.querySelector('#f_nome');
    const idade = document.querySelector('#f_idade');

    const p=new pessoa(nome.value,idade.value);
    pessoas.push(p);

    nome.value = "";
    idade.value = "";

    res.innerHTML = '';
    addPessoa( )
})