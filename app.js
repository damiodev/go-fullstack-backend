// On importe express
const express = require('express');

// On crée une application express
const app = express();

// ######   MIDLEWARES (Ensemble de code qui traite les requêtes et réponses de l'application)   ###### //
// Ce middleware permet d'accéder à notre API depuis n'importe quelle origine ( '*' )
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // On donne l'accès à toutes les origines
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // On donne l'autorisation d'utiliser certains headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // On peut envoyer des requêtes avec les méthodes mentionnées
    next();
});
// Ce middleware enregistre la fonction json de bodyParser comme middleware global pour l'application. Il transforme le corps de la requête en objet JavaScript utilisable.
app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2014/09/12/12/04/eyeglasses-442616_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/11/19/21/11/atlas-1052011_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

// On exporte l'application pour pouvoir y accéder depuis les autres fichiers du projet
module.exports = app;