// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Receipt = () => {
//   const { state } = useLocation();
//   const order = state?.order;

//   if (!order) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500 text-xl">No order data available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-8 my-10 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Payment Receipt</h2>

//       <div className="mb-6 border-b pb-4">
//         <p><span className="font-semibold">Order ID:</span> {order._id}</p>
//         <p><span className="font-semibold">User:</span> {order.userEmail}</p>
//         <p><span className="font-semibold">Total Paid:</span> {order.totalPrice.toLocaleString()} BDT</p>
//       </div>

//       <h3 className="text-xl font-semibold mb-4">Items Purchased</h3>
//       <ul className="space-y-3">
//         {order.items.map(item => (
//           <li key={item._id} className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm">
//             <div>
//               <p className="font-medium">{item.title || item.name}</p>
//               <p className="text-sm text-gray-500 capitalize">{item.type}</p>
//             </div>
//             <span className="font-semibold">{item.price.toLocaleString()} BDT</span>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-8 text-center">
//         <p className="text-lg font-semibold text-green-700">Thank you for your purchase!</p>
//         <p className="text-sm text-gray-500">Your order has been successfully completed.</p>
//       </div>
//     </div>
//   );
// };

// export default Receipt;

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { getAuth } from 'firebase/auth';

// const Receipt = () => {
//   const { state } = useLocation();
//   const order = state?.order;
//   const auth = getAuth();
//   const user = auth.currentUser;

//   const rawName = user?.displayName || order?.userName || user?.email?.split('@')[0] || 'Customer';
//   const displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();

//   if (!order) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500 text-xl">No order data available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-8 my-10 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Payment Receipt</h2>

//       <p className="text-lg mb-4">Hello, <strong>{displayName}</strong>!</p>

//       <div className="mb-6 border-b pb-4 space-y-1 text-gray-800">
//         <p><strong>Order ID:</strong> {order._id}</p>
//         <p><strong>Name:</strong> {order.userName || displayName}</p>
//         <p><strong>Email:</strong> {order.userEmail}</p>
//         <p><strong>Mobile Number:</strong> {order.mobileNumber}</p>
//         <p><strong>Payment Method:</strong> {order.paymentMethod || 'Bkash/Nagad'}</p>
//         <p><strong>Total Paid:</strong> {order.total.toLocaleString()} BDT</p>
//       </div>

//       <h3 className="text-xl font-semibold mb-4">Items Purchased</h3>
//       <ul className="space-y-3">
//         {order.items.map(item => (
//           <li key={item._id} className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm">
//             <div>
//               <p className="font-medium">{item.title || item.name}</p>
//               <p className="text-sm text-gray-500 capitalize">{item.type}</p>
//             </div>
//             <span className="font-semibold">{item.price.toLocaleString()} BDT</span>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-8 text-center">
//         <p className="text-lg font-semibold text-green-700">Thank you for your purchase!</p>
//         <p className="text-sm text-gray-500">Your order has been successfully completed.</p>
//       </div>
//     </div>
//   );
// };

// export default Receipt;



import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import emailjs from 'emailjs-com'; // Make sure you've installed this

const Receipt = () => {
  const { state } = useLocation();
  const order = state?.order;
  const auth = getAuth();
  const user = auth.currentUser;

  const rawName = user?.displayName || order?.userName || user?.email?.split('@')[0] || 'Customer';
  const displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();

  // ✅ Send email when order is available
  useEffect(() => {
    if (!order) return;

    const templateParams = {
      user_email: order.userEmail,
      user_name: order.userName || displayName,
      order_id: order._id,
      mobile_number: order.mobileNumber,
      total: order.total + " BDT",
      payment_method: order.paymentMethod || "Bkash/Nagad",
      item_list: order.items
        .map(item => `• ${item.title || item.name} (${item.type}) – ${item.price} BDT`)
        .join('\n'),
    };

    emailjs.send(
      "service_oelhy1c",     
      "template_8ol1x18",   
      templateParams,
      "-bbgl4C8kYUC6OkQJ"      
    )
    .then(() => console.log("📨 Receipt sent to email"))
    .catch(err => console.error("❌ Email sending error:", err));
  }, [order]);

  if (!order) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">No order data available.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 my-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Payment Receipt</h2>

      <p className="text-lg mb-4">Hello, <strong>{displayName}</strong>!</p>

      <div className="mb-6 border-b pb-4 space-y-1 text-gray-800">
        <p><strong>Order ID:</strong> {order._id}</p>
        <p><strong>Name:</strong> {order.userName || displayName}</p>
        <p><strong>Email:</strong> {order.userEmail}</p>
        <p><strong>Mobile Number:</strong> {order.mobileNumber}</p>
        <p><strong>Payment Method:</strong> {order.paymentMethod || 'Bkash/Nagad'}</p>
        <p><strong>Total Paid:</strong> {order.total.toLocaleString()} BDT</p>
      </div>

      <h3 className="text-xl font-semibold mb-4">Items Purchased</h3>
      <ul className="space-y-3">
        {order.items.map(item => (
          <li key={item._id} className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm">
            <div>
              <p className="font-medium">{item.title || item.name}</p>
              <p className="text-sm text-gray-500 capitalize">{item.type}</p>
            </div>
            <span className="font-semibold">{item.price.toLocaleString()} BDT</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <p className="text-lg font-semibold text-green-700">Thank you for your purchase!</p>
        <p className="text-sm text-gray-500">Your order has been successfully completed.</p>
      </div>
    </div>
  );
};

export default Receipt;
