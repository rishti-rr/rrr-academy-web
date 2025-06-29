// frontend/utils/emailjs.js
import emailjs from 'emailjs-com';

// Your EmailJS credentials
const SERVICE_ID = 'service_axn6cct';
const TEMPLATE_ID = 'template_1jf43mi';
const PUBLIC_KEY = '-bbgl4C8kYUC6OkQJ';

export const sendOtpEmail = async (toEmail, otp) => {
  const templateParams = {
    user_email: toEmail,
    otp_code: otp,
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return { success: true };
  } catch (error) {
    console.error('EmailJS OTP send failed:', error);
    return { success: false, error };
  }
};