import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendReceiptEmail = async (to, items, total, orderId) => {
  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL, // sender email
      pass: process.env.EMAIL_PASS   // app password (not your real Gmail pass)
    }
  });

  // Build item list in HTML
  const itemList = items.map(item => `
    <li>
      <strong>${item.title}</strong> (${item.type}) – ${item.price.toLocaleString()} BDT
    </li>
  `).join('');

  // Compose email
  const mailOptions = {
    from: `"RRR Academy" <${process.env.ADMIN_EMAIL}>`,
    to,
    subject: `Your Receipt - Order #${orderId}`,
    html: `
      <h2>Thank you for your purchase from RRR Academy!</h2>
      <p><strong>Order ID:</strong> ${orderId}</p>
      <p><strong>Total Paid:</strong> ${total.toLocaleString()} BDT</p>
      <h3>Items Purchased:</h3>
      <ul>${itemList}</ul>
      <p style="margin-top:20px;">If you have any questions, reply to this email.</p>
      <p>Regards,<br/>RRR Academy Team</p>
    `
  };

  // Send email
  await transporter.sendMail(mailOptions);
};
