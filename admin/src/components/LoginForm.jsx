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
