import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String
});

const modelBook = mongoose.model('books', BookSchema);

export default modelBook;