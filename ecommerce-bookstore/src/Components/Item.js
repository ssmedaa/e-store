import React from 'react';
import './bookItem.css'; // Assuming you have a CSS file for styling

const Item = ({ item }) => {
  return (
    <div class="cont">
    <div className="item">
      <img src={item.image} alt={item.name} className="item-image" />
      <h3 className="item-name">{item.name}</h3>
      {/* <p className="item-description">{item.description}</p> */}
      <span className="item-price">${item.price}</span>
      <button className='review-button'>Review Item</button>
    </div>
    </div>
  );
};

export default Item;
