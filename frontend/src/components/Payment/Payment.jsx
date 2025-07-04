import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Payment = () => {
  const location = useLocation();
  const { user } = useAuth();
  const { cartItems, totalAmount } = location.state || {};

  const handleSslCommerzPayment = async () => {
    try {
      const res = await axios.post("/api/sslcommerz/initiate", {
        amount: totalAmount,
        email: user?.email || "test@rrr.com",
        name: user?.displayName || "RRR User",
        phone: user?.phoneNumber || "01700000000",
      });
      if (res.data.GatewayPageURL) {
        window.location.href = res.data.GatewayPageURL;
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (err) {
      alert("Payment gateway error: " + (err.response?.data?.error || err.message));
    }
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
        Payment
      </h2>

      <div className="mb-6 text-center text-xl font-semibold text-gray-800">
        Total: <span className="text-green-600">{totalAmount.toLocaleString()} BDT</span>
      </div>

      <button
        onClick={handleSslCommerzPayment}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md mt-2"
      >
        Pay with SSLCommerz
      </button>
    </div>
  );
};

export default Payment;
