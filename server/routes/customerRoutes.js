const express = require('express')
const {
  signUpCustomer,
  signInCustomer,
  getCustomerById,
  updateCustomerById,
  getAllCustomers,
} = require('../controllers/customerController')

const router = express.Router()

router.post('/signup', signUpCustomer)
router.post('/signin', signInCustomer)
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomerById);
router.get('/',getAllCustomers);

module.exports = router

