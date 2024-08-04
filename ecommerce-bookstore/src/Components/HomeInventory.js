import React from 'react';
import Item from './Item';


const HomeInventory = ({ items }) => {
  return (
    <div className="home-inventory">
      <h2>Inventory</h2>
      <div className="grid-container">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeInventory;
