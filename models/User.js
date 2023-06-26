const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); // On importe le package mongoose-unique-validator pour s'assurer que deux utilisateurs ne peuvent pas utiliser la même adresse e-mail

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator); // On applique le validateur au schéma avant d'en faire un modèle

module.exports = mongoose.model('User', userSchema);