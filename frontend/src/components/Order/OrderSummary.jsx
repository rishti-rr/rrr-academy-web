import React from 'react';
import { useCart } from '../../context/CartContext';

const OrderSummary = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Order Summary</h2>
      {cart.map(item => (
        <div key={item._id}>
          <p>{item.title || item.name} - {item.price} BDT</p>
        </div>
      ))}
      <h3>Total: {totalPrice} BDT</h3>
      {/* Add Proceed to Payment button */}
    </div>
  );
};

export default OrderSummary;
