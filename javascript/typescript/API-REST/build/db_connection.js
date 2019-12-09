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
const mongoose_1 = __importDefault(require("mongoose"));
class ConnectionDB {
    constructor() { }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const MONGO_URI = 'mongodb://localhost/api-ts';
            try {
                yield mongoose_1.default.connect(MONGO_URI || process.env.MONGODB_URL, { useNewUrlParser: true });
                console.log("Database Connected");
            }
            catch (error) {
                console.log("Database Error: ", error);
            }
            return mongoose_1.default;
        });
    }
}
exports.ConnectionDB = ConnectionDB;
