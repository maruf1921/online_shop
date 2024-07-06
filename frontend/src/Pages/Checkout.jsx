import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Components/Checkout/CheckoutForm';

const stripePromise = loadStripe('pk_test_51PWaj5P7FSbX5bb7oJejBKhKyGY4aOevYMray2kMe76CFtAkCyZQAktn9LUxBdsDTLgZpeubyNmhcY4JLmok4Om100kzIxcOS3');

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
