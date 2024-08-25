const { Sequelize } = require('sequelize');

// Create a Sequelize instance (connection) to the MySQL database
const db = new Sequelize('harryPotter', 'root', 'EECS4413', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

// Test the connection to ensure it works
db.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Export the Sequelize instance for use in other parts of the application
module.exports = db;

