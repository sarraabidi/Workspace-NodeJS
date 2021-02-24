/* function placeAnOrder(orderNumber){
console.log("Customer order:", orderNumber);
cookAndDeliverFood(function(){

    console.log("Delivered food order:", 
    orderNumber);
})

}

//stimule a 5 second operation
function cookAndDeliverFood(callback){

    setTimeout(callback,5000);
}
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5); */


/* 
console.log("A");
setImmediate( _=>console.log("B"));
setImmediate(_=>console.log("c"));
console.log("D");
 */

setImmediate( _=>setTimeout((_=>console.log("A")), 0));
setImmediate( _=>console.log("B"));
setImmediate( _=>setTimeout((_=>console.log("C")), 10));
setImmediate( _=>console.log("D"));
