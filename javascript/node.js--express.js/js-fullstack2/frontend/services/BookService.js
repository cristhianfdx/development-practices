class BookService{

    constructor(){
        this.URI = "/api/books";
    }

    async getBooks(){
        const response = await fetch(this.URI);
        const data = await response.json();
        return data;
    }

    async postBook(book){

        const response = await fetch(this.URI, {
            method: "POST",
            body : book            
        });

        const data = await response.json();
        console.log(data);        
    }

    async deleteBook(bookId){
        const response = await fetch(`${this.URI}/${bookId}`, {
            method : "DELETE",
            headers : {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
    }
}

export default BookService;