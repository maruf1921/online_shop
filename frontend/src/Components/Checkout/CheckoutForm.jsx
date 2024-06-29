import React, { useState, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './CheckoutForm.css';
import { ShopContext } from '../../Context/ShopContext';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { getTotalCartAmount } = useContext(ShopContext); // Import getTotalCartAmount from your context
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    const { data } = await axios.post('http://localhost:5000/api/stripe/create-payment-intent', {
      amount: getTotalCartAmount() * 100, // Convert amount to cents
    });

    const clientSecret = data.clientSecret;
    const cardElement = elements.getElement(CardElement);

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'Customer Name',
        },
      },
    });

    setIsProcessing(false);

    if (paymentResult.error) {
      setError(paymentResult.error.message);
      setSuccess(false);
    } else {
      setError(null);
      setSuccess(true);
    }
  };

  const handleCashOnDelivery = () => {
    // Handle cash on delivery logic here
    setOrderConfirmed(true);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout</h2>
      <CardElement className="StripeElement" />
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Card Pay'}
      </button>
      <button type="button" onClick={handleCashOnDelivery} className="cash-on-delivery-btn">
        Cash on Delivery
      </button>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Payment Successful!</div>}
      {orderConfirmed && <div className="order-confirmation">Order Confirmed!</div>}
    </form>
  );
};

export default CheckoutForm;
