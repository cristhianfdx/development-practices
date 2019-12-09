import {Schema, model} from 'mongoose';

class Post{
    

    constructor(){        
    }

    generateSchema(){
        return new Schema({
            title: {type: String, required: true},
            url: {type: String, required: true, unique: true, lowercase: true},
            content: {type: String, required: true},
            image: String,
            createAt: {type: Date, default: Date.now},
            updateAt: Date
        });
    }

    getModel(){
        return model('posts', this.generateSchema());
    }
}

export default new Post().getModel();