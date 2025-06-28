import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons8Navigation1001 from "./icons8-navigation-100-1.png";
import "./loginstyle.css";

export const Login = () => {
  const navigate = useNavigate(); // 👈 create navigator
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailOrUser, password }),
      });

      const data = await res.json();
      setResponseMessage(data.message);

      if (data.message === "Login successful!") {
        navigate("/dashboard"); // 👈 redirect to dashboard
      }
    } catch (error) {
      console.error("Login error:", error);
      setResponseMessage("Error connecting to server");
    }
  };

  return (
    <div className="login">
      <div className="div-2">
        {/* Header */}
        <div className="header">
          <img
            className="navigation"
            alt="Navigation"
            src={icons8Navigation1001}
          />
          <div className="brand-section">
            <div className="text-wrapper-3">WILD COMPANION</div>
            <div className="text-wrapper-4">Roam, Learn, and Grow</div>
          </div>
        </div>

        {/* Main */}
        <div className="main-content">
          <div className="left-section">
            <div className="text-wrapper-9">Sign in to</div>
            <div className="brand-title">WILD COMPANION</div>
            <p className="description">
              Your personal campus navigator. Sign in to explore!
            </p>
            <p className="register-text">
              If you don't have an account,{" "}
              <Link to="/register" className="text-wrapper-11">
                Register here!
              </Link>
            </p>
          </div>

          <div className="right-section">
            <div className="form-header">
              <div className="form-title">Sign in</div>
            </div>

            <div className="form-container">
              {/* Email */}
              <div className="input-group">
                <div className="input-wrapper">
                  <input
                    className="enter-email-or-user"
                    placeholder="Enter email or user name"
                    type="text"
                    value={emailOrUser}
                    onChange={(e) => setEmailOrUser(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="input-group">
                <div className="input-wrapper">
                  <input
                    className="password-input"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="password-toggle">
                    <div className="invisible-icon" />
                  </div>
                </div>
                <div className="forgot-password">
                  <span className="text-wrapper-6">Forgot password?</span>
                </div>
              </div>

              {/* Login button */}
              <div className="login-button-wrapper">
                <button className="login-button" onClick={handleLogin}>
                  <span className="login-button-text">Login</span>
                </button>
              </div>

              {/* Guest login */}
              <div className="guest-button-wrapper">
                <button className="guest-button">
                  <span className="guest-button-text">Login as Guest</span>
                </button>
              </div>

              {/* Display response */}
              <div className="login-response">
                <p>{responseMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
