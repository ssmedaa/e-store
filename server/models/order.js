const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  customerId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  billingAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shippingAddress: {
    type: DataTypes.STRING,
    allowNull: true, // Optional
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'Orders',
  timestamps: false, // Disable timestamps if not needed
});

module.exports = Order;
