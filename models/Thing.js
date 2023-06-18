// Création du modèle de données pour les objets "Thing" à enregistrer dans la base de données
const mongoose = require('mongoose');

// On crée un schéma de données qui contient les champs souhaités pour chaque Thing, indique leur type ainsi que leur caractère (obligatoire ou non)
const thingSchema = mongoose.Schema({
    title: { type: String, required: true }, // On définit les champs de l'objet à enregistrer
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true }, // On définit le type de chaque champ
});

module.exports = mongoose.model('Thing', thingSchema); // On exporte le modèle terminé, on lui donne le nom de "Thing" et on lui applique le schéma de données défini ci-dessus.