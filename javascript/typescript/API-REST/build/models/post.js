"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Post {
    constructor() {
    }
    generateSchema() {
        return new mongoose_1.Schema({
            title: { type: String, required: true },
            url: { type: String, required: true, unique: true, lowercase: true },
            content: { type: String, required: true },
            image: String,
            createAt: { type: Date, default: Date.now },
            updateAt: Date
        });
    }
    getModel() {
        return mongoose_1.model('posts', this.generateSchema());
    }
}
exports.default = new Post().getModel();
