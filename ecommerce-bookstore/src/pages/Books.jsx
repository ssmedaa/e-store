import React, { useState, useEffect } from "react";
import Book from "../components/ui/book";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Example categories
  const categories = ["Fiction", "Non-Fiction", "Science", "Biography"];

  useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  function filterBooks(filter) {
    let filteredBooks = [...initialBooks];

    // Apply category filter
    if (selectedCategories.length > 0) {
      filteredBooks = filteredBooks.filter((book) =>
        selectedCategories.includes(book.category)
      );
    }

    // Apply search filter
    if (searchQuery) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (filter) {
      case "LOW_TO_HIGH":
        return setBooks(
          filteredBooks.sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
        );
      case "HIGH_TO_LOW":
        return setBooks(
          filteredBooks.sort(
            (b, a) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
        );
      case "RATING":
        return setBooks(filteredBooks.sort((a, b) => b.rating - a.rating));
      case "ALPHABETICAL":
        return setBooks(
          filteredBooks.sort((a, b) => a.title.localeCompare(b.title))
        );
      default:
        setBooks(filteredBooks);
        break;
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  // Refilter books when categories or search query are updated
  useEffect(() => {
    filterBooks();
  }, [selectedCategories, searchQuery]);

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>

                {/* Search Bar */}
                <div className="search__bar">
                  <input
                    type="text"
                    placeholder="Search books by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filter and Sort Options */}
                <div className="filter__options">
                    <div className="sort__options">
                    <select
                      id="filter"
                      onChange={(event) => filterBooks(event.target.value)}
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Sort
                      </option>
                      <option value="ALPHABETICAL">Alphabetical</option>
                      <option value="LOW_TO_HIGH">Price, Low to High</option>
                      <option value="HIGH_TO_LOW">Price, High to Low</option>
                      <option value="RATING">Rating</option>
                    </select>
                  </div>
                  <div className="filter__categories">
                    <h4>Filter by Categories</h4>
                    {categories.map((category) => (
                      <div key={category}>
                        <input
                          type="checkbox"
                          id={category}
                          value={category}
                          onChange={() => handleCategoryChange(category)}
                        />
                        <label htmlFor={category}>{category}</label>
                      </div>
                    ))}
                  </div>

               
                </div>
              </div>

              <div className="books">
                {books && books.length > 0 ? (
                  books.map((book) => {
                    return <Book book={book} key={book.id} />;
                  })
                ) : (
                  <p>No books found</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
