// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password.");
//       return;
//     }

//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/admin/login", {  // backend url update করো তোমার অনুযায়ী
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       // সফল লগিন: টোকেন লোকালস্টোরেজে সেভ করো
//       localStorage.setItem("adminToken", data.token);
//       localStorage.setItem("adminEmail", email); // প্রোফাইল শো করার জন্য

//       setLoading(false);
//       navigate("/"); // লগিন হলে ড্যাশবোর্ড পেজে নিয়ে যাবে
//     } catch (err) {
//       setLoading(false);
//       setError(err.message);
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background:
//           "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//         padding: "20px",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           backgroundColor: "white",
//           padding: "40px 30px",
//           borderRadius: "10px",
//           boxShadow:
//             "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)",
//           width: "100%",
//           maxWidth: "400px",
//           boxSizing: "border-box",
//         }}
//         aria-label="Admin Login Form"
//       >
//         <h2
//           style={{
//             marginBottom: "25px",
//             textAlign: "center",
//             color: "#4b0082",
//           }}
//         >
//           Admin Login
//         </h2>

//         {error && (
//           <div
//             role="alert"
//             style={{
//               marginBottom: "20px",
//               padding: "10px",
//               backgroundColor: "#ffe6e6",
//               color: "#cc0000",
//               borderRadius: "5px",
//               fontWeight: "600",
//               fontSize: "0.9rem",
//             }}
//           >
//             {error}
//           </div>
//         )}

//         <label
//           htmlFor="email"
//           style={{
//             display: "block",
//             marginBottom: "8px",
//             fontWeight: "600",
//             color: "#333",
//             fontSize: "0.95rem",
//           }}
//         >
//           Email Address
//         </label>
//         <input
//           id="email"
//           type="email"
//           placeholder="admin@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{
//             width: "100%",
//             padding: "10px 12px",
//             marginBottom: "20px",
//             borderRadius: "6px",
//             border: "1.5px solid #ddd",
//             fontSize: "1rem",
//             outline: "none",
//             transition: "border-color 0.3s",
//           }}
//           onFocus={(e) => (e.target.style.borderColor = "#764ba2")}
//           onBlur={(e) => (e.target.style.borderColor = "#ddd")}
//           required
//           autoComplete="username"
//           aria-required="true"
//           disabled={loading}
//         />

//         <label
//           htmlFor="password"
//           style={{
//             display: "block",
//             marginBottom: "8px",
//             fontWeight: "600",
//             color: "#333",
//             fontSize: "0.95rem",
//           }}
//         >
//           Password
//         </label>
//         <input
//           id="password"
//           type="password"
//           placeholder="********"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{
//             width: "100%",
//             padding: "10px 12px",
//             marginBottom: "30px",
//             borderRadius: "6px",
//             border: "1.5px solid #ddd",
//             fontSize: "1rem",
//             outline: "none",
//             transition: "border-color 0.3s",
//           }}
//           onFocus={(e) => (e.target.style.borderColor = "#764ba2")}
//           onBlur={(e) => (e.target.style.borderColor = "#ddd")}
//           required
//           autoComplete="current-password"
//           aria-required="true"
//           disabled={loading}
//         />

//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "12px 0",
//             backgroundColor: loading ? "#a78ade" : "#764ba2",
//             border: "none",
//             borderRadius: "8px",
//             color: "white",
//             fontWeight: "700",
//             fontSize: "1.1rem",
//             cursor: loading ? "not-allowed" : "pointer",
//             boxShadow: "0 4px 12px rgba(118, 75, 162, 0.6)",
//             transition: "background-color 0.3s ease",
//           }}
//           aria-label="Submit login form"
//           disabled={loading}
//         >
//           {loading ? "Logging in..." : "Log In"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";

const LoginForm = ({ onLogin, onError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const ADMIN_USERNAME = "rishti.rr.300102@gmail.com";
    const ADMIN_PASSWORD = "R_&[=]&5790*<rr>";

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      onLogin("dummy-admin-token");
    } else {
      setError("Invalid username or password");
      if (onError) onError(); // 🔸 call onError when invalid
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={{ marginBottom: 20 }}>Admin Login</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button style={styles.button} type="submit">
        Login
      </button>
      {error && <p style={styles.error}>{error}</p>}
    </form>
  );
};

const styles = {
  form: {
    maxWidth: 320,
    margin: "100px auto",
    padding: 24,
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 16,
    borderRadius: 4,
    border: "1px solid #ddd",
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "#5A67D8",
    color: "white",
    border: "none",
    borderRadius: 4,
    fontSize: 16,
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
};

export default LoginForm;
