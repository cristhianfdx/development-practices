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
const user_1 = __importDefault(require("../models/user"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield user_1.default.find();
            res.json(posts);
        });
    }
    getOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({ username: req.params.username })
                .populate('posts');
            res.json(user);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_1.default(req.body);
            yield user.save();
            res.json({ status: "User created" });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //let updateAt = Date.now();
            yield user_1.default.findOneAndUpdate({ username: req.params.username }, req.body);
            res.json({ status: "User updated" });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_1.default.findOneAndDelete(req.params.username);
            res.json({ status: "Post deleted" });
        });
    }
    routes() {
        this.router.route('/')
            .get(this.getUsers)
            .post(this.createUser);
        this.router.route('/:username')
            .get(this.getOneUser)
            .put(this.updateUser)
            .delete(this.deleteUser);
    }
}
exports.default = new UserRoutes().router;
