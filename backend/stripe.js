const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

const stripe = Stripe('sk_test_51PWYLBLGi42HQbJ4erzdvdmN01sHCnQHSzaub3FAuX1sDotQd8tuuh52IxivXgSLM9856YwJJ0phQ8zrWexlJbc800de85OnBg');

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
