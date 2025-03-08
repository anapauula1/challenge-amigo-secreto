const inputAmigos = document.getElementById("amigo");
const listaDeAmigos = [];
const ulListaDeAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    listaDeAmigos.push(inputAmigos.value);
    ulListaDeAmigos.innerHTML += `<li> ${inputAmigos.value} </li>`;
}
function sortearAmigo(){
     const random = Math.floor(Math.random() * listaDeAmigos.length);
     const amigoSecreto = listaDeAmigos[random];
     ulResultado.innerHTML = `<li> El amigo Secreto es ${amigoSecreto} </li>`;
}













