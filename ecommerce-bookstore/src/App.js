import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import HomeInventory from './Components/HomeInventory';
import item1 from "./Assets/item1.png";
import Footer from './Components/Footer';
import { useState } from 'react';
import Login from './Components/login';
import SignInSignUp from './Components/SignInSignUp';



function App() {
  const sampleItems = [
    {
      image: item1,
      name: 'Abra ka Dabra',
      description: 'Description for item 1',
      price: '19.99',
      category: 'fiction',
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99',
      category: 'horror',
    },
    {
      image: item1,
      name: 'Item 3',
      description: 'Description for item 2',
      price: '29.99',
      category: 'horror',
    },
    {
      image: item1,
      name: 'Item 4',
      description: 'Description for item 2',
      price: '29.99',
      category: 'horror',
    },
    {
      image: item1,
      name: 'Item 5',
      description: 'Description for item 2',
      price: '29.99',
      category: 'horror',
    },
    {
      image: item1,
      name: 'Item 6',
      description: 'Description for item 2',
      price: '29.99',
      category: 'fiction',
    },
    {
      image: item1,
      name: 'Item 7',
      description: 'Description for item 2',
      price: '29.99',
      category: 'horror',
    },
    {
      image: item1,
      name: 'Item 8',
      description: 'Description for item 2',
      price: '29.99',
      category: 'comic',
    },
    {
      image: item1,
      name: 'Item 9',
      description: 'Description for item 2',
      price: '29.99',
      category: 'horror',
    },
    {
      image: item1,
      name: 'Item 10',
      description: 'Description for item 2',
      price: '29.99',
      category: 'comic',
    },
    {
      image: item1,
      name: 'Item 11',
      description: 'Description for item 2',
      price: '29.99',
      category: 'comic',
    },
    {
      image: item1,
      name: 'Item 12',
      description: 'Description for item 2',
      price: '29.99',
      category: 'horror',
    },
    {
      image: item1,
      name: 'Item 13',
      description: 'Description for item 2',
      price: '29.99',
      category: 'comic',
    },
    {
      image: item1,
      name: 'Item 14',
      description: 'Description for item 2',
      price: '29.99',
      category: 'horror',
    },
  ];
  const [filteredItems, setFilteredItems] = useState(sampleItems);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSearch = (searchTerm) => {
        const filtered = sampleItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const handleCategorySelect = (category) => {
        setFilteredItems(sampleItems.filter(item => item.category === category));
    };

    const handleLogin = (email, password) => {
      if (email === "xyz@gmail.com" && password === "password123") {
        setIsAuthenticated(true);
        return true;
      }
      return false;
    };
  
    const handleSignUp = (email, password) => {
      // Handle sign-up logic (e.g., API call to register user)
      // For now just log the user in
      setIsAuthenticated(true);
      return true;
    };
  

  return (
    <div className="App">
      {!isAuthenticated ? (
        <SignInSignUp onLogin={handleLogin} onSignUp={handleSignUp}/>
      ) : (
        <>
          <Navbar onSearch={handleSearch} onCategorySelect={handleCategorySelect} />
          <HomeInventory items={filteredItems} style={{ padding: '1.5rem' }} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;