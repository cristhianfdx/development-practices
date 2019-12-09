import Mongoose from 'mongoose';

export class ConnectionDB{    

    constructor(){}

    async getConnection(){
        const MONGO_URI = 'mongodb://localhost/api-ts';
        try {
            await Mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {useNewUrlParser: true});
            console.log("Database Connected");            
        } catch (error) {
            console.log("Database Error: ", error);
        }
        return Mongoose;
    }
}