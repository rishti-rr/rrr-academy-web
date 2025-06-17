import React from 'react';

const Receipt = ({ order }) => {
  if (!order) return <p>No order data available.</p>;

  return (
    <div>
      <h2>Payment Receipt</h2>
      <p>Order ID: {order._id}</p>
      <p>User: {order.userEmail}</p>
      <p>Total Paid: {order.totalPrice} BDT</p>
      <p>Items:</p>
      <ul>
        {order.items.map(item => (
          <li key={item._id}>{item.title || item.name} - {item.price} BDT</li>
        ))}
      </ul>
      <p>Thank you for your purchase!</p>
    </div>
  );
};

export default Receipt;
