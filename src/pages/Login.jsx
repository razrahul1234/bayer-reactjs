import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/UserSlice";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSelector = useSelector(state => state.user);
  console.log(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email : email, password: password})
    }).then(res => res.json()).then(res => {
       console.log("res[0] : ", res);
        dispatch(setUser({...res.user[0]}));
        navigate("/dashboard")
    })
  };

  return (
    <div className="login-container">
      {/* {userSelector} */}
      <div className="login-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/1200px-Logo_Bayer.svg.png" width="100" />
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
