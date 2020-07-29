import request from 'request-promise-native';

export class Service {

    //récuppérer les données clients
    listerClient() {
        return new Promise((resolve, reject) => {
            request('https://gaelle-hotel-web-api.herokuapp.com/clients?start=0&size=10', { json: true }, (err, res, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        })
    }

    //Créer nouveau client
    creerClient(nom, prenoms) {
        return new Promise((resolve, reject) => {
            request.post({
                url: 'https://gaelle-hotel-web-api.herokuapp.com/clients',
                methode: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: `{"nom": "${nom}", "prenoms":"${prenoms}"}`
            },
                (err, res, client) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(client);
                    }
                });
        })
    }
}
