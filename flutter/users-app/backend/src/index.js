const app = require('./app.js');
const { connect } = require('./database');

async function start(){
    // Database connection
    await connect();
    // Start Server
    await app.listen(4000);
    console.log("Server on port 4000");
}

start();
