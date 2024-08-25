import React, { useEffect, useState } from 'react';
import Book from "../components/ui/book";

function BestCards() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch books from the backend or generate random books
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books"); // Replace with your actual API endpoint
        const data = await response.json();

        // Shuffle the array and get the first 4 random books
        const shuffledBooks = data.sort(() => 0.5 - Math.random()).slice(0, 4);
        setBooks(shuffledBooks);
      } catch (err) {
        setError("Failed to load recommended books.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading recommended books...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </>
  );
}

export default BestCards;
