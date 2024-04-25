function get(id) {
    return document.getElementById(id);
}

function texto(id,conteudo) {
    var texto = get(id);
    texto.innerHTML = conteudo;
}

//-----------------------------Scripts referentes a modal e as informações que são mostradas na tela.
function mostrainfo(id, modo) {
    var elemento = get(id);
    elemento.style.display = modo;
}

function closeModal(id) {
    var elemento = get(id);
    elemento.style.display = '';
}

function teste(elem, id) {
    var elemento = get(elem);
    switch (elem) {
        case 'RA':
            get('RG').checked = false;
            mostrainfo('aritmetica', `${elemento.style.display == 'none' ? 'none' : 'block'}`)
            mostrainfo('geometrica', `${elemento.style.display == 'block' ? 'block' : 'none'}`)
            break;
        case 'RG':
            get('RA').checked = false;
            mostrainfo('geometrica', `${elemento.style.display == 'none' ? 'none' : 'block'}`)
            mostrainfo('aritmetica', `${elemento.style.display == 'block' ? 'block' : 'none'}`)
            break;
        case 'GAME':
            mostrainfo(id, `${get(id).style.display == 'none' ? 'none' : 'block'}`)
            break;
        default:
            break;
    }


}

//-----------------------------Scripts referentes aos codigos das progressões.

function progressao(tipo,primeiro,razao,termo,txtid) {
    var P = parseInt(`${tipo=='gpf'? 1 : get(primeiro).value}`);
    var R = parseInt(`${tipo=='gpf'? 1 : get(razao).value}`);
    var T = get(termo).value;
    var resultado = P;
    
    for (let index = 1; index < T; index++) {
        switch (tipo) {
            case 'gpa':
                resultado += R;
                break;
            case 'gpg':
                resultado *= R;  
                break;
            case 'gpf':
                resultado = R + P;
                P = R;
                R = resultado;
                break;
            default:
                break;
        }
    }

    texto(txtid,resultado)

}