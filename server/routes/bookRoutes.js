const express = require('express');
const {
  addBook,
  getBookById,
  getAllBooks,
  updateBookById,
  deleteBookById
} = require('../controllers/bookController'); // Import the book controller functions

const router = express.Router();

// Define the routes and map them to the controller functions
router.post('/', addBook);  // Route to add a new book
router.get('/', getAllBooks);  // Route to get all books
router.get('/:id', getBookById);  // Route to get a single book by ID
router.put('/:id', updateBookById);  // Route to update a book by ID
router.delete('/:id', deleteBookById);  // Route to delete a book by ID

module.exports = router;
