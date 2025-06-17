import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div style={{borderBottom: '1px solid #ccc', marginBottom: '10px'}}>
      <h3>{item.title || item.name}</h3>
      <p>Price: {item.price} BDT</p>
      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
