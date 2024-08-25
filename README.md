# E-Store Project

This project is a full-stack e-commerce application built using Node.js, Express, React, and MySQL.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your local machine
- MySQL installed and running

### Installing

```bash
git clone https://github.com/ssmedaa/e-store.git
cd e-store
cd server
npm install
cd ../ecommerce-bookstore
npm install

   ## SQL Scripts
## SQL Scripts

```sql
-- Select the database
USE harrypotter;

-- Create Books Table
CREATE TABLE Books (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    originalPrice DECIMAL(10, 2) NOT NULL,
    salePrice DECIMAL(10, 2),
    rating DECIMAL(2, 1) NOT NULL,
    stripeID VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    summary1 TEXT NOT NULL,
    summary2 TEXT
);

-- Create Orders Table
CREATE TABLE Orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customerId BIGINT NOT NULL,
    status VARCHAR(255) NOT NULL,
    billingAddress VARCHAR(255) NOT NULL,
    shippingAddress VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_customer FOREIGN KEY (customerId) REFERENCES Customer(cid)
);

-- Create OrderItems Table
CREATE TABLE OrderItems (
    orderId BIGINT NOT NULL,
    bookId BIGINT NOT NULL,
    purchaseQty INTEGER NOT NULL,
    PRIMARY KEY (orderId, bookId),
    CONSTRAINT fk_order FOREIGN KEY (orderId) REFERENCES Orders(id)
);

-- Create Customer Table
CREATE TABLE Customer (
    cid BIGINT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20),
    isAdmin BOOLEAN DEFAULT FALSE
);

-- Insert Data into Books Table
INSERT INTO Books (id, title, url, originalPrice, salePrice, rating, stripeID, category, summary1, summary2) VALUES
(1, 'Atomic Habits by James Clear', 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg', 27.99, 15.99, 5, 'price_1OxDDtDH16DQa3RUr6Cx0O4z', 'Non-Fiction', "This best-selling book by James Clear provides practical strategies for forming good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.", "Originally priced at $27.99, it's now available for $15.99, making it an affordable investment in self-improvement."),
(2, 'The Alchemist by Paulo Coelho', 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg', 16.99, NULL, 5, 'price_1OxESZDH16DQa3RUP6ie2WSI', 'Fiction', "Paulo Coelho's timeless novel tells the story of a young shepherd on a journey to discover the meaning of life, blending mysticism, wisdom, and self-discovery.", "While the sale price is not specified, its original price of $16.99 reflects its enduring popularity and the profound impact it has on readers."),
-- Add more rows as needed...

-- Insert Data into Orders Table
INSERT INTO Orders (customerId, status, billingAddress, shippingAddress, price) VALUES
(1, 'Processing', '123 Elm St, Springfield', '456 Oak St, Springfield', 19.99),
(2, 'Shipped', '789 Pine St, Springfield', '789 Pine St, Springfield', 29.99),
-- Add more rows as needed...

-- Insert Data into OrderItems Table
INSERT INTO OrderItems (orderId, bookId, purchaseQty) VALUES
(1, 101, 2),  -- Order 1 has book 101 with quantity 2
(1, 102, 1),  -- Order 1 has book 102 with quantity 1
-- Add more rows as needed...
