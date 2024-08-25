const express = require('express')
const {
    getAllOrders,
    getOrderById,
    updateOrderById,
    createOrder
} = require('../controllers/orderController')

const router = express.Router()

router.get('/:id', getOrderById);
router.get('/', getAllOrders);
router.put('/:id', updateOrderById);
router.post('/', createOrder);

module.exports = router