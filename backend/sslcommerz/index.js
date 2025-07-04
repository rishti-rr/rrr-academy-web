// Example usage of sslcommerzService
const { initiatePayment } = require('./sslcommerzService');

// Example postData (replace with real data in your route)
const postData = {
  store_id: "rrrac6860de3de05e1",
  store_passwd: "rrrac6860de3de05e1@ssl",
  total_amount: 100,
  currency: "BDT",
  tran_id: "RRR" + Date.now(),
  success_url: "http://ug2002032.cse.pstu.ac.bd/payment-success",
  fail_url: "http://ug2002032.cse.pstu.ac.bd/payment-fail",
  cancel_url: "http://ug2002032.cse.pstu.ac.bd/payment-cancel",
  cus_name: "Test User",
  cus_email: "test@example.com",
  cus_add1: "PSTU, Dumki, Patuakhali",
  cus_phone: "01700000000",
  shipping_method: "NO",
  product_name: "Test Product",
  product_category: "Test",
  product_profile: "general"
};

// For demonstration only
// (Uncomment to test directly)
// initiatePayment(postData).then(console.log).catch(console.error);
