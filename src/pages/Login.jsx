import React, { useState } from "react";
import "./Login.css"; // Import Core CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/1200px-Logo_Bayer.svg.png" width="150" />
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot Password & Register */}
          <div className="links">
            <a href="/forgot-password">Forgot Password?</a>
            <a href="/register">New User? Register here</a>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
