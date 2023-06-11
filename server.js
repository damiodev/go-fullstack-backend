// On importe de package http de Node
const http = require('http');

// On crée un serveur avec la méthode createServer
const server = http.createServer((req, res) => { // req = requête du client, res = réponse du serveur
    res.end('Voici la réponse du serveur !'); //    On envoie une réponse au client
});

// On écoute le serveur sur le port 3000
server.listen(process.env.PORT || 3000); // On écoute le serveur sur le port 3000 en utilisant la variable d'environnement PORT ou le port 3000 par défaut