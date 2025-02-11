import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../Login/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthModal = ({ setShowAuthModal }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        alert("Sign-Up Successful");
      } else {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        alert("Sign-In Successful");
      }
      setShowAuthModal(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-md p-6 max-w-md w-full shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button type="submit" className="primary-btn w-full">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} 
          <button
            className="text-blue-500 ml-1"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-gray-500"
            onClick={() => setShowAuthModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
