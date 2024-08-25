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
    primaryKey: true, // Composite primary key
  },
  bookId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true, // Composite primary key
  },
  purchaseQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'OrderItems',
  timestamps: false, // Disable timestamps if not needed
});

OrderItem.belongsTo(Order, { foreignKey: 'orderId', as: 'Order' });
Order.hasMany(OrderItem, { foreignKey: 'orderId', as: 'OrderItems' });

module.exports = OrderItem;

