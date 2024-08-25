import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from "../components/ui/book";

function BestCards({ id }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch books from the backend
    axios.get("http://localhost:3000/api/books")
      .then(response => {
        setBooks(shuffleArray(response.data)); // Shuffle books after fetching
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        setError("There was an error fetching the books!");
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  // Function to shuffle an array
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {books
        .filter((book) => book.id !== id) // Exclude the current book by ID
        .slice(0, 4) // Pick 4 random books
        .map((book) => (
          <Book book={book} key={book.id} />
        ))}
    </>
  );
}

export default BestCards;
