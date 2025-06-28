import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + (item.price ?? 0), 0);

  const handleProceedToPayment = () => {
    navigate("/payment", {
      state: {
        cartItems: cart,
        totalAmount: totalPrice,
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b pb-2">
        Order Summary
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-3 max-h-[calc(9*76px)] overflow-y-auto">
          {cart.map((item, index) => (
            <div
              key={`${item._id}-${index}`}
              className="flex items-center justify-between border rounded-md p-2 hover:shadow-md transition-shadow duration-300"
              style={{ minHeight: "76px" }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <h3 className="text-md font-medium text-gray-900">
                    {item.title || item.name}
                  </h3>
                  <p className="text-xs text-gray-500 capitalize">
                    {item.type || ""}
                  </p>
                </div>
              </div>
              <p className="text-md font-semibold text-gray-800">
                {item.price?.toLocaleString() ?? "0"} BDT
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4 mt-4">
            <span className="text-lg font-bold text-gray-900">Total:</span>
            <span className="text-lg font-bold text-green-600">
              {totalPrice.toLocaleString()} BDT
            </span>
          </div>

          <button
            onClick={handleProceedToPayment}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-2 rounded-lg shadow-md"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
