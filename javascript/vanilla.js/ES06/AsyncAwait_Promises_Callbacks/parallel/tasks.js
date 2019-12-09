const util = require('util');
const sleep = util.promisify(setTimeout)

module.exports ={
    async taskOne(){

        try {
            throw new Error("Some Problem");
            await sleep(4000);
            
            return "ONE VALUE";
            
        } catch (error) {
            console.log(error.message);
        }
        
    },
    async taskTwo(){
        await sleep(2000);
        return "TWO VALUE";
    }
}