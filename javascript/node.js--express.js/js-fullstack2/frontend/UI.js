import {format} from 'timeago.js'

import BookService from './services/BookService';
const bookService = new BookService();

class UI {

    async renderBooks(){
        const books = await bookService.getBooks();
        const booksContainer = document.getElementById('books_cards');
        booksContainer.innerHTML = "";

        books.forEach(book => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
                <div class="card m-2">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${book.imagePath}" alt="" class="img-fluid" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-block px-2">
                                <h4 class="card-title">${book.title}</h4>
                                <p class="card-text">${book.author}</p>
                                <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">${format(book.created_at)}</div>
                </div>
            `;

            booksContainer.appendChild(div);
        });

    }

    async addNewBook(book){
        await bookService.postBook(book);
        this.clearBookForm();
        this.renderBooks();
    }

    clearBookForm(){
        document.getElementById('frm_book').reset();
    }

    renderMessage(message, color, seconds){
        const div = document.createElement('div');
        div.className = `alert alert-${color} message`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-4');
        const bookForm = document.querySelector('#frm_book');

        container.insertBefore(div, bookForm);
        setTimeout(()=>{
            document.querySelector('.message').remove();
        }, seconds);

    }

    async deleteBook(bookId){
        await bookService.deleteBook(bookId);
        this.renderBooks();
    }

}

export default UI;