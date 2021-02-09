const fs=require('fs');
const res=require('./mafonction.js');
//console.log(res.getName());
console.log(`utilisateur: ${res.getName()}`);


try{
fs.appendFileSync('message.txt', 'Bonjour 4WTIN4');
//console.log('Message "Bonjour NodeJS"! ajouté')

}catch(err){

    console.log(err);
}
