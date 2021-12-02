let rep = document.getElementById("repeticoes").value;
let count = 0;
let lousacont = 0;
let lousaapagada = 0;

function lousa() {
    while (rep > count) {
        if (lousacont < 11) {
            document.getElementById("quadro").innerHTML = "frase do Bart";
            lousacont++;
            count++;
                if (rep === count) {
                    break;
                }        
        }else{
            lousacont = 0;
            lousaapagada ++;
        }
    }
    document.getElementById("contadordelousa") = lousaapagada;
    document.getElementById("quantosnalousa") = count;
}