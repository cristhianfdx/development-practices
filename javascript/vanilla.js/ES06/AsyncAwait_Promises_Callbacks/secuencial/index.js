const {taskOne, taskTwo} = require('./tasks');


async function main() {

    try{

        console.time("Measuring time");
        console.log(`Task one returned : ${await taskOne()}`);
        console.log(`Task two returned : ${await taskTwo()}`);
        console.timeEnd("Measuring time");

    }catch(err){
        console.log(err);
    }
    
}

main();