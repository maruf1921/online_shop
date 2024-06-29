import React, { useContext, useState, useEffect } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [totalAmount, setTotalAmount] = useState(getTotalCartAmount());
  const [promoCodeApplied, setPromoCodeApplied] = useState(false);
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Update totalAmount whenever cartItems change
  useEffect(() => {
    setTotalAmount(getTotalCartAmount());
  }, [cartItems, getTotalCartAmount]);

  const handleCheckout = () => {
    // Navigate to checkout page and pass address, mobile number, and total amount
    navigate('/checkout', { state: { address, mobileNumber, totalAmount } });
  };

  const applyPromoCode = () => {
    if (promoCode === 'DIIT' && !promoCodeApplied) {
      setTotalAmount(totalAmount - 5);
      setPromoCodeApplied(true);
      alert('Promo code applied successfully!');
    } else if (promoCodeApplied) {
      alert('Promo code has already been applied.');
    } else {
      alert('Invalid promo code');
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, idx) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={idx}>
              <div className="cartitems-format cartitems-format-main">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <div className="cartitems-remove-icon">
                  <img
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1> Cart Totals </h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>${totalAmount}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${totalAmount}</h3>
            </div>
          </div>
          <div className="cartitems-address">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="cartitems-mobile">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input
              type="text"
              placeholder="promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={applyPromoCode}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
