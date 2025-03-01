import React, { useState } from "react";
import "./Register.css"; // Import Core CSS

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("User Data:", user);
    // Add registration API integration here
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">User Registration</h2>

        <form onSubmit={handleRegister}>
          {/* First Name */}
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={user.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name */}
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={user.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Register Button */}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
