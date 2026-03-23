require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import database connection
const { connect } = require('./config/database');

// Import routes
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');
const cartRoutes = require('./routes/cart');
const paymentRoutes = require('./routes/payment');

// Import middleware
const errorHandler = require('./middleware/errorHandler');
const authenticateJWT = require('./middleware/auth');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connect();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/orders', authenticateJWT, ordersRoutes);
app.use('/api/cart', authenticateJWT, cartRoutes);
app.use('/api/payment', authenticateJWT, paymentRoutes);

// Welcome route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Spiritual Store API!',
        version: '1.0.0',
        endpoints: {
            auth: '/api/auth',
            products: '/api/products',
            orders: '/api/orders',
            cart: '/api/cart',
            payment: '/api/payment'
        }
    });
});

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to see the API`);
});
