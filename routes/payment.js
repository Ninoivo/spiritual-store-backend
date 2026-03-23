const express = require('express');
const router = express.Router();
const stripe = require('stripe')('your_secret_key_here'); // Replace with your actual Stripe secret key

router.post('/payment', async (req, res) => {
    try {
        const { amount, currency, source } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method: source,
            confirm: true,
        });
        res.status(200).json(paymentIntent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/webhook', express.json(), (req, res) => {
    const event = req.body;

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('PaymentIntent was successful!', paymentIntent);
            break;
        case 'payment_intent.payment_failed':
            const paymentError = event.data.object;
            console.log('Payment failed', paymentError);
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
});

module.exports = router;