import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <CartItem key={item._id} item={item} removeFromCart={removeFromCart} />
      ))}
      {/* Add button to proceed to order/payment */}
    </div>
  );
};

export default Cart;
