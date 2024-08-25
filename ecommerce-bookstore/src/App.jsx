import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import TopScroll from "./components/ui/TopScroll";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
  faX,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
  faX
);

function App() {
  const [books, setBooks] = useState([]); // State to hold books data from backend
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  // Fetch books from the backend API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books");
        setBooks(response.data); // Set the books data from the response
      } catch (error) {
        setError("Failed to load books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Add an item to the cart
  function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id);
    setCart((oldCart) =>
      dupeItem
        ? oldCart.map((item) =>
            item.id === dupeItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...oldCart, { ...book, quantity: 1 }]
    );
    setAdded(true);
  }

  // Remove an item from the cart
  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  // Update the quantity of an item in the cart
  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) =>
        oldItem.id === item.id
          ? { ...oldItem, quantity: parseInt(newQuantity) }
          : oldItem
      )
    );
  }

  // Update the quantity of an item in a small cart
  function updateSmallCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) =>
        oldItem.id === item.id
          ? { ...oldItem, quantity: parseInt(newQuantity) }
          : oldItem
      )
    );
  }

  // Calculate prices (subtotal, tax, total)
  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  // Get the total number of items in the cart
  function numberOfItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Log the cart content whenever it changes
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // Handle loading and error states
  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Router>
      <TopScroll />
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/books" Component={() => <Books books={books} />} />
          <Route
            path="/books/:id"
            Component={() => (
              <BookInfo
                books={books}
                addItemToCart={addItemToCart}
                key={books.id}
                cart={cart}
                removeItem={removeItem}
                totals={calcPrices()}
                updateSmallCart={updateSmallCart}
              />
            )}
          />
          <Route
            path="/cart"
            Component={() => (
              <Cart
                cart={cart}
                updateCart={updateCart}
                removeItem={removeItem}
                totals={calcPrices()}
              />
            )}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
