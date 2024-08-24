import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './navbars.css'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap's default styles
import SearchBar from './SearchBar';

const NavBar = ({ onCategorySelect, onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [quantity] = useState(0);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category); // Call the function passed from parent to filter by category
  };

  return (
    <nav className="custom-navbar">
      <div className="section1">
        <img src="path/to/logo.png" alt="BooksBy logo" className="logo" />
        <div className="group">
          <SearchBar onSearch={onSearch} category={selectedCategory} />
        </div>
        <div className="right">
          <div className="cart">
            <span className="qty">{quantity}</span>
            {/* Cart icon */}
          </div>
          <div className="user">
            {/* User icon */}
          </div>
        </div>
      </div>
      <div className="section2">
        <Dropdown onSelect={handleCategorySelect}>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>fiction</Dropdown.Item>
            <Dropdown.Item>horror</Dropdown.Item>
            <Dropdown.Item>comic</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a href="/contact">Contact Us</a>
        <a href="/faqs">FAQs</a>
      </div>
    </nav>
  );
};

export default NavBar;
