// import React from 'react';

// const CartItem = ({ item, removeFromCart }) => {
//   return (
//     <div style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
//       <h3>{item.title || item.name}</h3>
//       <p>Price: {item.price} BDT</p>
//       <button onClick={() => removeFromCart(item._id)}>Remove</button>
//     </div>
//   );
// };

// export default CartItem;

import React from "react";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <tr className="border-b last:border-none hover:bg-gray-50">
      <td className="p-4 flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h4 className="font-medium">{item.title}</h4>
          <p className="text-sm text-gray-500 capitalize">{item.type}</p>
        </div>
      </td>
      {/* Safely render price */}
      <td className="p-4 text-center">{(item.price ?? 0).toLocaleString()}</td>
      <td className="p-4 text-center">
        <button
          onClick={() => removeFromCart(item._id)}
          className="text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
