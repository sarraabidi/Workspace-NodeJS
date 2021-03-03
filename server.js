//Importer la bibliothèque http

var http=require ('http');

// créer le serveur

var server= http.createServer(
    function (req, res){

res.writeHead(200);
res.end("Salut les webistes !");

});

//Configurer le port
server.listen(8080);