// stripe.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Function to create a payment intent
const createPaymentIntent = async (amount, currency) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency,
        });
        return paymentIntent;
    } catch (error) {
        throw new Error('Error creating payment intent: ' + error.message);
    }
};

module.exports = {
    createPaymentIntent,
};