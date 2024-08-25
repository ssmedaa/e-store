const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Customer = require('../models/customer'); 
const {JWT} = require('../config/config'); 

// Controller for customer registration (sign up)
const signUpCustomer = async (req, res) => {
  const { email, password, firstName, lastName, phoneNumber } = req.body;

  try {
    // Check if the email is already in use
    const existingCustomer = await Customer.findOne({ where: { email } });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Customer already signed up.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new customer
    const newCustomer = await Customer.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      isAdmin: false // Default to false, or set it based on your requirements
    });

    res.status(200).json({ message: 'Customer registered successfully', customer: newCustomer });
  } catch (error) {
    console.log('Server Error : ', error)
    res.status(500).json({ message: 'Server error. Failed to register customer.', error });
  }
};

// Controller for customer login (sign in)
const signInCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the customer by email
    const customer = await Customer.findOne({ where: { email } });
    if (!customer) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: customer.cid, email: customer.email, isAdmin: customer.isAdmin }, JWT.jwt, {
      expiresIn: JWT.jwtExp 
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Failed to sign in.', error });
  }
};

// Controller for fetching a customer by ID
const getCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(400).json({ message: 'Customer does not exist.' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Failed to retrieve customer.', error });
  }
};

const updateCustomerById = async (req, res) => {
    const { id } = req.params;
    const { email, password, firstName, lastName, phoneNumber, isAdmin } = req.body;
  
    try {
      const customer = await Customer.findByPk(id);
      if (!customer) {
        return res.status(400).json({ message: 'Customer does not exist.' });
      }
  
      // If password is being updated, hash it
      if (password) {
        customer.password = await bcrypt.hash(password, 10);
      }
  
      // Update other fields
      customer.email = email || customer.email;
      customer.firstName = firstName || customer.firstName;
      customer.lastName = lastName || customer.lastName;
      customer.phoneNumber = phoneNumber || customer.phoneNumber;
      customer.isAdmin = isAdmin !== undefined ? isAdmin : customer.isAdmin;
  
      await customer.save();
  
      res.status(200).json({ message: 'Customer updated successfully', customer });
    } catch (error) {
      res.status(500).json({ message: 'Server error. Failed to update customer.', error });
    }
};

const getAllCustomers = async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: 'Server error. Failed to retrieve customers.', error });
    }
};

module.exports = {signUpCustomer, signInCustomer, getCustomerById, getAllCustomers, updateCustomerById}