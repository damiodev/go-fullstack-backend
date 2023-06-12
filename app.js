// On importe express
const express = require('express');

// On crée une application express
const app = express();

// ######   MIDLEWARES (Ensemble de code qui traite les requêtes et réponses de l'application)   ###### //

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: '',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: '',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

// On exporte l'application pour pouvoir y accéder depuis les autres fichiers du projet
module.exports = app;