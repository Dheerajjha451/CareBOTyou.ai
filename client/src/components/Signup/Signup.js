import React, { useState } from "react";
import "./Signup.css";
import img2 from "../images/Rectangle 2.png";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission, sending data to a server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="desktop">
      <div className="signup-box-container">
        <div className="signup-box">
          <div className="signup-content">
            <div className="signup-image-container">
              <img src={img2} alt="Signup" className="signup-image" />
            </div>
            <div className="signup-form-container">
              <h2>Create an Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                </div>
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
                <button>Sign Up</button>
              </form>
              <p className="login-link">
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
