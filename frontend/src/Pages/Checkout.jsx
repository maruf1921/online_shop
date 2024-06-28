import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Components/Checkout/CheckoutForm';

const stripePromise = loadStripe('pk_test_51PWYLBLGi42HQbJ4KBtq7kfcn3bn5ZoAnMxtEpzAD5WPFwjW7DzhGqZMg9hb1LBRQ0kCXsz2jODTElcZ1edhuHcx001wfEMITe');

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
