/*
CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO
*/

//1.chiedere i km da percorrere
//2.chiedere l'età al passeggero 
//3.calcolo totale del bilgietto in base ai km (0.21 euro al km)
//4.applicare uno sconto del 20% SE è minorenne
//5.appplicare uno sconto del 40% SE è over 65
//6.il prezzo finale va visualizzato NON con più di DUE decimali dopo la virgola

//1.chiedo di inserire i km 
const dist =parseInt (prompt('Inserire Distanza in KM'))
console.log('KM', dist, typeof dist);

//2.chiedo l'età
const age =parseInt (prompt('Inserisci la tua età'))
console.log('anni', age, typeof age);

//3.calcolo il totale del biglietto
let biglietto = parseFloat (dist * 0.21)
console.log('biglietto', biglietto, typeof biglietto);

//4.applicare uno sconto del 20% SE minorenne
let scontoMinore = parseFloat ((biglietto / 100) *20)
console.log('scontoMinore', scontoMinore, typeof scontoMinore);

//5.applicare sconto del 40% SE over65
let scontoOver65 = parseFloat ((biglietto / 100) *40)
console.log('scontoOver65', scontoOver65, typeof scontoOver65);

if (age >=18&&65) {
    console.log('prezzo del biglietto'+ biglietto);
}
else if (age >65){
    console.log('prezzo del biglietto' + (biglietto - scontoOver65));

}

else (age <18) {
    console.log('prezzo del bilgietto' + (biglietto - scontoMinore));

}



//6.inserisco il risultato nel HTML
/*console.log('prezzo del biglietto:' + biglietto);
document.getElementById('bilgietto-costo').innerHTML =
