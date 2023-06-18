// On importe express
const express = require('express');

// On crée une application express
const app = express();

// ######   MIDLEWARES (Ensemble de code qui traite les requêtes et réponses de l'application)   ###### //
app.use(express.json()); // Transforme le corps de la requête en objet JavaScript utilisable

// Ce middleware permet d'accéder à notre API depuis n'importe quelle origine ( '*' )
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // On donne l'accès à toutes les origines
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // On donne l'autorisation d'utiliser certains headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // On peut envoyer des requêtes avec les méthodes mentionnées
    next();
});

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body); // On récupère les données envoyées par le front-end
    res.status(201).json({ // On utilise la méthode json pour renvoyer une réponse au format JSON
        message: 'Objet créé !'
    });
});

// Ce middleware enregistre la fonction json de bodyParser comme middleware global pour l'application. Il transforme le corps de la requête en objet JavaScript utilisable.
app.get('/api/stuff', (req, res, next) => {
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

// ######   MONGODB   ###### //
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Damiodev:4nWiwRVzwXcnMTDJ@cluster0.4tiypvy.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);