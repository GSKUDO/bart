let rep;
let count = 0;
let lousacont = 0;
let lousaapagada = 0;
let countfrases = 0;



function lousa() {
    rep = document.getElementById("repeticoes").value;
    console.log (rep);
    while (rep > count) {
        if (lousacont < 11) {
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
    while ( lousacont > countfrases) {
        document.getElementById("quadro").innerHTML = document.getElementById("quadro").innerHTML + "\n" + "Eu não instigarei revoluções";
        countfrases++;
    }
    document.getElementById("contadordelousa").innerHTML = "Quantidade de lousas apagadas: " + lousaapagada;
    document.getElementById("quantosnalousa").innerHTML = "Quantos ficaram na lousa: " + lousacont;
}