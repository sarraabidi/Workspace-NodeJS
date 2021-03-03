//Importer la bibliothèque http

const http=require ('http');

// créer le serveur 

var server= http.createServer(
    function (req, res){

  //res.writeHead(200);
//res.end("Salut les webistes !");

// type de données

res.writeHead(200, {
    "Content-Type": "text/html ; charset=utf-8"
});
//res.end("<p>Ceci est la réponse su serveur<strong>HTTP</strong></p>");
// fonction write

res.write("<p>Ceci est la réponse su serveur<strong>HTTP</strong></p>");
res.end();

});


//Configurer le port
server.listen(8080);