// frontend/utils/emailjs.js
import emailjs from 'emailjs-com';

// OTP EmailJS credentials
const OTP_SERVICE_ID = 'service_axn6cct';
const OTP_TEMPLATE_ID = 'template_1jf43mi';
const PUBLIC_KEY = '-bbgl4C8kYUC6OkQJ';

// Order confirmation EmailJS credentials (for reference, not used here)
// const ORDER_SERVICE_ID = 'service_oelhy1c';
// const ORDER_TEMPLATE_ID = 'template_8ol1x18';


// IMPORTANT: Update the variable name below to match your EmailJS template (likely 'to_email')
export const sendOtpEmail = async (toEmail, otp) => {
  const templateParams = {
    email: toEmail, // <-- matches your EmailJS template variable for recipient
    otp_code: otp,
  };

  try {
    await emailjs.send(OTP_SERVICE_ID, OTP_TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return { success: true };
  } catch (error) {
    console.error('EmailJS OTP send failed:', error);
    return { success: false, error };
  }
};