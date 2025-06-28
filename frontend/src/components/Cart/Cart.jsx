// import React from 'react';
// import { useCart } from '../../context/CartContext';
// import CartItem from './CartItem';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   if (cart.length === 0) return <p>Your cart is empty.</p>;

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {cart.map(item => (
//         <CartItem key={item._id} item={item} removeFromCart={removeFromCart} />
//       ))}

//       <button onClick={() => navigate('/order-summary')}>
//         Proceed to Checkout
//       </button>
//     </div>
//   );
// };

// export default Cart;


// import React from "react";
// import { useCart } from "../../context/CartContext";
// import CartItem from "./CartItem";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   const courseCount = cart.filter(i => i.type === 'course').length;
//   const bookCount = cart.filter(i => i.type === 'book').length;
//   const total = cart.reduce((sum, i) => sum + i.price, 0);

//   if (cart.length === 0)
//     return (
//       <div className="text-center my-16">
//         <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
//         <button
//           className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           onClick={() => navigate("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

//       <div className="mb-4 text-gray-700">
//         <span className="mr-4">
//           Courses: <strong>{courseCount}</strong>
//         </span>
//         <span>
//           Books: <strong>{bookCount}</strong>
//         </span>
//       </div>

//       <table className="w-full bg-white shadow rounded-lg overflow-hidden">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-4 text-left">Product</th>
//             <th className="p-4">Price (BDT)</th>
//             <th className="p-4">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cart.map(item => (
//             <CartItem key={item._id} item={item} />
//           ))}
//         </tbody>
//       </table>

//       <div className="mt-6 flex justify-end items-center gap-6">
//         <span className="text-xl font-semibold">Total: {total.toLocaleString()} BDT</span>
//         <button
//           className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
//           onClick={() => navigate("/order-summary")}
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const courseCount = cart.filter(i => i.type === 'course').length;
  const bookCount = cart.filter(i => i.type === 'book').length;

  // Safely handle missing price values
  const total = cart.reduce((sum, i) => sum + (i.price ?? 0), 0);

  if (cart.length === 0)
    return (
      <div className="text-center my-16">
        <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="mb-4 text-gray-700">
        <span className="mr-4">
          Courses: <strong>{courseCount}</strong>
        </span>
        <span>
          Books: <strong>{bookCount}</strong>
        </span>
      </div>

      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Product</th>
            <th className="p-4">Price (BDT)</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            // Use unique key combining _id and index to avoid duplicates
            <CartItem key={`${item._id}-${index}`} item={item} />
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-end items-center gap-6">
        <span className="text-xl font-semibold">
          Total: {total.toLocaleString()} BDT
        </span>
        <button
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => navigate("/order-summary")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
