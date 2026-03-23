const express = require('express');
const router = express.Router();

// Dummy cart data
let cart = [];

// Get cart items
router.get('/', (req, res) => {
    res.json(cart);
});

// Add item to cart
router.post('/add', (req, res) => {
    const { item } = req.body;
    cart.push(item);
    res.status(201).json({ message: 'Item added to cart', cart });
});

// Remove item from cart
router.delete('/remove/:id', (req, res) => {
    const { id } = req.params;
    cart = cart.filter(item => item.id !== id);
    res.json({ message: 'Item removed from cart', cart });
});

// Update item quantity in cart
router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = quantity;
        res.json({ message: 'Item quantity updated', cart });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

module.exports = router;