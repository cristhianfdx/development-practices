import mongoose from 'mongoose';

export function connect() {
    mongoose.connect('mongodb://localhost/mongo_graphql', { useNewUrlParser: true })
        .then(db => {
            console.log(">>> Database connected")
        })
        .catch(err => {
            console.error(err);
        });
}
