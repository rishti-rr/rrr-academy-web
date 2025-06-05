import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true);

  const handleLogin = (token) => {
    const validAdmin = token === "dummy-admin-token";

    if (validAdmin) {
      localStorage.setItem("adminToken", token);
      navigate("/dashboard");
    } else {
      setIsAdmin(false);
    }
  };

  const handleError = () => {
    setIsAdmin(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token !== "dummy-admin-token") {
      localStorage.removeItem("adminToken");
    }
  }, []);

  return (
    <div>
      {!isAdmin && (
        <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
          আপনি অ্যাডমিন নন, তাই প্রবেশ করতে পারবেন না।
        </p>
      )}
      <LoginForm onLogin={handleLogin} onError={handleError} />
    </div>
  );
};

export default Login;
