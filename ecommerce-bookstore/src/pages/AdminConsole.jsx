import React, { useState, useEffect } from 'react';

function AdminConsole() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('/api/customer')  // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        if (data.isAdmin) {
          setIsAdmin(true);
        }
      });
  }, []);

  return (
    <div>
      {isAdmin ? (
        <div>
          {/* Admin Console Content */}
          <h1>Admin Console</h1>
          {/* Other admin-specific controls */}
        </div>
      ) : (
        <p>You do not have admin privileges.</p>
      )}
    </div>
  );
}

export default AdminConsole;
