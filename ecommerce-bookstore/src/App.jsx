import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import TopScroll from "./components/ui/TopScroll"
import { useEffect, useState } from "react";
import { books } from "./data";
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
import AdminConsole from "./pages/AdminConsole";
import TempComponent from "./pages/TempComponent";
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
    const [added, setAdded] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cart,setCart]=useState([])

    function changeQuanity(book,quantity){
      setCart(cart.map(item=>{
        if(book.id===item.id){
          return{...item, quantity:+quantity,}
        }
        else{
          return{
            ...item
          }
        }
      }))
      console.log(book,quantity)
    }
    
    function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }
   function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
        console.log(counter)

    return counter;
  }
 
  
function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
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
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
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
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/customer/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setIsAdmin(data.isAdmin); // Assuming your response contains `isAdmin`
        return data;
      } else {
        throw new Error('Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      return null;
    }
  };

       

  const handleSignUp = (email, password) => {
    // Logic for sign up
    return true; // Or false depending on sign up success
  };

function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id);
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
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
     setAdded(true)
  }
//   useEffect(() => {
//     // Check if user is logged in and is an admin
//     const checkAdminStatus = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             if (token) {
//                 const response = await fetch('http://localhost:3000/api/customer/check-admin', {
//                     method: 'GET',
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                     },
//                 });
//                 if (response.ok) {
//                     const data = await response.json();
//                     console.log('Admin status:', data.isAdmin); // Debugging line
//                     setIsAdmin(data.isAdmin);
//                 }
//             }
//         } catch (err) {
//             console.error('Error checking admin status:', err);
//         }
//     };
//     checkAdminStatus();
// }, []);

console.log('Is Admin:', isAdmin); // Debugging line

useEffect(()=>{
  console.log(cart)
},[cart])
return (
  <Router>
      <TopScroll />
      <div className="App">
          <Nav numberOfItems={numberOfItems()} />
          <Routes>
              <Route path="/" Component={Home} />
              <Route path="/books" Component={() => <Books books={books} />} />
              <Route path="/books/:id" Component={() => (<BookInfo books={books} addItemToCart={addItemToCart} key={books.id} cart={cart} removeItem={removeItem} totals={calcPrices()} updateSmallCart={updateSmallCart} />)} />
              <Route path="/cart" Component={() => <Cart cart={cart} updateCart={updateCart} removeItem={removeItem} totals={calcPrices()} />} />
              <Route path="/login" element={<SignInSignUp onLogin={handleLogin} onSignUp={handleSignUp} />} />
              { <Route path="/admin" element={<TempComponent/>} />}
          </Routes>
          <Footer />
      </div>
  </Router>
)
}

export default App;
