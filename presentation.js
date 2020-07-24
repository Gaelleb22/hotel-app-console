//saisie utilisateur
var readline = require('readline');
var service = require('./service');

var saisie = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//fonction start
function start() {
    console.log('\x1b[36m%s\x1b[0m', 'Menu')
    console.log('1. Lister les clients');
    console.log('2.Ajouter un client');
    console.log('3.Rechercher un client par nom');
    console.log('4.Vérifier la disponibilité d\'une chambre');
    console.log('99. Sortir');

    saisie.question('Saisissez votre choix : ', function (choix) {
        switch (choix) {
            case '1':
                console.log('\x1b[32m%s\x1b[0m', '>> Liste des clients');
                service.list((clients) => {
                    for(i=0; i<clients.length; i++){
                        console.log('\x1b[32m%s\x1b[0m', i+1, clients[i].nom, clients[i].prenoms);
                    }
                    
                    start();
                });

                break;
            case '2':
                console.log('\x1b[33m%s\x1b[0m', 'Cette fonction n\'est pas encore disponible');
                start();
                break;
            case '3':
                console.log('\x1b[33m%s\x1b[0m', 'Cette fonction n\'est pas encore disponible');
                start();
                break;
            case '4':
                console.log('\x1b[33m%s\x1b[0m', 'Cette fonction n\'est pas encore disponible');
                start();
                break;
            case '99':
                console.log('\x1b[32m%s\x1b[0m', 'Aurevoir');
                saisie.close();
                break;
            default:
                console.log('\x1b[31m%s\x1b[0m', 'cette commande n\'existe pas');
                start();
                break;
        }
    });

}
exports.start = start;



