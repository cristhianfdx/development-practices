function add(num1, num2) {
    var addValue = num1 + num2;
    console.log("the add is : " + addValue);
}
//add(5, 4);
function greet(name) {
    console.log("Hello my name is " + name.toUpperCase());
}
//greet("Cristhian");
var message = "test 1";
if (true) {
    var message_1 = "test 2";
}
//console.log(message);
//Promises
var prom = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();
        reject();
    }, 1500);
});
function listProducts(product) {
    console.log("mi producto es " + product.name + " " + product.description);
}
var myproduct = {
    name: "test1",
    description: "test description"
};
//listProducts(myproduct);
