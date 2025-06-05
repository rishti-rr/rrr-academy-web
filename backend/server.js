const dotenv = require('dotenv'); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const courseRoutes = require("./routes/courseRoutes");
const adminRoutes = require('./routes/adminRoutes');
const statsRoutes = require("./routes/stats");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file!");
  process.exit(1); // Exit if no MongoDB URI is provided
}
  
mongoose
  .connect(MONGO_URI)
  //   , {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Error connecting to DB:", err));

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/courses", courseRoutes);
app.use('/api/admin', adminRoutes);
app.use("/api/stats", statsRoutes); 

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
