import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/graphql-test", {
    useNewUrlParser: true
}).then(()=> console.log("Database connected"))
.catch(err=> console.log(err));

const Schema = mongoose.Schema;

const carSchema = new Schema({
    name: String    
});

mongoose.model('cars', carSchema);

export default mongoose;