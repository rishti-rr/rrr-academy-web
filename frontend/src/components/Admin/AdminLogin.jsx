import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', credentials);
      localStorage.setItem('adminToken', response.data.token);  // Store token in localStorage
      navigate('/admin'); // Redirect to admin panel on successful login
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-form">
      <h2>Admin Login</h2>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
      />
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
