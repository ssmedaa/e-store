SQL:

USE harrypotter;

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
CREATE TABLE Orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customerId BIGINT, NOT NULL,
    status VARCHAR(255) NOT NULL,
    billingAddress VARCHAR(255) NOT NULL,
    shippingAddress VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_customer FOREIGN KEY(customerId) REFERENCES Customer(cid)
);
CREATE TABLE OrderItems (
    orderId BIGINT AUTO_INCREMENT,
    bookId BIGINT, NOT NULL,PRIMARY KEY,
    purchaseQty INTEGER NOT NULL,
    CONSTRAINT fk_order FOREIGN KEY(orderId) REFERENCES Orders(id)

);
CREATE TABLE Customer (
    cid BIGINT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20),
    isAdmin BOOLEAN DEFAULT FALSE
);


INSERT INTO Books (id, title, url, originalPrice, salePrice, rating, stripeID, category, summary1, summary2) VALUES
(1, 'Atomic Habits by James Clear', 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg', 27.99, 15.99, 5, 'price_1OxDDtDH16DQa3RUr6Cx0O4z', 'Non-Fiction', "This best-selling book by James Clear provides practical strategies for forming good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.', 'Originally priced at $27.99, it\'s now available for $15.99, making it an affordable investment in self-improvement."),
(2, 'The Alchemist by Paulo Coelho', 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg', 16.99, NULL, 5, 'price_1OxESZDH16DQa3RUP6ie2WSI', 'Fiction', "Paulo Coelho\'s timeless novel tells the story of a young shepherd on a journey to discover the meaning of life, blending mysticism, wisdom, and self-discovery.', 'While the sale price is not specified, its original price of $16.99 reflects its enduring popularity and the profound impact it has on readers."),
(3, 'Where the Crawdads Sing by Delia Owens', 'https://m.media-amazon.com/images/I/81HA6TJ5K-L._AC_UF1000,1000_QL80_.jpg', 26.99, 19.99, 4.5, 'price_1OxEbWDH16DQa3RUcPvvw00A', 'Fiction', "This novel by Delia Owens combines a gripping murder mystery with a coming-of-age story set in the marshlands of North Carolina.', 'Initially priced at $26.99, it is now available for $19.99, making it a great choice for fans of literary fiction and suspense."),
(4, 'Becoming by Michelle Obama', 'https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg', 32.50, 20.55, 5, 'price_1OxEeBDH16DQa3RUsnad8xr9', 'Biography', "In her deeply personal memoir, former First Lady Michelle Obama shares the experiences that have shaped her, from her childhood in Chicago to her years in the White House.', 'Originally sold for $32.50, it is now available for $20.55, making it a valuable read for anyone interested in her inspiring story."),
(5, 'The Silent Patient by Alex Michaelides', 'https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg', 26.99, 16.99, 4.5, 'price_1OxEfdDH16DQa3RUgZ0bm87o', 'Fiction', "This psychological thriller by Alex Michaelides tells the story of a woman who shoots her husband and then never speaks another word, unraveling a shocking twist.', 'Originally priced at $26.99, the book’s sale price of $16.99 offers readers a thrilling experience at a discount."),
(6, 'Educated by Tara Westover', 'https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg', 28.00, 18.45, 4.5, 'price_1OxEgwDH16DQa3RUtURFmUra', 'Biography', "Tara Westover’s memoir chronicles her journey from a survivalist family in rural Idaho to earning a PhD from Cambridge University, despite never attending school until the age of seventeen.', 'With a significant price reduction from $28.00 to $18.00, this book offers a compelling and inspiring read about resilience and the power of education."),
(7, 'The Midnight Library by Matt Haig', 'https://m.media-amazon.com/images/I/71aiTCR69YS._AC_UF1000,1000_QL80_.jpg', 26.00, 13.99, 4, 'price_1OxEiEDH16DQa3RUJF91gV7W', 'Science', "Matt Haig\'s novel explores the choices that go into a life well-lived through a library that allows people to see how their lives might have turned out differently.', 'Originally priced at $26.00, the book’s current price of $13.99 makes it an accessible and thought-provoking read."),
(8, 'The Catcher in the Rye by J.D. Salinger', 'https://m.media-amazon.com/images/I/91fQEUwFMyL._AC_UF1000,1000_QL80_.jpg', 20.00, 12.99, 4.5, 'price_1OxEjMDH16DQa3RU2DUJnCoV', 'Fiction', "J.D. Salinger\'s classic novel follows the story of Holden Caulfield, a teenager navigating the complexities of adolescence and society\'s expectations.', 'Originally priced at $20.00, the book’s sale price of $12.99 offers readers a chance to own one of the most iconic novels of the 20th century."),
(9, 'The Vanishing Half by Brit Bennett', 'https://m.media-amazon.com/images/I/81ICvbFe2+L._AC_UF1000,1000_QL80_.jpg', 27.50, NULL, 4.5, 'price_1OxEljDH16DQa3RUIDckCMzw', 'Fiction', "Brit Bennett’s novel explores the lives of twin sisters who grow up in a small, southern black community and choose very different paths in life.', 'Though the sale price is not listed, the book\'s high rating and original price of $27.00 underscore its status as a bestseller."),
(10, 'The Four Winds by Kristin Hannah', 'https://m.media-amazon.com/images/I/91+CnxqOEQS._AC_UF1000,1000_QL80_.jpg', 28.99, NULL, 4, 'price_1OxEmtDH16DQa3RUigZ7XzeX', 'Fiction', "Set during the Great Depression, Kristin Hannah\'s novel tells a story of love, family, and resilience in the face of hardship.', 'Despite its original price of $28.99, the lack of a listed sale price suggests the book’s enduring popularity and critical acclaim."),
(11, 'A Promised Land by Barack Obama', 'https://m.media-amazon.com/images/I/91-6R0VxRiL._AC_UF1000,1000_QL80_.jpg', 45.99, NULL, 5, 'price_1OxEo2DH16DQa3RU8wVpZcwY', 'Biography', "In this highly anticipated memoir, former President Barack Obama reflects on his early political career, his presidency, and the moments that defined his leadership.', 'With no sale price listed and an original price of $45.00, it’s clear this book is a valuable piece of modern history and leadership."),
(12, 'The Book Thief by Markus Zusak', 'https://m.media-amazon.com/images/I/914cHl9v7oL._AC_UF1000,1000_QL80_.jpg', 14.99, 9.99, 4.5, 'price_1OxEoxDH16DQa3RUOmV2ImoL', 'Fiction', "Set in Nazi Germany, Markus Zusak\'s novel tells the powerful story of a young girl who finds solace in stealing books and sharing them with others, narrated by Death itself.', 'Initially valued at $14.99, the book is currently priced at $9.99, making it a moving and accessible read for all ages.");

INSERT INTO Orders (customerId, status, billingAddress, shippingAddress, price) VALUES
(1, 'Processing', '123 Elm St, Springfield', '456 Oak St, Springfield', 19.99),
(2, 'Shipped', '789 Pine St, Springfield', '789 Pine St, Springfield', 29.99),
(3, 'Delivered', '101 Maple St, Springfield', '102 Maple St, Springfield', 49.99),
(4, 'Processing', '202 Birch St, Springfield', '203 Birch St, Springfield', 39.99),
(5, 'Cancelled', '303 Cedar St, Springfield', '304 Cedar St, Springfield', 24.99),
(6, 'Shipped', '404 Walnut St, Springfield', '405 Walnut St, Springfield', 59.99),
(7, 'Delivered', '505 Ash St, Springfield', '506 Ash St, Springfield', 69.99),
(8, 'Processing', '606 Cherry St, Springfield', '607 Cherry St, Springfield', 14.99),
(9, 'Delivered', '707 Hickory St, Springfield', '708 Hickory St, Springfield', 79.99),
(10, 'Cancelled', '808 Poplar St, Springfield', '809 Poplar St, Springfield', 34.99),
(11, 'Shipped', '909 Fir St, Springfield', '910 Fir St, Springfield', 44.99);

INSERT INTO OrderItems (orderId, bookId, purchaseQty) VALUES
(1, 101, 2),  -- Order 1 has book 101 with quantity 2
(1, 102, 1),  -- Order 1 has book 102 with quantity 1
(2, 103, 3),  -- Order 2 has book 103 with quantity 3
(3, 104, 1),  -- Order 3 has book 104 with quantity 1
(3, 105, 2),  -- Order 3 has book 105 with quantity 2
(4, 106, 4),  -- Order 4 has book 106 with quantity 4
(5, 107, 1),  -- Order 5 has book 107 with quantity 1
(5, 108, 3),  -- Order 5 has book 108 with quantity 3
(6, 109, 2),  -- Order 6 has book 109 with quantity 2
(6, 110, 1),  -- Order 6 has book 110 with quantity 1
(6, 111, 5),  -- Order 6 has book 111 with quantity 5
(7, 101, 2),  -- Order 7 has book 101 with quantity 2
(8, 102, 1),  -- Order 8 has book 102 with quantity 1
(9, 103, 3),  -- Order 9 has book 103 with quantity 3
(9, 104, 1),  -- Order 9 has book 104 with quantity 1
(10, 105, 2), -- Order 10 has book 105 with quantity 2
(10, 106, 4), -- Order 10 has book 106 with quantity 4
(10, 107, 1), -- Order 10 has book 107 with quantity 1
(11, 108, 3), -- Order 11 has book 108 with quantity 3
(11, 109, 2), -- Order 11 has book 109 with quantity 2
(11, 110, 1); -- Order 11 has book 110 with quantity 1
