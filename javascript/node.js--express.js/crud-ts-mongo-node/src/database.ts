import mongoose from 'mongoose';

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/ts-app',{useNewUrlParser: true});
        console.log("Database is connected");
    }catch(err){
        console.error(err);
    }
}

export default connect;