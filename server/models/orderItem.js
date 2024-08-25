const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./order'); // Import the Order model

const OrderItem = sequelize.define('OrderItem', {
  orderId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: Order,
      key: 'id',
    },
  },
  bookId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  purchaseQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'OrderItems',
  timestamps: false,
});

module.exports = OrderItem;
