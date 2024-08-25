const Book = require('../models/book'); // Import your Book model

// Controller for adding a new book
const addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body); // Create a new book using the request body data
    res.status(200).json(newBook); // Respond with the created book
  } catch (error) {
    res.status(500).json({ error: 'Failed to add book' }); // Handle error in case of failure
  }
};

// Controller for fetching all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll(); // Fetch all books from the database
    res.status(200).json(books); // Respond with the list of books
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve books' }); // Handle error in case of failure
  }
};

// Controller for fetching a book by ID
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id); // Find a book by its primary key (ID)

    if (!book) {
      return res.status(404).json({ error: 'Book not found' }); // Handle case where book is not found
    }

    res.status(200).json(book); // Respond with the found book
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve book' }); // Handle error in case of failure
  }
};

// Controller for updating a book by ID
const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id); // Find a book by its primary key (ID)

    if (!book) {
      return res.status(404).json({ error: 'Book not found' }); // Handle case where book is not found
    }

    // Update the book with new data from the request body
    await book.update(req.body);

    res.status(200).json(book); // Respond with the updated book
  } catch (error) {
    res.status(500).json({ error: 'Failed to update book' }); // Handle error in case of failure
  }
};

// Controller for deleting a book by ID
const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id); // Find a book by its primary key (ID)

    if (!book) {
      return res.status(404).json({ error: 'Book not found' }); // Handle case where book is not found
    }

    await book.destroy(); // Delete the book from the database
    res.status(200).json({ message: 'Book deleted successfully' }); // Respond with success message
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' }); // Handle error in case of failure
  }
};

module.exports = { addBook, getAllBooks, getBookById, updateBookById, deleteBookById };
