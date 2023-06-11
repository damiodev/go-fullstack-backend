// On importe express
const express = require('express');

// On crée une application express
const app = express();

// On crée un middleware pour ajouter des headers à toutes les requêtes afin d'éviter les erreurs de CORS
app.use((req, res) => { // req contient les informations sur la requête entrante, res permet de renvoyer une réponse
    res.json({ message: 'Votre requête a bien été reçue !' }); // On utilise la méthode json de la réponse pour renvoyer une réponse au format JSON
});

// On exporte l'application pour pouvoir y accéder depuis les autres fichiers du projet
module.exports = app;