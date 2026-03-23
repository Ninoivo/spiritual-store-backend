const express = require('express');
const router = express.Router();

// Mock database
let orders = [];

// Create an order
router.post('/create', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).json({ message: 'Order created', order });
});

// Get all orders
router.get('/', (req, res) => {
    res.json(orders);
});

// Get order history
router.get('/history', (req, res) => {
    // Here you might filter based on the user or other criteria in a real application
    res.json(orders);
});

module.exports = router;