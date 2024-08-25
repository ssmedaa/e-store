import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import TopScroll from "./components/ui/TopScroll";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInSignUp from "./pages/SignInSignUp";
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
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [cart, setCart] = useState([]);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    // Fetch books from the backend
    axios.get("http://localhost:3000/api/books")
      .then(response => {
        setBooks(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        setError("There was an error fetching the books!");
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (book.id === item.id) {
        return {
          ...item,
          quantity: +quantity,
        };
      } else {
        return {
          ...item,
        };
      }
    }));
    console.log(book, quantity);
  }

  function removeItem(item) {
    setCart(oldCart => oldCart.filter(cartItem => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += +item.quantity;
    });
    console.log(counter);
    return counter;
  }

  function updateCart(item, newQuantity) {
    setCart(oldCart =>
      oldCart.map(oldItem => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: parseInt(newQuantity),
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  function updateSmallCart(item, newQuantity) {
    setCart(oldCart =>
      oldCart.map(oldItem => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: parseInt(newQuantity),
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  function calcPrices() {
    let total = 0;
    cart.forEach(item => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  const handleLogin = (email, password) => {
    // Logic for login
    return true; // Or false depending on login success
  };

  const handleSignUp = (email, password) => {
    // Logic for sign up
    return true; // Or false depending on sign up success
  };

  function addItemToCart(book) {
    const dupeItem = cart.find(item => item.id === book.id);
    setCart(oldCart =>
      dupeItem
        ? [
            ...oldCart.map(item => {
              return item.id === dupeItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...book, quantity: 1 }]
    );
    setAdded(true);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Router>
      <TopScroll />
      <div className="App">
        <Nav numberOfItems={numberOfItems()}></Nav>
        <Routes>
          <Route path="/" Component={Home}></Route>
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
          ></Route>
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
          <Route
            path="/login"
            element={<SignInSignUp onLogin={handleLogin} onSignUp={handleSignUp} />}
          />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
