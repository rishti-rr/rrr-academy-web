// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useAuth } from './AuthContext';
// import { toast } from 'react-toastify';

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const { user } = useAuth();
//   const [cart, setCart] = useState([]);

//   // Example: load cart from localStorage or backend API for logged in user
  
//   useEffect(() => {
//     if (user) {
//       // Load user cart from backend API here (replace with real fetch)
//       const savedCart = JSON.parse(localStorage.getItem(`cart_${user.uid}`)) || [];
//       setCart(savedCart);
//     } else {
//       setCart([]);
//     }
//   }, [user]);

//   const addToCart = (item) => {
//      if (!user) {
//       toast.error("Please log in to add items to the cart.");
//       return;
//     }
    
//   const updatedCart = [...cart, item];
//     setCart(updatedCart);
//     localStorage.setItem(`cart_${user.uid}`, JSON.stringify(updatedCart));
//     toast.success("Added to cart!");
//   };
 
//   const removeFromCart = (itemId) => {
//     const updatedCart = cart.filter((item) => item._id !== itemId);
//     setCart(updatedCart);
//     if (user) {
//       localStorage.setItem(`cart_${user.uid}`, JSON.stringify(updatedCart));
//     } else {
//       localStorage.setItem("cart_guest", JSON.stringify(updatedCart));
//     }
//   };

//   const clearCart = () => {
//     setCart([]);
//     if (user) {
//       localStorage.removeItem(`cart_${user.uid}`);
//     } else {
//       localStorage.removeItem("cart_guest");
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // export default CartContext;



import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage (per user)
  useEffect(() => {
    if (user) {
      const savedCart = JSON.parse(localStorage.getItem(`cart_${user.uid}`)) || [];
      setCart(savedCart);
    } else {
      setCart([]);
    }
  }, [user]);

  // ✅ Add to cart with type (must be 'course' or 'book')
const addToCart = (item) => {
  if (!user) {
    toast.error("Please log in to add items to the cart.");
    return;
  }

  const updatedCart = [...cart, item];
  setCart(updatedCart);
  localStorage.setItem(`cart_${user.uid}`, JSON.stringify(updatedCart));
  toast.success("Added to cart!");
};


  // ✅ Remove item from cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item._id !== itemId);
    setCart(updatedCart);
    if (user) {
      localStorage.setItem(`cart_${user.uid}`, JSON.stringify(updatedCart));
    }else {
      localStorage.setItem("cart_guest", JSON.stringify(updatedCart));
    }
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setCart([]);
    if (user) {
      localStorage.removeItem(`cart_${user.uid}`);
    }else {
      localStorage.removeItem("cart_guest");
    }
  };

  // ✅ Count per item type
  const courseCount = cart.filter((item) => item.type === 'course').length;
  const bookCount = cart.filter((item) => item.type === 'book').length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        courseCount,
        bookCount,
        totalCount: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
