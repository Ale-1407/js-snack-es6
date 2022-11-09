/*
Snack4
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
Nome sarà l’unica proprietà da compilare, le altre saranno tutte 
settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: 
Punti fatti e falli subiti. 
Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//array squadre

let squadre = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Toro",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    }
];
// for(let i = 0; i < squadre.length; i++){

//     let punti = Math.floor(Math.random() * 11);
//     let falli = Math.floor(Math.random() * 11);
//     let { puntiFatti = punti, falliSubiti = falli } = squadre;

//     squadre[i] = {
//         ...squadre[i],
//         puntiFatti,
//         falliSubiti,
//     }

//     console.log(puntiFatti, falliSubiti);
// }

// console.log(squadre);

//altra soluzione

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const squadre2 = squadre.map( (element) => {
    element.puntiFatti = randomNumber(1, 100);
    element.falliSubiti = randomNumber(1, 100);
    return element
} );

console.log( squadre2 )

