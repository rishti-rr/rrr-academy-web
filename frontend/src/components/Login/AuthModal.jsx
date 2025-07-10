import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../Login/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { sendOtpEmail } from "../../utils/emailjs";

const AuthModal = ({ setShowAuthModal }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [formData, setFormData] = useState(null);
  const [authMode, setAuthMode] = useState("email"); // "email" or "phone"
  const [phone, setPhone] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaRef = useRef(null);


  const isValidBangladeshiPhone = (number) => {
    return /^((\+8801|01)[3-9]\d{8})$/.test(number);
  };

  const handleSignupOtpSend = async (data) => {
    setErrorMessage("");
    if (!isValidBangladeshiPhone(data.phone)) {
      setErrorMessage("Enter a valid Bangladeshi phone number (e.g. +8801XXXXXXXXX or 01XXXXXXXXX)");
      return;
    }
    let formattedPhone = data.phone;
    if (data.phone.startsWith("01")) {
      formattedPhone = "+88" + data.phone;
    }
    setFormData(data);
    setupRecaptcha();
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(confirmation);
      setPhoneOtpSent(true);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Failed to send OTP: " + err.message);
    }
  };

  const handleOtpVerifyAndSignup = async () => {
    setErrorMessage("");
    if (!confirmationResult) return;
    try {
      await confirmationResult.confirm(phoneOtp);
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert(" Account created!");
      setShowAuthModal(false);
      resetStates();
    } catch (err) {
      setErrorMessage("Invalid OTP or account creation failed: " + err.message);
    }
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        recaptchaRef.current,
        {
          size: "invisible",
          callback: () => {},
        },
        auth
      );
    }
  };

  const handleSendPhoneOtp = async () => {
    setErrorMessage("");
    if (!isValidBangladeshiPhone(phone)) {
      setErrorMessage("Enter a valid Bangladeshi phone number (e.g. +8801XXXXXXXXX or 01XXXXXXXXX)");
      return;
    }
   
    let formattedPhone = phone;
    if (phone.startsWith("01")) {
      formattedPhone = "+88" + phone;
    }
    setupRecaptcha();
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(confirmation);
      setPhoneOtpSent(true);
    } catch (err) {
      setErrorMessage("Failed to send OTP: " + err.message);
    }
  };

  const handleVerifyPhoneOtp = async () => {
    setErrorMessage("");
    if (!confirmationResult) return;
    try {
      await confirmationResult.confirm(phoneOtp);
      alert("Phone sign-in successful!");
      setShowAuthModal(false);
      resetStates();
    } catch (err) {
      setErrorMessage("Invalid OTP: " + err.message);
    }
  };

  const resetStates = () => {
    setIsSignUp(false);
    setErrorMessage("");
    setOtpSent(false);
    setGeneratedOtp("");
    setEnteredOtp("");
    setFormData(null);
    setAuthMode("email");
    setPhone("");
    setPhoneOtp("");
    setPhoneOtpSent(false);
    setConfirmationResult(null);
    reset();
  };

  const onSubmit = async (data) => {
    if (authMode === "email") {
      if (isSignUp) {
        handleSignupOtpSend(data);
      } else {
        try {
          await signInWithEmailAndPassword(auth, data.email, data.password);
          alert("Sign-In Successful!");
          setShowAuthModal(false);
          resetStates();
        } catch (error) {
          setErrorMessage(error.message);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
          onClick={() => {
            setShowAuthModal(false);
            resetStates();
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex justify-center mb-6 gap-2">
          <button
            className={`flex-1 py-2 rounded-l-lg font-semibold transition-all duration-200 ${authMode === "email" ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-700"}`}
            onClick={() => setAuthMode("email")}
          >
            Email
          </button>
          <button
            className={`flex-1 py-2 rounded-r-lg font-semibold transition-all duration-200 ${authMode === "phone" ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-700"}`}
            onClick={() => setAuthMode("phone")}
          >
            Phone
          </button>
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 tracking-tight text-blue-700 drop-shadow">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        {errorMessage && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center text-sm font-medium border border-red-200">{errorMessage}</div>
        )}
        {isSignUp ? (
          !phoneOtpSent ? (
            <form onSubmit={handleSubmit(handleSignupOtpSend)} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Bangladeshi Phone</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div ref={recaptchaRef} id="recaptcha-container" />
              <button type="submit" className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow transition">
                Send OTP
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                value={phoneOtp}
                onChange={e => setPhoneOtp(e.target.value)}
              />
              <button
                onClick={handleOtpVerifyAndSignup}
                className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow transition"
              >
                Verify & Create Account
              </button>
              <button
                onClick={() => {
                  setPhoneOtpSent(false);
                  setPhoneOtp("");
                }}
                className="w-full text-blue-600 hover:underline text-sm"
              >
                🔁 Resend OTP
              </button>
            </div>
          )
        ) : (
          // Sign in: allow either email/password or phone/OTP
          authMode === "email" ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <button type="submit" className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow transition">
                Sign In
              </button>
            </form>
          ) : (
            !phoneOtpSent ? (
              <div className="space-y-5">
                <label className="block text-gray-700 font-medium mb-1">Bangladeshi Phone</label>
                <input
                  type="text"
                  placeholder="e.g. +8801XXXXXXXXX or 01XXXXXXXXX"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
                <div ref={recaptchaRef} id="recaptcha-container" />
                <button
                  onClick={handleSendPhoneOtp}
                  className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow transition"
                >
                  Send OTP
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={phoneOtp}
                  onChange={e => setPhoneOtp(e.target.value)}
                />
                <button
                  onClick={handleVerifyPhoneOtp}
                  className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow transition"
                >
                  Verify & Sign In
                </button>
                <button
                  onClick={() => {
                    setPhoneOtpSent(false);
                    setPhoneOtp("");
                  }}
                  className="w-full text-blue-600 hover:underline text-sm"
                >
                  🔁 Resend OTP
                </button>
              </div>
            )
          )
        )}
        <p className="text-center mt-6 text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            className="text-blue-600 font-semibold ml-1 hover:underline"
            onClick={() => setIsSignUp((prev) => !prev)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
