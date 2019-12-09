import './css/bootstrap.css';
import './css/app.css';

import UI from './UI';

document.addEventListener('DOMContentLoaded', ()=>{
    const ui = new UI();
    ui.renderBooks();
});

document.getElementById('frm_book')
    .addEventListener('submit', e => {
        //Data Form
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);

        const ui = new UI();
        ui.addNewBook(formData);
        ui.renderMessage("New Book Added", "success", 3000);             

        e.preventDefault();
    });

document.getElementById('books_cards')
    .addEventListener('click', element=>{

        if(element.target.classList.contains('delete')){
            let id = element.target.getAttribute("_id");
            const ui = new UI();
            ui.deleteBook(id);
            ui.renderMessage("Book Deleted", "danger", 2000);   
        }

        element.preventDefault();
    });