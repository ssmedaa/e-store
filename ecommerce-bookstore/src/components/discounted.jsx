import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./ui/book";

function Discounted() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch books from the backend
    axios.get("http://localhost:3000/api/books")
      .then(response => {
        setBooks(response.data); // Set the books data
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        setError("There was an error fetching the books!");
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
              .filter((book) => book.salePrice > 0) // Filter for discounted books
              .slice(0, 8) // Show only the first 8 discounted books
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discounted;
