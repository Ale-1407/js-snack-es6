/*
Snack 1
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4
*/


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

let min = parseInt(prompt('Inserisci il numero minore'));
let max = parseInt(prompt('Inserisci il numero maggiore'));

//soluzione con forEach

//creo funzione che richiami il numero minimo e massimo
function myFunction(min, max){
    //inizializzo il nuovo array all'interno della funzione 
    //per renderlo più pulito
    const array2 = [];

    myArray.forEach(( element, index) => {
        if( index >= min && index <= max){
            array2.push(element);
        }
    })
    console.log(array2);
}

myFunction(min, max);

//soluzione con filter

function myFunction2(min, max){
    let array3 = myArray.filter((element,index) => {
        if (index >= min && index <= max) {
            return true;
        }
        return false;
    });
    console.log(array3);
}

myFunction2(min, max);