import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import HomeInventory from './Components/HomeInventory';
import item1 from "./Assets/item1.png";
import Footer from './Components/Footer';



function App() {
  const sampleItems = [
    {
      image: item1,
      name: 'Abra ka Dabra',
      description: 'Description for item 1',
      price: '19.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: item1,
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    // Add more items as needed
  ];
  return (
    <div className="App">
      <Navbar/>
      <HomeInventory items={sampleItems} style={{padding: '1.5rem'}}/>
      <Footer/>
    </div>
  );
}

export default App;
