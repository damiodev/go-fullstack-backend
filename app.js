// On importe express
const express = require('express');

// On crée une application express
const app = express();

// ######   MIDLEWARES (Ensemble de code qui traite les requêtes et réponses de l'application)   ###### //

// 1. Enregistrement "Requête reçue !" dans la console et passe à l'exécution du middleware suivant
app.use((req, res, next) => { // req contient les informations sur la requête entrante, res permet de renvoyer une réponse, next est une fonction qui permet de passer à l'application suivante
    console.log('Requête reçue !');
    next(); // On appelle la fonction next pour passer à l'application suivante
});

// 2. Enregistrement "Réponse envoyée avec succès !" dans la console et passe à l'exécution du middleware suivant
app.use((req, res, next) => {
    res.status(201); // On utilise la méthode status pour préciser le code de statut de la réponse
    next();
});

// 3. Enregistrement "Votre requête a bien été reçue !" dans la console et passe à l'exécution du middleware suivant
app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); // On utilise la méthode json de la réponse pour renvoyer une réponse au format JSON
    next();
});

// 4. Enregistrement "Réponse envoyée avec succès !" dans la console
app.use((req, res) => {
    console.log('Réponse envoyée avec succès !'); // On envoie une réponse, donc plus besoin d'appeler la fonction next
});

// On exporte l'application pour pouvoir y accéder depuis les autres fichiers du projet
module.exports = app;