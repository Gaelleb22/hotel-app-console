//récuppérer les données clients
var request = require('request');

function list(callback) {
    request('https://gaelle-hotel-web-api.herokuapp.com/clients?start=0&size=3', { json: true }, function (err, res, body) {
        if (err) { callback('Erreur', err); }
        callback(body);
    });
}

exports.list = list;