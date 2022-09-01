

let i = 0;
let texto = "quiero amar salir por la calle cantando reservarme un vuelo a un lugar tranquilo esperar en silencio sin pensar purificarme y dejarme llenar "
let speed = 100;

function typeWriter(){
    if(i < texto.length){
        document.getElementById('demo').innerHTML += texto.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}