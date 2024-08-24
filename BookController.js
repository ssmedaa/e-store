const bDAO= require('../dao/BookDAO');

class BookController{
    static async getAllBooks(req, res){
        const b= bDAO.getAllBooks();
        return res.json(b);
    }
    static async getBookById(req,res){
        const bid= bDAO.getBookById(req.params.bookID);
        return res.json({bid});

    }   

    static async updateBook(req, res){
        const bookUpd= new Book(
            req.body.title, req.body.author, req.body.inventoryNumber,req.body.price,req.body.description, req.body.rating,req.body.url, req.body.stripeID, req.body.category);

        const bidUpd=bDAO.updateBook(req.params.bookID, Book);

        return res.json({bidUpd});
    }

}
module.exports= BookController;

