var livrosAutor = ["Jogos Vorazes","Suzanne Collins","A insustentavel leveza do ser","Milan kundera","Dom Quixote de La Mancha","Miguel de Cervantes","Metamorfose","Franz Kafka","Ensaio Sobre a Cegueira","José Saramago","Crime e Castigo","Fiódor Dostoiévsky","1984","George Orwell","Por Quem os Sinos Dobram","Ernest Hemingway","O Sol é Para Todos","Harper Lee","Os Miseráveis"," Victor Hugo","A História de uma Serva","Margaret Atwood"]

function get(id) {
    return document.getElementById(id)
}

function chama(qual){
    var livros = "";
    for (let index = 0; index < livrosAutor.length; index) {
        livros += " - <b> " + livrosAutor[index] + " </b> <br>";
        index = index +2;
        
    }
    get(qual).innerHTML = livros;
}

function select(id) {
    var select = get(id)
    for (let index = 0; index < livrosAutor.length; index) {
        var option = document.createElement("option");
        option.text = livrosAutor[index];
        option.value = index;
        select.add(option);
        index = index +2;
    }
}

function consulta() {
    var valor = parseInt(get('seleciona').value);
    var Mostra = '';
    Mostra = "Titulo: " + livrosAutor[valor] + "<br> Autor: " + livrosAutor[(valor+1)];
    get('MostraLivro').innerHTML = Mostra;
}