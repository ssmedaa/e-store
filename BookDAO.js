
const  db= require("../database");
const book =require('../models/Book');
class BookDAO{
    static async getAllBooks(){
        
            return this.db.query('SELECT * FORM Book');
        
    }

    static async getBookById(bookID){
       return this.db.query('SELECT * FROM Book WHERE bookID= ?', bookID);
        
    }
    static async updateBook(bookID, book){
        const {title, author, inventoryNumber, price, description, rating, ur, stripeID, category }=book;

        return this.db.query('UPDATE Book SET inventoryNumber=?, price=? WHERE bookUD=?',
        title, author, inventoryNumber,price, description,rating, url, stripeID,category, bookID
        );
    }

}
model.exports= BookDAO;
