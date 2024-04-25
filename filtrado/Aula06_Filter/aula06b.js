const caixaAlunos = document.querySelector('#caixaAlunos');
const btn_a = [...document.querySelectorAll('.aluno')];
const a1_2 = document.querySelector('#a1_2');
const alunos = ['Aramil', 'Akta', 'Erehorn', 'Krusk', 'Fawn', 'Vincent'];
const btnAlunoSelecionado = document.getElementById('btnAlunoSelecionado');
const btnExcluirAluno = document.getElementById('btnRemoverAluno');
const btnAdicionarNovoAluno = document.getElementById('btnAdicionarNovoAluno');
var ids = 0;

alunos.map((el) => {
    criaDiv(el);
})

const radioSelec = () => {
    const tdsRadios = [...document.querySelectorAll('input[type=radio]')];
    const radioSelec = tdsRadios.filter((ele) => {
        return ele.checked;
    })
    return radioSelec[0];
}

btnAlunoSelecionado.addEventListener('click', () => {
    const rs = radioSelec();
    if (rs != undefined) {
        const alunoSelect = rs.parentNode.parentNode.firstChild.textContent;
        alert(alunoSelect + ' vai morrer')
    }
})

btnExcluirAluno.addEventListener('click', () => {
    const rs = radioSelec();
    if (rs != undefined) {
        const alunoSelect = rs.parentNode.parentNode;
        alunoSelect.remove();
    }
})

btnAdicionarNovoAluno.addEventListener('click', ()=>{
    criaDiv(document.querySelector('#nomeAluno').value);
})


function criaDiv(nome) {
    if (nome=='') {
        return
    }
    
    ids++
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', 'a' + (ids));
    novoElemento.setAttribute('class', 'aluno a1');
    novoElemento.innerHTML = nome;

    const comandos = document.createElement('div');
    comandos.setAttribute('class', 'comandos');

    const rb = document.createElement('input');
    rb.setAttribute('type', 'radio');
    rb.setAttribute('name', 'rb_aluno');

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);

    caixaAlunos.appendChild(novoElemento);

    
}