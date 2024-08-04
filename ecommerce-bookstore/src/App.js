import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import HomeInventory from './Components/HomeInventory';



function App() {
  const sampleItems = [
    {
      image: 'path/to/image1.jpg',
      name: 'Item 1',
      description: 'Description for item 1',
      price: '19.99'
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Item 2',
      description: 'Description for item 2',
      price: '29.99'
    },
    // Add more items as needed
  ];
  return (
    <div className="App">
      <Navbar/>
      <HomeInventory items={sampleItems} />
    </div>
  );
}

export default App;
