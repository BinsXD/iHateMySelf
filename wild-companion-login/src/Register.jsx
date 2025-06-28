import React from "react";
import { Link } from "react-router-dom";
import icons8Navigation1001 from "./icons8-navigation-100-1.png";
import "./registerstyle.css";

export const Register = () => {
  return (
    <div className="login-register">
      <div className="register-wrapper">
        {/* Header with logo */}
        <div className="register-header">
          <img
            className="register-navigation"
            alt="Navigation"
            src={icons8Navigation1001}
          />
          <div className="register-brand-section">
            <div className="register-brand-title">WILD COMPANION</div>
            <div className="register-tagline">Roam, Learn, and Grow</div>
          </div>
        </div>

        {/* Main content area */}
        <div className="register-main-content">
          {/* Left content */}
          <div className="register-left-section">
            <div className="register-heading">Create your account</div>
            <div className="register-brand-name">WILD COMPANION</div>
            <p className="register-description">
              Your smart guide to every building — join Wild Companion now.
            </p>
            <p className="login-link-text">
              Already have an account?{" "}
              <Link to="/login" className="login-link-highlight">
                Login here!
              </Link>
            </p>
          </div>

          {/* Right content (form) */}
          <div className="register-right-section">
            <div className="register-form-header">
              <div className="register-form-title">Register</div>
            </div>

            <div className="register-form-container">
              {/* Email */}
              <div className="register-input-group">
                <div className="register-input-wrapper">
                  <input
                    className="register-form-input"
                    placeholder="Enter email"
                    type="email"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="register-input-group">
                <div className="register-input-wrapper">
                  <input
                    className="register-form-input"
                    placeholder="Create username"
                    type="text"
                  />
                </div>
              </div>

              {/* Contact number */}
              <div className="register-input-group">
                <div className="register-input-wrapper">
                  <input
                    className="register-form-input"
                    placeholder="Contact number"
                    type="tel"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="register-input-group">
                <div className="register-input-wrapper">
                  <input
                    className="register-form-input"
                    placeholder="Create password"
                    type="password"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="register-input-group">
                <div className="register-input-wrapper">
                  <input
                    className="register-form-input"
                    placeholder="Confirm password"
                    type="password"
                  />
                </div>
              </div>

              {/* Submit button */}
              <div className="register-button-wrapper">
                <button className="register-submit-button">
                  <span className="register-submit-text">Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
