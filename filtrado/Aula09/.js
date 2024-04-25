// class robseon{
//     constructor(){
//         this.nome = prompt();
//         this.numero = prompt();
//         this.tipo = prompt();
//     }
// }
// let p1 = new robseon();
// let p2 = new robseon()

// class pessoa2{
//     constructor(nome){
//         this.pnome = nome;
//     }
// }

// let p_1 = new pessoa2("Gerson");

// let p_2 = new pessoa2("DD");

// let p_3 = new pessoa2("GersoAAn");

// console.log(p_1,p_2,p_3)

class carro {
    constructor(nome, tipo) {
        this.nome = nome;
        if (tipo == 1) {
            this.tipo = "Exportivo";
            this.veloMax = 400;
        } else if (tipo == 2) {
            this.tipo = "Passeio";
            this.veloMax = 220;
        } else {
            this.tipo = "Utilitario";
            this.veloMax = 200;
        }
    }
    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.Tipo}`);
        console.log(`Velocidade Maxima: ${this.veloMax}`);
        console.log(`--------------------------`);
    }

    getinfo(){
        return [this.nome,this.tipo,this.veloMax];
    }

    setNome(nome){
        this.nome = nome;
    }
    settipo(tipo){
        this.tipo = tipo;
    }
    setVelo(velo){
        this.veloMax = velo;
    }
}

let C1 = new carro('Onix', 2);
let C2 = new carro('Pejot', 1);
let C3 = new carro('Cu', 3);


// C1.info()
// C2.info()
// C3.info()

// console.log(C1.getinfo())

console.log(C1.getinfo())

//consumindo set

   