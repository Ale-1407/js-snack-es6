/*
Snack 3
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa 
con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando destructuring e 
template literal.
*/

// creo array bici

const bici = [

    {
        nome: 'Scott',
        peso: 8
    },
    {
        nome: 'Cannondal',
        peso: 10
    },
    {
        nome: 'Cervelo',
        peso: 6
    },
    {
        nome: 'Einhorn',
        peso: 5
    }
];


let limite = 20;
let pesoMinore;

for(let i = 0; i < bici.length; i++){
    
    let {nome, peso} = bici[i];
    
    if(peso < limite){
        
        limite=peso;
        pesoMinore = nome;
    }
}

console.log(`la bici più leggera è ${pesoMinore} e pesa ${limite} kg`);