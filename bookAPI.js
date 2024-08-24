const ex= require('express');
const api= express.Router();
const BookController = require('../controllers/BookController');

//api endpoint
api.get('/book', BookController.getAllBooks);
api.get('/book/:bookID', BookController.getBookById);
api.get('/book', BookController.addBook);
api.put('/book/:bookID',BookController.updateBook);



module.exports=bookAPI;
