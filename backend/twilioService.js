// // backend/twilioService.js
// const twilio = require('twilio');
// const dotenv = require('dotenv');
// dotenv.config();

// const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// const sendOTP = async (phone, otp) => {
//   return client.messages.create({
//     body: `Your OTP is: ${otp}`,
//     from: process.env.TWILIO_PHONE_NUMBER,
//     to: phone
//   });
// };

// module.exports = { sendOTP };
