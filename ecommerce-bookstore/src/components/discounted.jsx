import React, { useEffect, useState } from "react";
import Book from "./ui/book";

function Discounted() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all books from the backend
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books"); // Replace with your API endpoint
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError("Failed to load discounted books.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading discounted books...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h2>
              Discounted <span className="purple">Books</span>
            </h2>
          </div>
          <div className="books">
            {books
              .filter((book) => book.salePrice > 0) // Only show discounted books
              .slice(0, 8) // Limit to 8 books
              .map((book) => (
                <Book book={book} key={book.id}></Book>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discounted;
