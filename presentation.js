
import readline from 'readline';
import {Service} from './service.js';

const saisie = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const service = new Service();

//fonction start
export function start() {
    menu();

    saisie.question('Saisissez votre choix : ', choix => {
        switch (choix) {
            case '1':
                console.log('\x1b[32m%s\x1b[0m', '>> Liste des clients');
                lister();
                break;
            case '2':
                console.log('\x1b[32m%s\x1b[0m', 'Nouveau client');
                menuCreerClient(saisie);
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
                console.log('\x1b[32m%s\x1b[0m', 'Au revoir');
                saisie.close();
                break;
            default:
                console.log('\x1b[31m%s\x1b[0m', 'cette commande n\'existe pas');
                start();
                break;
        }
    });

}

//menu
function menu(){
    console.log('\x1b[36m%s\x1b[0m', 'Menu')
    console.log(`1. Lister les clients
2.Ajouter un client
3.Rechercher un client par nom
4.Vérifier la disponibilité d\'une chambre
99. Sortir`);
}

//lister clients
function lister() {
    service.listerClient().then((clients) => {
        for (let i = 0; i < clients.length; i++) {
            console.log('\x1b[32m%s\x1b[0m', i + 1, clients[i].nom, clients[i].prenoms);
        }
        start();
    }).catch(err => console.log(`ERROR : ${err}`));
}

//creer clients
function menuCreerClient(saisie) {
    saisie.question('nom:', (nom) => {
        saisie.question('prenoms:', (prenoms) => {
            service.creerClient(nom, prenoms).then((clientCree) => {
                console.log(`Client créé : ${clientCree}`);
                start();
            }).catch((err) => {
                console.log(`ERROR : ${err}`);
                start();
            })
        })
    })
}

//exports.start = start;



