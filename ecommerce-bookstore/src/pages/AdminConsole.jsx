import React, { useState, useEffect } from 'react';

function AdminConsole() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/customer', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => setCustomers(data.customers || []))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Admin Console</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Customer List</h2>
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>{customer.name} - {customer.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminConsole;
