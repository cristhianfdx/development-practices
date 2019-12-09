"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = __importDefault(require("../models/post"));
class PostRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield post_1.default.find();
            res.json(posts);
        });
    }
    getOnePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_1.default.findOne({ url: req.params.url });
            res.json(post);
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, url, content, image } = req.body;
            const post = new post_1.default({ title, url, content, image });
            yield post.save();
            res.json({ status: "Post created" });
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, url, content, image } = req.body;
            let updateAt = Date.now();
            yield post_1.default.findOneAndUpdate({ url: req.params.url }, { title, url, content, image, updateAt });
            res.json({ status: "Post updated" });
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield post_1.default.findOneAndDelete(req.params.url);
            res.json({ status: "Post deleted" });
        });
    }
    routes() {
        this.router.route('/')
            .get(this.getPosts)
            .post(this.createPost);
        this.router.route('/:url')
            .get(this.getOnePost)
            .put(this.updatePost)
            .delete(this.deletePost);
    }
}
exports.default = new PostRoutes().router;
