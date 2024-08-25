const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you export the sequelize instance from your database.js

const Customer = sequelize.define('Customer', {
  cid: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'Customer',
  timestamps: false
});

module.exports = Customer;
