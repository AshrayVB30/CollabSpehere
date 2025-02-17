import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, role } = formData;

    if (!email || !password || !role) {
      alert("All fields are required!");
      return;
    }

    setShowModal(true);
    setTimeout(() => {
      onLogin(true, role); // Pass login status and role to App.js

      // Redirect based on role
      if (role === "Team Leader") {
        navigate("/team-leader-dashboard");
      } else if (role === "Developer") {
        navigate("/developer-dashboard");
      } else if (role === "Investor") {
        navigate("/investor-dashboard");
      } else {
        alert("Invalid role selected!");
      }
    }, 1000);
  };

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

  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{ cursor: "pointer", color: currentTheme.textColor }}
          onClick={() => navigate("/")}
        >
          CollabSphere
        </h1>

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
                    to="/"
                    style={{ color: currentTheme.textColor, textDecoration: "none" }}
                  >
                    Home
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

        {/* Dark Mode Toggle */}
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
      </header>

      {/* Login Form */}
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
        <h2 className="text-center">Login</h2>
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
              Password:
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
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1050,
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login Successful</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                You have successfully logged in!
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

export default Login;

