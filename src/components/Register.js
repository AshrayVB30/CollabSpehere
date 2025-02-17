import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  // State management
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Theme colors
  const lightTheme = {
    backgroundColor: "#CB9DF0",
    headerBackground: "#F0C1E1",
    cardBackground: "#FDDBBB",
    textColor: "#000000",
  };

  const darkTheme = {
    backgroundColor: "#09122C",
    headerBackground: "#872341",
    cardBackground: "#BE3144",
    textColor: "#FFFFFF",
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { role, email, password, confirmPassword } = formData;

    if (!role || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setShowModal(true);
  };

  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: currentTheme.headerBackground,
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: currentTheme.textColor }}
        >
          <h1 style={{ cursor: "pointer" }}>CollabSphere</h1>
        </Link>

        {/* Hamburger Menu */}
        <div style={{ position: "absolute", top: "1rem", right: "4rem" }}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: currentTheme.textColor,
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div
              style={{
                position: "absolute",
                top: "3rem",
                right: "1rem",
                backgroundColor: currentTheme.cardBackground,
                color: currentTheme.textColor,
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <Link
                    to="/login"
                    style={{ color: currentTheme.textColor, textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    style={{ color: currentTheme.textColor, textDecoration: "none" }}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Theme Toggle Button */}
        <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: currentTheme.textColor,
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Registration Form */}
<div
  style={{
    width: "50%",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: currentTheme.cardBackground,
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  }}
>
  <h2>Registration Form</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="role" className="form-label">
        Select Role:
      </label>
      <select
        id="role"
        name="role"
        className="form-select"
        value={formData.role}
        onChange={handleChange}
        required
      >
        <option value="">Select Role</option>
        <option value="Team Leader">Team Leader</option>
        <option value="Developer">Developer</option>
        <option value="Investor">Investor</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email ID:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-control"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Create Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="form-control"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="confirmPassword" className="form-label">
        Confirm Password:
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        className="form-control"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
    </div>

    <div className="text-center" style={{ marginTop: "1rem" }}>
  <button type="submit" className="btn btn-primary">
    Register
  </button>
</div>
  </form>

  {/* Already have an account? Login link */}
  <div style={{ marginTop: "1rem", textAlign: "center" }}>
    <p>
      Already have an account?{" "}
      <Link to="/login" style={{ color: currentTheme.textColor }}>
        Login
      </Link>
    </p>
  </div>
</div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Registration Successful</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                You have successfully registered!
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          backgroundColor: currentTheme.headerBackground,
          color: currentTheme.textColor,
          padding: "1rem",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <p>&copy; 2025 CollabSphere. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Register;
