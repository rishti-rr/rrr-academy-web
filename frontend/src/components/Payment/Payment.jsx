// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cartItems, totalAmount } = location.state || {};

//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");

//   const handlePayment = async () => {
//     if (!cardNumber || !expiry || !cvv) {
//       alert("Please fill in all payment details.");
//       return;
//     }

//     try {
//       navigate("/receipt", {
//         state: {
//           order: {
//             _id: "TEMP123", // backend order ID later
//             items: cartItems,
//             totalPrice: totalAmount,
//             userEmail: "user@example.com", // replace with actual user info
//           },
//         },
//       });
//     } catch (err) {
//       alert("Payment failed. Try again.");
//     }
//   };

//   if (!cartItems || cartItems.length === 0)
//     return (
//       <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md text-center">
//         <p className="text-gray-700 text-lg">No cart items found.</p>
//       </div>
//     );

//   return (
//     <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">
//         Payment
//       </h2>

//       <div className="mb-6 text-center text-xl font-semibold text-gray-800">
//         Total: <span className="text-green-600">{totalAmount.toLocaleString()} BDT</span>
//       </div>

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handlePayment();
//         }}
//         className="space-y-5"
//       >
//         <div>
//           <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-1">
//             Card Number
//           </label>
//           <input
//             id="cardNumber"
//             type="text"
//             placeholder="xxxx-xxxx-xxxx-xxxx"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             maxLength={19}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
//             required
//           />
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <label htmlFor="expiry" className="block text-gray-700 font-medium mb-1">
//               Expiry Date
//             </label>
//             <input
//               id="expiry"
//               type="text"
//               placeholder="MM/YY"
//               value={expiry}
//               onChange={(e) => setExpiry(e.target.value)}
//               maxLength={5}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
//               required
//             />
//           </div>

//           <div className="flex-1">
//             <label htmlFor="cvv" className="block text-gray-700 font-medium mb-1">
//               CVV
//             </label>
//             <input
//               id="cvv"
//               type="password"
//               placeholder="***"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//               maxLength={4}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
//               required
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md shadow-md transition"
//         >
//           Complete Payment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cartItems, totalAmount } = location.state || {};
//   const { user } = useAuth();

//   const [mobileNumber, setMobileNumber] = useState("");
//   const [userName, setUserName] = useState(user?.displayName || "");
//   const [email] = useState(user?.email || "");

//   const handlePayment = async () => {
//     if (!mobileNumber || !userName || !email) {
//       alert("Please fill in all payment details.");
//       return;
//     }

//     try {
//       const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/orders`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           userId: user?.uid,
//           userEmail: email,
//           items: cartItems,
//           total: totalAmount,
//           paymentMethod: "Bkash/Nagad",
//           mobileNumber,
//           userName
//         })
//       });

//       const order = await res.json();
//       navigate("/receipt", { state: { order } });

//     } catch (err) {
//       alert("Payment/Order failed. Try again.");
//     }
//   };

//   if (!cartItems || cartItems.length === 0) {
//     return (
//       <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md text-center">
//         <p className="text-gray-700 text-lg">No cart items found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">Mobile Payment</h2>

//       <div className="mb-6 text-center text-xl font-semibold text-gray-800">
//         Total: <span className="text-green-600">{totalAmount.toLocaleString()} BDT</span>
//       </div>

//       <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} className="space-y-5">
//         <div>
//           <label className="block font-medium text-gray-700 mb-1">Bkash/Nagad Number</label>
//           <input
//             type="text"
//             placeholder="01xxxxxxxxx"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium text-gray-700 mb-1">Your Name</label>
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium text-gray-700 mb-1">Your Email</label>
//           <input
//             type="email"
//             value={email}
//             readOnly
//             className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-600"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md shadow-md"
//         >
//           Complete Payment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Payment;




// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cartItems, totalAmount } = location.state || {};

//   const [mobileNumber, setMobileNumber] = useState("");
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");

//   const handlePayment = () => {
//     if (!mobileNumber || !userName || !email) {
//       alert("Please fill in all payment details.");
//       return;
//     }

//     // Manual dummy payment, no backend
//     navigate("/receipt", {
//       state: {
//         order: {
//           _id: "TEMP123",
//           items: cartItems,
//           total: totalAmount,
//           userEmail: email,
//           userName: userName,
//           mobileNumber: mobileNumber,
//           paymentMethod: "Bkash/Nagad"
//         },
//       },
//     });
//   };

//   if (!cartItems || cartItems.length === 0) {
//     return (
//       <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md text-center">
//         <p className="text-gray-700 text-lg">No cart items found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">
//         Bkash/Nagad Payment
//       </h2>

//       <div className="mb-6 text-center text-xl font-semibold text-gray-800">
//         Total: <span className="text-green-600">{totalAmount.toLocaleString()} BDT</span>
//       </div>

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handlePayment();
//         }}
//         className="space-y-5"
//       >
//         <div>
//           <label className="block text-gray-700 font-medium mb-1">
//             Mobile Number (Bkash/Nagad)
//           </label>
//           <input
//             type="text"
//             placeholder="01XXXXXXXXX"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             maxLength={11}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium mb-1">
//             Full Name
//           </label>
//           <input
//             type="text"
//             placeholder="Your full name"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium mb-1">
//             Email Address
//           </label>
//           <input
//             type="email"
//             placeholder="your@email.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md"
//         >
//           Complete Payment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Payment;


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || {};

  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = () => {
    if (!mobileNumber || !userName || !email) {
      alert("Please fill in all payment details.");
      return;
    }

    const fakeOrder = {
      _id: "TEMP123",
      items: cartItems,
      total: totalAmount,
      userEmail: email,
      userName: userName,
      mobileNumber: mobileNumber,
      paymentMethod: "Bkash/Nagad"
    };

    // ✅ Send email
    const templateParams = {
      to_email: email, // <-- must match your EmailJS template variable for recipient
      user_name: userName,
      order_id: fakeOrder._id,
      mobile_number: mobileNumber,
      total: totalAmount + " BDT",
      payment_method: "Bkash/Nagad",
      item_list: cartItems.map(item =>
        `• ${item.title || item.name} (${item.type}) – ${item.price} BDT`
      ).join('\n'),
    };

    emailjs.send(
      "service_oelhy1c",      // ✅ your EmailJS service ID
      "template_8ol1x18",     // ✅ your EmailJS template ID
      templateParams,
      "-bbgl4C8kYUC6OkQJ"     // ✅ your EmailJS public key
    )
    .then(() => console.log("📨 Email receipt sent"))
    .catch((err) => console.error("❌ Email send error:", err));

    // Navigate to receipt page
    navigate("/receipt", { state: { order: fakeOrder } });
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md text-center">
        <p className="text-gray-700 text-lg">No cart items found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">
        Bkash/Nagad Payment
      </h2>

      <div className="mb-6 text-center text-xl font-semibold text-gray-800">
        Total: <span className="text-green-600">{totalAmount.toLocaleString()} BDT</span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePayment();
        }}
        className="space-y-5"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Mobile Number (Bkash/Nagad)
          </label>
          <input
            type="text"
            placeholder="01XXXXXXXXX"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            maxLength={11}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md"
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
