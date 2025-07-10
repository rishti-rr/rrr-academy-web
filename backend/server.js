const dotenv = require('dotenv'); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Load environment variables
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Health check route (for Railway or browser testing)
app.get('/', (req, res) => {
  res.send('RRR Academy backend is live!');
});

// MongoDB Atlas Connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("MONGO_URI is missing in .env file!");
  process.exit(1); // Exit if no MongoDB URI is provided
}

// console.log("Starting server...");

// mongoose.connect(MONGO_URI)
//   .then(() => console.log("Database connected successfully"))
//   .catch((err) => console.error("Error connecting to DB:", err));

mongoose.connect(MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error("Error connecting to DB:", err);
    process.exit(1);  // Crash server on DB fail to avoid undefined behavior
  });

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  // optionally close server or exit process
});

const firebaseUserRoutes = require('./routes/firebaseUserRoutes');
app.use("/api/firebase-users", firebaseUserRoutes);

// Routes
const bookRoutes = require("./routes/bookRoutes");
const courseRoutes = require("./routes/courseRoutes");
const adminRoutes = require('./routes/adminRoutes');
// const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orders");
// const otpRoutes = require('./routes/otpRoutes');
const sslcommerzRoutes = require('./routes/sslcommerzRoutes');


app.use("/api/books", bookRoutes);
app.use("/api/courses", courseRoutes);
app.use('/api/admin', adminRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
// app.use('/api/otp', otpRoutes);
app.use('/api/sslcommerz', sslcommerzRoutes);

// Then add the 404 fallback route
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const PORT = process.env.PORT || 2032;
// app.listen(PORT, '127.0.0.1', () => {
//   console.log(`Server running on http://127.0.0.1:${PORT}`);
// });