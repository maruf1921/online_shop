const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

const stripe = Stripe('sk_test_51PWaj5P7FSbX5bb7K8MioXpBmfSvnnKlGIE30bYhLTHbHdq3SISScTugelpedgQDVWVJKTXVpMJlIRRgtXGA5urm00jbUriWGY');

// Create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

module.exports = router;
