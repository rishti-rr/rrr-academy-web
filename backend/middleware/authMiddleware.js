// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Access denied. No token provided." });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (decoded.role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admin only." });
//     }

//     req.user = decoded; // future use
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid or expired token." });
//   }
// };

// module.exports = authMiddleware;




const jwt = require('jsonwebtoken');

// Middleware to verify token and ensure the user is an admin
const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    req.user = decoded; // Save user info for future use
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = {
  verifyAdmin
};
