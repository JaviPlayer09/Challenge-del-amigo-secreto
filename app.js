// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// array para almacenar nombres
let nombres = [];

function agregarAmigo (){
    let input = document.getElementById('amigo').value;
    if (input == ""){
        alert("Debe ingresar un nombre");
    }
    else
        nombres.push(input);
        let lista  = document.createElement('li');
        lista.textContent = input;
        document.getElementById('listaAmigos').appendChild(lista);
        document.getElementById('amigo').value = "";
}

function sortearAmigo (){
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    let numberPosition = Math.floor(Math.random()*nombres.length);
    let sorteo  = document.createElement('li');
    sorteo.textContent = `El Amigo sorteado es: ${nombres[numberPosition]}`;
    document.getElementById('resultado').appendChild(sorteo);
}