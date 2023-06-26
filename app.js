// ########## Importation des packages nécessaires pour le fonctionnement du serveur ##########
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
// ########## Fin de l'importation des packages ##########



// ########## Connexion à la base de données MongoDB ##########
mongoose.connect('mongodb+srv://Damiodev:4nWiwRVzwXcnMTDJ@cluster0.4tiypvy.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
// ########## Fin de la connexion à la base de données MongoDB ##########



const app = express();



// ########## Configuration des headers pour éviter les erreurs CORS ##########
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
// ########## Fin de la configuration des headers ##########



// ########## Début de la configuration de l'application ##########
app.use(bodyParser.json());
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
// ########## Fin de la configuration de l'application ##########



// ########## Exportation de l'application pour déclaration dans server.js ##########
module.exports = app;
// ########## Fin de l'exportation de l'application ##########