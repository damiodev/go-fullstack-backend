// On importe de package http de Node
const http = require('http');
// On importe notre application express
const app = require('./app');

app.set('port', process.env.PORT || 3000); // On dit à l'application sur quel port elle va tourner
// On crée un serveur avec la méthode createServer
const server = http.createServer(app); // On passe l'application express à notre serveur

// On écoute le serveur sur le port 3000
server.listen(process.env.PORT || 3000); // On écoute le serveur sur le port 3000 en utilisant la variable d'environnement PORT ou le port 3000 par défaut