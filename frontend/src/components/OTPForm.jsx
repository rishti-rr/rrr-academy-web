// // frontend/src/components/OTPForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const OTPForm = () => {
//   const [phone, setPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [step, setStep] = useState(1);
//   const [message, setMessage] = useState('');

//   const sendOTP = async () => {
//     try {
//       const res = await axios.post('http://localhost:5000/api/otp/send-otp', { phone });
//       setStep(2);
//       setMessage(res.data.message);
//     } catch (error) {
//       setMessage('Error sending OTP');
//     }
//   };

//   const verifyOTP = async () => {
//     try {
//       const res = await axios.post('http://localhost:5000/api/otp/verify-otp', { phone, otp });
//       setMessage(res.data.message);
//     } catch (error) {
//       setMessage('Invalid OTP');
//     }
//   };

//   return (
//     <div>
//       <h2>OTP Verification</h2>
//       {step === 1 && (
//         <>
//           <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone" />
//           <button onClick={sendOTP}>Send OTP</button>
//         </>
//       )}
//       {step === 2 && (
//         <>
//           <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
//           <button onClick={verifyOTP}>Verify OTP</button>
//         </>
//       )}
//       <p>{message}</p>
//     </div>
//   );
// };

// export default OTPForm;
