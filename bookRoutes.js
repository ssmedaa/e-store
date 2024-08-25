const express= require('express');

const {
    getAllBooks,
    getBookById,
    updateBook
  } = require('../controllers/bookController');
  
  const api= express.Router();

  api.get('/')
//api endpoint
api.get('/', getAllBooks);
api.get('/:id', getBookById);
api.put('/:id',updateBook);



module.exports=api;
