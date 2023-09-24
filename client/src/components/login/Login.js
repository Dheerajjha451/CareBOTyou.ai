import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import loginImage from "../images/Rectangle 2.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission, sending data to a server
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="desktop">
      <div className="login-box-container">
        <div className="login-box">
          <div className="login-content">
            <div className="login-image-container">
              <img src={loginImage} alt="Login" className="login-image" />
            </div>
            <div className="login-form-container">
              <h2>Welcome back!</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <button>Login</button>
              </form>
              <p className="login-link">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
