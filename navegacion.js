 let resultado = "";
 let i = 0;

 do {
    i = i + 1;
    resultado = resultado + i;
 }while(i < 5);

 console.log(resultado)

function busquedaSecuencia(elemento, array){
    for (var i in array){
        if(array[i] == elemento)
        return i;
    }
    return -1
}

var letras = ["a","b","c","d"];

console.log(busquedaSecuencia("a", letras))


var ns = [4,2,5,1,3];

ns.sort(function(a,b){
    return a-b;
});

console.log(ns)



function agregarElementos(){
    // obtener elemento dic con id

    const existDiv = document.getElementById("div_ejemple");

    // crear nuevo elemento div
    const nuevoDiv = document.createElement('div');

    // arega nuevo elemento div existente
    existDiv.appendChild(nuevoDiv);
}

console.log(agregarElementos())