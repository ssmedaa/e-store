import React, { useState, useEffect } from 'react';
import temp from "./temp.css";

function TempComponent() {
    const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/customer', {
            method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setCustomers(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching customers:', err);
      }
    };

    fetchCustomers();
  }, []);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/books', {
            method: 'GET',
        //   headers: {
        //     'Authorization': `Bearer ${localStorage.getItem('')}`,
        //   },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setBooks(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching Books:', err);
      }
    };

    fetchBooks();
  }, []);

  

  return (
    <div>
      <h1>Admin Console</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Customer List</h2>
        <div>
        {customers.length > 0}
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.cid}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
      <div>
        <h2>Book List</h2>
        <div>
            {books.length > 0 &&(
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.originalPrice}</td>
                    <td>{book.rating}</td>
                    <td>{book.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            )}
        </div>
      </div>
    
    </div>
  );
}

export default TempComponent;
