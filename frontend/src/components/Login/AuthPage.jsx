import React, { useState } from "react";
import { sendOtpEmail } from "../../utils/emailjs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../Login/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthPage = ({ mode = "login" }) => {
  const [page, setPage] = useState(mode); // "login" or "signup"
  const [errorMessage, setErrorMessage] = useState("");
  // Email OTP state
  const [otpSent, setOtpSent] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpTimer, setOtpTimer] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [pendingSignupData, setPendingSignupData] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

  // No phone validation needed

  // Social providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // --- LOGIN ---
  const handleLogin = async (data) => {
    setErrorMessage("");
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/'); // Login success, go to homepage
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleForgotPassword = async (email) => {
    setErrorMessage("");
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email.");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMessage("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleFacebookLogin = async () => {
    setErrorMessage("");
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  // --- SIGN UP (email + OTP) ---
  const handleSignupSendOtp = async (data) => {
    setErrorMessage("");
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setPendingSignupData(data);
    // Send OTP via EmailJS
    try {
      const result = await sendOtpEmail(data.email, otp);
      if (result.success) {
        setOtpSent(true);
        setOtpTimer(90);
        const id = setInterval(() => {
          setOtpTimer((prev) => {
            if (prev <= 1) {
              clearInterval(id);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        setTimerId(id);
        setErrorMessage("");
      } else {
        setErrorMessage("Failed to send OTP to your email. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Failed to send OTP to your email. Please check your internet connection or contact support.");
    }
  };

  // Only one handleVerifyOtpAndSignup should exist. Remove duplicate if present.

  const handleVerifyOtpAndSignup = async () => {
    setErrorMessage("");
    if (!pendingSignupData) return;
    if (emailOtp !== generatedOtp) {
      setErrorMessage("Incorrect OTP. Please try again.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        pendingSignupData.email,
        pendingSignupData.password
      );
      alert("✅ Account created!");
      if (timerId) clearInterval(timerId);
      navigate("/");
    } catch (err) {
      setErrorMessage("Account creation failed: " + err.message);
    }
  };

  // --- UI ---
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {page === "login" ? (
          <>
            <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
            <p className="text-center text-gray-500 mb-6">Welcome back!</p>
            {errorMessage && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center text-sm font-medium border border-red-200">{errorMessage}</div>}
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" {...register("email", { required: "Email is required" })} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })} />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <div className="flex justify-end">
                <button type="button" className="text-blue-600 text-sm hover:underline" onClick={() => handleForgotPassword(watch("email"))}>Forgot password?</button>
              </div>
              <button type="submit" className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow transition">Login</button>
            </form>
            <div className="text-center mt-4 text-sm">
              Don't have an account? <button className="text-blue-600 font-semibold hover:underline" onClick={() => { setPage("signup"); reset(); setErrorMessage(""); }}>Sign Up</button>
            </div>
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-3 text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
            <button onClick={handleGoogleLogin} className="w-full py-3 mb-3 rounded-lg bg-white border border-gray-300 flex items-center justify-center gap-2 text-gray-700 font-semibold hover:bg-gray-50 transition">
              <img src="/google.svg" alt="Google" className="w-5 h-5" /> Login with Google
            </button>
            <button onClick={handleFacebookLogin} className="w-full py-3 rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-900 transition">
              <img src="/facebook.svg" alt="Facebook" className="w-5 h-5 bg-white rounded-full" /> Login with Facebook
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
            <form onSubmit={handleSubmit(handleSignupSendOtp)} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" {...register("email", { required: "Email is required" })} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })} />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Re-enter Password</label>
                <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" {...register("confirmPassword", { required: "Please re-enter your password" })} />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
              </div>
              {/* No phone field */}
              {otpSent ? (
                <>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Enter OTP (sent to your email)</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" value={emailOtp} onChange={e => setEmailOtp(e.target.value)} />
                    {otpTimer > 0 ? (
                      <p className="text-xs text-gray-500 mt-1">Please enter the OTP within <span className="font-semibold text-blue-600">{otpTimer} seconds</span>. Otherwise, you can resend.</p>
                    ) : (
                      <p className="text-xs text-red-500 mt-1">OTP expired. Please resend.</p>
                    )}
                  </div>
                  <button type="button" onClick={handleVerifyOtpAndSignup} disabled={otpTimer === 0} className={`w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow transition ${otpTimer === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>Verify & Create Account</button>
                  <button type="button" onClick={() => { setOtpSent(false); setEmailOtp(""); setOtpTimer(0); setGeneratedOtp(""); setPendingSignupData(null); if (timerId) clearInterval(timerId); }} className="w-full text-blue-600 hover:underline text-sm mt-2">🔁 Resend OTP</button>
                </>
              ) : (
                <>
                  <button type="submit" className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow transition">Send OTP</button>
                  <p className="text-xs text-gray-500 mt-2">After clicking, you will have <span className="font-semibold text-blue-600">90 seconds</span> to enter the OTP sent to your email.</p>
                </>
              )}
            </form>
            <div className="text-center mt-4 text-sm">
              Already have an account? <button className="text-blue-600 font-semibold hover:underline" onClick={() => { setPage("login"); reset(); setErrorMessage(""); }}>Login</button>
            </div>
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-3 text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
            <button onClick={handleGoogleLogin} className="w-full py-3 mb-3 rounded-lg bg-white border border-gray-300 flex items-center justify-center gap-2 text-gray-700 font-semibold hover:bg-gray-50 transition">
              <img src="/google.svg" alt="Google" className="w-5 h-5" /> Login with Google
            </button>
            <button onClick={handleFacebookLogin} className="w-full py-3 rounded-lg bg-blue-800 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-900 transition">
              <img src="/facebook.svg" alt="Facebook" className="w-5 h-5 bg-white rounded-full" /> Login with Facebook
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
