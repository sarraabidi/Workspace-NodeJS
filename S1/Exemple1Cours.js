var read=require('read-file');

//mode Synch
console.time('fct');
var resultat= read.sync('foo.txt','utf-8');

console.log(resultat);
console.timeEnd('fct');


//mode Asyn
console.time('fct2');
  read('foo.txt', 'utf-8', function(err, resultat){

console.log(resultat);

})
console.timeEnd('fct2');
