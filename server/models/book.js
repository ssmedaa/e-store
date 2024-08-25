const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure this path is correct

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  originalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  salePrice: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  stripeID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  summary1: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  summary2: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: false
});

module.exports = Book;
