function get(id) {
    return document.getElementById(id);
}
function texto(id,conteudo) {
    var texto = get(id);
    texto.innerHTML = conteudo;
}