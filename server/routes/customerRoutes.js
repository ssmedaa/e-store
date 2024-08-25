const express = require('express')
const {
  signUpCustomer,
  signInCustomer,
  getCustomerById,
  updateCustomerById,
  getAllCustomers,
  checkAdmin,
  countCustomers
} = require('../controllers/customerController')

const router = express.Router()

router.post('/signup', signUpCustomer)
router.post('/signin', signInCustomer)
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomerById);
router.get('/',getAllCustomers);
router.get('/checkAdmin/:id',checkAdmin);
router.head('/count',countCustomers);

module.exports = router

