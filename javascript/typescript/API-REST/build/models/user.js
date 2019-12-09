"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class User {
    constructor() {
    }
    generateSchema() {
        return new mongoose_1.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true, lowercase: true },
            password: { type: String, required: true },
            username: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            posts: [{
                    type: mongoose_1.Schema.Types.ObjectId,
                    ref: 'posts'
                }]
        });
    }
    getModel() {
        return mongoose_1.model('users', this.generateSchema());
    }
}
exports.default = new User().getModel();
