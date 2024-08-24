import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import HomeInventory from './Components/HomeInventory';
import item1 from "./Assets/item1.png";
import Footer from './Components/Footer';
import { useState } from 'react';
import Login from './Components/login';



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

  const handleSearch = (searchTerm, category) => {
    const filtered = sampleItems.filter(item => {
      if(searchTerm === null){
        return;
      }
      const matchesSearchTerm = searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearchTerm;
    });
    setFilteredItems(filtered);
  };

  const handleCategorySelect = (category) => {
    // Placeholder function, replace with your own logic to filter items by category
    setFilteredItems(sampleItems.filter(item => item.category === category));
  };  // This is a placeholder function, you would replace it with your own logic to filter items by category when the dropdown is clicked.

  

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} onCategorySelect={(category) => handleCategorySelect('', category)} />
      <HomeInventory items={filteredItems} style={{padding: '1.5rem'}}/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;