// ########## Importation des packages nécessaires pour le fonctionnement des routes ##########
const express = require('express');
const router = express.Router();
const Thing = require('../models/Thing');
// ########## Fin de l'importation des packages ##########


// ########## Début de la configuration des routes ##########
router.post('/', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

router.put('/:id', (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
});

router.delete('/:id', (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

router.get('/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
});

router.get('/', (req, res, next) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});
// ########## Fin de la configuration des routes ##########



// ########## Exportation des routes pour déclaration dans app.js ##########
module.exports = router;
// ########## Fin de l'exportation des routes ##########