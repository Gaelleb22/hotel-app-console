//saisie utilisateur
var readline = require('readline');

var saisie = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//fonction start
function start() {
    console.log('1. Lister les clients');
    console.log('99. Sortir');
    var stop = false;
    saisie.question('Saisissez votre choix : ', function (choix) {
        switch (choix) {
            case '1':
                console.log('>> Liste des clients');
                start();
                break;
            case '99':
                console.log('Aurevoir');
                stop = true;
                saisie.close();
                break;
            default:
                console.log('cette commande n\'existe pas');
                start();
                break;
    }});

}
exports.start = start;



