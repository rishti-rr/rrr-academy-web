const express = require("express");
const router = express.Router();
console.log("Trying to load firebaseAdmin...");
const admin = require("../config/firebaseAdmin");
console.log("Loaded firebaseAdmin");


router.get("/", async (req, res) => {  
  try {
    const listUsers = await admin.auth().listUsers();
    const users = listUsers.users.map(u => ({
      uid: u.uid,
      email: u.email,
      name: u.displayName || "N/A",
      provider: u.providerData[0]?.providerId || "password",
      createdAt: u.metadata.creationTime
    }));
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
