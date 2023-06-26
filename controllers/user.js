const bcrypt = require('bcryptjs'); // On importe bcrypt pour pouvoir chiffrer le mot de passe de l'utilisateur

const User = require('../models/user');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) // On utilise bcrypt pour hasher le mot de passe, on lui passe le mot de passe à hasher et le nombre de tours de l'agorithme de hashage
        .then(hash => {
            const user = new User({ // On crée un nouvel utilisateur avec l'adresse e-mail fournie et le hash de mot de passe créé précédemment
                email: req.body.email,
                password: hash
            });
            user.save() // On enregistre l'utilisateur dans la base de données
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error })); // On envoie une erreur en cas de problème avec le hashage
};

exports.login = (req, res, next) => {
    
};