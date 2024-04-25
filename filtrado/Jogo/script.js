const atributos = {
	inteligencia: 0,
	destreza: 0,
	ataque: 0,
	destino: 0
}

var vida = 0;
var tochas = 0;
var itens = [];

const B1 = "b1";
const B2 = "b2";
const B3 = "b3";
const B4 = "b4";

const ID_HISTORIA = "boxHistoria";
const ID_INTELIGENCIA = "inteligenciaValue";
const ID_DESTREZA = "destrezaValue";
const ID_ATAQUE = "ataqueValue";
const ID_DESTINO = "destinoValue";
const ID_TOCHA = "tochaValue";
const ID_VIDA = "vidaValue";

function get(id){
	return document.getElementById(id);
}

function posicaoAleatoria(array){
	return Math.floor(Math.random() * array.length);
}

function setAtributosIniciais(){
	var valores = [1,1,2,2];
	vida = 6;
	tochas = 4;

	for (let i = valores.length; i > 0; i--) {
		const posicao = posicaoAleatoria(valores);
		if (atributos.inteligencia == 0){
			atributos.inteligencia = valores[posicao];
		} else if (atributos.destreza == 0){
			atributos.destreza = valores[posicao];
		} else if (atributos.ataque == 0){
			atributos.ataque = valores[posicao];
		} else {
			atributos.destino = valores[posicao];
		}
		valores.splice(posicao, 1);
	}	

	console.log(atributos);//tirar isso quando terminar

	corrigirAtributos(ID_INTELIGENCIA, atributos.inteligencia);
	corrigirAtributos(ID_DESTREZA, atributos.destreza);
	corrigirAtributos(ID_ATAQUE, atributos.ataque);
	corrigirAtributos(ID_DESTINO, atributos.destino);
	corrigirAtributos(ID_TOCHA, tochas);
	corrigirAtributos(ID_VIDA, vida);
	get("modal").remove();
	um();
}

function corrigirAtributos(id, atributo) {
	get(id).innerHTML = atributo;
}

function dano(valor) {
	vida = vida - valor;
	corrigirAtributos(ID_VIDA, vida);
}

function rolarDado(atributo){
	const dado = [1,2,3,4,5,6];
	var posicao = posicaoAleatoria(dado);
	var resultado = dado[posicao]+atributo;
	console.log(resultado);
	return resultado;
}

function teste(cd,atributo){
	var resultado = rolarDado(atributo);
	if (resultado>=cd) {
		return true;
	} else {		
		return false;
	}
}

function novoItem(item){
	itens.push(item);
	get("inventario").innerHTML = itens.join("<br/>");
}

function criarBotao(id, cena) {
	const botao = document.createElement("button");
	botao.setAttribute("id",id);
	get("decisao").appendChild(botao);

	botao.addEventListener('click', function() {
 		cena();
	});
}