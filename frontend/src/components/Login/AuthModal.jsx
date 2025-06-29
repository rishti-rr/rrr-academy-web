// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { auth } from "../Login/firebaseConfig";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// const AuthModal = ({ setShowAuthModal }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const onSubmit = async (data) => {
//     try {
//       if (isSignUp) {
//         await createUserWithEmailAndPassword(auth, data.email, data.password);
//         alert("Sign-Up Successful");
//       } else {
//         await signInWithEmailAndPassword(auth, data.email, data.password);
//         alert("Sign-In Successful");
//       }
//       setShowAuthModal(false);
//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="bg-white rounded-md p-6 max-w-md w-full shadow-lg">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           {isSignUp ? "Sign Up" : "Sign In"}
//         </h2>
//         {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               {...register("email", { required: "Email is required" })}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: { value: 6, message: "Password must be at least 6 characters" }
//               })}
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>
//           <button type="submit" className="primary-btn w-full">
//             {isSignUp ? "Sign Up" : "Sign In"}
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           {isSignUp ? "Already have an account?" : "Don't have an account?"} 
//           <button
//             className="text-blue-500 ml-1"
//             onClick={() => setIsSignUp(!isSignUp)}
//           >
//             {isSignUp ? "Sign In" : "Sign Up"}
//           </button>
//         </p>
//         <div className="mt-4 text-center">
//           <button
//             type="button"
//             className="text-gray-500"
//             onClick={() => setShowAuthModal(false)}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../Login/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { sendOtpEmail } from "../../utils/emailjs"; // ✅ import emailjs helper

const AuthModal = ({ setShowAuthModal }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [formData, setFormData] = useState(null);

  const handleSignupOtpSend = async (data) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setFormData(data);

    const result = await sendOtpEmail(data.email, otp);
    if (result.success) {
      setOtpSent(true);
      setErrorMessage("");
    } else {
      setErrorMessage("❌ Failed to send OTP. Try again.");
    }
  };

  const handleOtpVerifyAndSignup = async () => {
    if (enteredOtp === generatedOtp) {
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert("✅ Account created!");
        setShowAuthModal(false);
        resetStates();
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage("❌ Incorrect OTP. Try again.");
    }
  };

  const resetStates = () => {
    setIsSignUp(false);
    setErrorMessage("");
    setOtpSent(false);
    setGeneratedOtp("");
    setEnteredOtp("");
    setFormData(null);
  };

  const onSubmit = async (data) => {
    if (isSignUp) {
      handleSignupOtpSend(data);
    } else {
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        alert("✅ Sign-In Successful!");
        setShowAuthModal(false);
        resetStates();
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-2">{errorMessage}</p>
        )}

        {!otpSent ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label>Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 w-full rounded hover:bg-blue-700 transition">
              {isSignUp ? "Send OTP" : "Sign In"}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-green-600 text-sm text-center">📩 OTP sent to {formData.email}</p>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-2 border rounded"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
            />
            <button
              onClick={handleOtpVerifyAndSignup}
              className="bg-green-600 text-white py-2 w-full rounded hover:bg-green-700 transition"
            >
              Verify & Create Account
            </button>
            <button
              onClick={() => {
                setOtpSent(false);
                setGeneratedOtp("");
                setEnteredOtp("");
              }}
              className="text-sm text-blue-500 text-center w-full"
            >
              🔁 Resend OTP
            </button>
          </div>
        )}

        <p className="text-center mt-4 text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            className="text-blue-600 font-semibold ml-1"
            onClick={() => resetStates()}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>

        <div className="mt-4 text-center">
          <button
            onClick={() => {
              setShowAuthModal(false);
              resetStates();
            }}
            className="text-gray-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
