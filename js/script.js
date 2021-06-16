// *Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [

    {

        nome: 'Bmx',
        peso: 15,

    },

    {

        nome: 'Atala',
        peso: 28,

    },

    {

        nome: 'Elettric',
        peso: 36,

    },

    {

        nome: 'Viper',
        peso: 5,

    },

    {

        nome: 'Boomboom',
        peso: 73,

    }

];

let pesoMin = bici[0]


for(let i = 0; i < bici.length; i++){

    if(bici[i].peso < pesoMin.peso){
        pesoMin = bici[i];
    }
}

const {nome, peso} = pesoMin;

console.log(
    
    `La bici con peso minore è ${nome}, che pesa ${peso}kg.`
);


//* Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti e stampiamo tutto in console.





const squadreCalcio = [

    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    
    {
        nome: 'I Gobbi',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },


];


const randomNum = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

for(let i = 0; i < squadreCalcio.length; i++){
    squadreCalcio[i].puntiFatti = randomNum(0,90);
    squadreCalcio[i].falliSubiti = randomNum(0,30);
}

console.log(squadreCalcio);

const squadreRidotto = [];

for(let i = 0; i < squadreCalcio.length; i++){
    const {nome, falliSubiti} = squadreCalcio[i];
    squadreRidotto.push({nome,falliSubiti});
}

console.log(squadreRidotto);