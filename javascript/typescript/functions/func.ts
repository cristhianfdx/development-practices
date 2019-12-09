function add(num1:number, num2:number){
    let addValue:number = num1 + num2;
    console.log(`the add is : ${addValue}`);
}

//add(5, 4);

function greet(name:string){
    console.log(`Hello my name is ${name.toUpperCase()}`);
}

//greet("Cristhian");

let message:string = "test 1";

if(true){
    let message:string = "test 2";
}

//console.log(message);

//Promises

let prom = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
        reject();
    }, 1500);
});

//console.log("first part");
//prom.then(()=> console.log("termino bien"), ()=> console.log("termino mal"));

interface Product{
    name: string;
    description: string;
}

function listProducts(product:Product){
    console.log(`mi producto es ${product.name} ${product.description}`)
}

let myproduct:Product={
    name: "test1",
    description: "test description"
}

//listProducts(myproduct);