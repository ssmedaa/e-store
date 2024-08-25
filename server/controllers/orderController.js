const Order = require('../models/order');
const OrderItem = require('../models/orderItem');

// GET /api/order: Retrieve all orders with their items
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{
        model: OrderItem,
        as: 'OrderItems',
        attributes: ['bookId', 'purchaseQty'], // Only fetch necessary attributes
      }],
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching all orders:', error);
    res.status(500).json({ message: 'Server error. Failed to retrieve orders.' });
  }
};

// GET /api/order/:id: Retrieve a specific order by ID with its items
exports.getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findOne({
      where: { id: id },
      include: [{
        model: OrderItem,
        as: 'OrderItems',
        attributes: ['bookId', 'purchaseQty'],
      }],
    });

    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found.' });
    }
  } catch (error) {
    console.error('Error fetching order by ID:', error);
    res.status(500).json({ message: 'Server error. Failed to retrieve order.' });
  }
};

// PUT /api/order/:id: Update an order by ID
exports.updateOrderById = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;  // The updates are expected in the request body
  
    try {
      // Find the order by ID
      const order = await Order.findOne({ where: { id: id } });
  
      if (order) {
        // Update the order with the new attributes
        await order.update(updates);
  
        res.status(200).json({ message: 'Order updated successfully', order });
      } else {
        res.status(404).json({ message: 'Order not found.' });
      }
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ message: 'Server error. Failed to update order.', error });
    }
};

// POST /api/order: Create a new order
exports.createOrder = async (req, res) => {
    const { customerId, status, billingAddress, shippingAddress, price, items } = req.body;
  
    try {
      // Create a new order
      const newOrder = await Order.create({
        customerId,
        status,
        billingAddress,
        shippingAddress,
        price,
      });
  
      // If there are associated items, create them
      if (items && items.length > 0) {
        const orderItems = items.map(item => ({
          orderId: newOrder.id,
          bookId: item.bookId,
          purchaseQty: item.purchaseQty,
        }));
  
        await OrderItem.bulkCreate(orderItems);
      }
  
      res.status(201).json({ message: 'Order created successfully.', order: newOrder });
    } catch (error) {
      console.error('Error creating new order:', error);
      res.status(500).json({ message: 'Server error. Failed to create order.' });
    }
};


