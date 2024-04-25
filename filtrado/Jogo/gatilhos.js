function removebotao(id1, id2){
	get(id1).remove();
	get(id2).remove();
}
function prologo(){
	get("p1").innerText = cena_Prologo.parteUm + " " + cena_Prologo.parteDois;
	get("p2").innerText = cena_Prologo.parteTres + " " +  cena_Prologo.parteQuatro;
	get("p3").innerText = cena_Prologo.parteCinco + " " +  cena_Prologo.parteSeis;
	
}

function um() {
	get(ID_HISTORIA).innerText = cena_Um.parteUm + " " + cena_Um.parteDois;
	criarBotao(B1,);
	criarBotao(B2,oito);
	get(B1).textContent = cena_Um.AlternativaUm;
	get(B2).textContent = cena_Um.AlternativaDois;
}

function dois() {
	get(B1).remove();
	get(B2).remove();
	get(ID_HISTORIA).innerText = cena_Dois.parteUm + " " + cena_Dois.parteDois;
	criarBotao(B1, doisteste);
	get(B1).textContent = cena_Dois.AlternativaUm;
}

function doisteste() {
	get(B1).remove();
	var resultado = teste(4,atributos.destreza);
	console.log(resultado);
	if (resultado==true) {
		get(ID_HISTORIA).innerText = cena_Dois.ParteVitoria;
		criarBotao(B1,vquatro);
		get(B1).textContent = cena_Dois.AlternativaDois;

	} else {
		get(ID_HISTORIA).innerText = cena_Dois.parteDerrota;
		criarBotao(B1,treze);
		get(B1).textContent = cena_Dois.AlternativaDois;
	}
}

function oito() {
	get(B1).remove();
	get(B2).remove();
	get(ID_HISTORIA).innerText = cena_Oito.parteUm;
	criarBotao(B1, );
	criarBotao(B2,vdois);
	get(B1).textContent = cena_Oito.AlternativaUm;
	get(B2).textContent = cena_Oito.AlternativaDois;
}

function vdois() {
	get(B1).remove();
	get(B2).remove();
	get(ID_HISTORIA).innerText = cena_Vdois.parteUm;
	criarBotao(B1, );
	criarBotao(B2, dois);
	get(B1).textContent = cena_Vdois.AlternativaUm;
	get(B2).textContent = cena_Vdois.AlternativaDois;
}

function vquatro() {
	// body...
}

function treze() {
	// body...
}