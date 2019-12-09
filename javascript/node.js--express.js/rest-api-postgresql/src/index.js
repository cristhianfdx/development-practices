import app from './app';


async function main(port){

    await app.listen(port);
    console.log("Server on port", port); 
    
}

main(process.env.PORT || 4000);


