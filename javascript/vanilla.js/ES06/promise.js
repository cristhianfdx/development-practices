
var promise = new Promise(function(resolve, reject){
    /*const FLAG = 6;

    if(FLAG ==5){
        resolve("Todo OK");
    }else{
        reject(Error("Falla :("));
    }*/

    setTimeout(function(){
        resolve("OK");
    }, 3000);

    //setTimeout(resolve, 4000, "Todo Bien");
});

promise.then(function(responde){
    console.log(responde);
}, function(error){
    console.log(error);
});