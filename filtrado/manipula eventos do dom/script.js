const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');

const btn = document.querySelector('#btn_copiar');
const todosAlunos = [...document.querySelectorAll('.aluno')]

todosAlunos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const aluno = evt.target;
        aluno.classList.toggle('selecionado');
    })
})

btn.addEventListener('click', ()=>{
    const alunosSelecionados = [...document.querySelectorAll('.selecionado')];
    const alunosNSelecionados = [...document.querySelectorAll('.aluno:not(.selecionado)')];
    alunosSelecionados.map((el)=>{
        caixa2.appendChild(el);
    })
    alunosNSelecionados.map((el)=>{
        caixa1.appendChild(el);
    })
    
    
})