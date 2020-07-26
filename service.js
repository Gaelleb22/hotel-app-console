//récuppérer les données clients
var request = require('request');

function list(callback) {
    request('https://gaelle-hotel-web-api.herokuapp.com/clients?start=0&size=10', { json: true }, function (err, res, body) {
        if (err) { callback('Erreur', err); }
        callback(body);
    });
}

function creerClient(nom, prenoms, callbackSuccess, callbackError) {
    request.post({
        url: 'https://gaelle-hotel-web-api.herokuapp.com/clients',
        methode: "POST",
        headers:{
            'Content-type': 'application/json'
        },
        body: `{"nom": "${nom}", "prenoms":"${prenoms}"}`
        }, 
        function (err, res, client) {
            if (err && callbackError) { callbackError(err); }
            callbackSuccess(client);
    });
}

exports.list = list;
exports.creerClient = creerClient;