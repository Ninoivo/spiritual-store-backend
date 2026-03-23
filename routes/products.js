const express = require('express');
const router = express.Router();

// Mock database (replace with your database model)
let products = [];

// Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// Create a new product
router.post('/', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update a product
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    products = products.map(product => product.id === id ? updatedProduct : product);
    res.json(updatedProduct);
});

// Delete a product
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(product => product.id !== id);
    res.status(204).send();
});

module.exports = router;