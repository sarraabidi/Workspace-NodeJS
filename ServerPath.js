//Importer la bibliothèque http

var http=require ('http');
const url=require('url');
const querystring=require('querystring');

// créer le serveur 

var server= http.createServer(
    function (req, res){

/*
res.writeHead(200, {
    "Content-Type": "text/html ; charset=utf-8"
});


res.write("<p>Ceci est la réponse su serveur<strong>HTTP</strong></p>");
res.end();

*/

var path=url.parse(req.url).pathname;
console.log(path);



var params=url.parse(req.url).query;
//console.log(params);

var params=querystring.parse(url.parse(req.url).query);
console.log(params['id']);


switch (path) {
    case "/":
        res.writeHead(200, {
            "Content-Type": "text/html ; charset=utf-8"
        });
        
        
        res.write("<p>Page d'acceuil</p>");  
    
        break;  

        case "/participants":
        res.writeHead(200, {
            "Content-Type": "text/html ; charset=utf-8"
        });
        
        if (!params['id']) {
            res.write("<p>Liste des participants</p>");  
   
        }
        else
        res.write("<p> participant avec id</p>"+params['id']);  
    
        break;

    default:

            res.writeHead(404, {
                "Content-Type": "text/html ; charset=utf-8"
            });
            
            
            res.write("<p>Page introuvable</p>");  
               break;
}

});
//Configurer le port
server.listen(8080);  