// ########## Importation des packages nécessaires pour le fonctionnement des routes ##########
const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');
// ########## Fin de l'importation des packages ##########



// ########## Début de la configuration des routes ##########
router.post('/', stuffCtrl.createThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);
router.get('/:id', stuffCtrl.getOneThing);
router.get('/', stuffCtrl.getAllThings);
// ########## Fin de la configuration des routes ##########



// ########## Exportation des routes pour déclaration dans app.js ##########
module.exports = router;
// ########## Fin de l'exportation des routes ##########