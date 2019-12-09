import {Schema, model} from 'mongoose';

class User{
    

    constructor(){        
    }

    generateSchema(){
        return new Schema({
            name: {type: String, required: true},
            email: {type: String, required: true, unique: true, lowercase: true},
            password: {type: String, required: true},
            username: {type: String, required: true},
            createdAt: {type: Date, default: Date.now},
            posts: [{
                type: Schema.Types.ObjectId,
                ref: 'posts'
            }]                      
        });
    }

    getModel(){
        return model('users', this.generateSchema());
    }
}

export default new User().getModel();