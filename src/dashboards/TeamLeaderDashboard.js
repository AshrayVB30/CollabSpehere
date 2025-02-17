import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamLeaderDashboard = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    targetedAudiences: "",
    problemStatement: "",
    technologyUsed: "",
    startDate: "",
    endDate: "",
    stipend: "",
    developersRequired: "",
    skillsRequired: "",
    investments: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      projectName,
      targetedAudiences,
      problemStatement,
      technologyUsed,
      startDate,
      endDate,
      stipend,
      developersRequired,
      skillsRequired,
      investments,
    } = formData;

    if (
      !projectName ||
      !targetedAudiences ||
      !problemStatement ||
      !technologyUsed ||
      !startDate ||
      !endDate ||
      !stipend ||
      !developersRequired ||
      !skillsRequired ||
      !investments
    ) {
      setError("Please fill out all fields.");
      return;
    }

    if (parseInt(developersRequired) <= 0) {
      setError("Number of developers required should be a positive integer.");
      return;
    }

    if (parseInt(stipend) < 0 || parseInt(investments) < 0) {
      setError("Stipend and investments should be non-negative.");
      return;
    }

    const today = new Date();
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);

    if (startDateObject < today) {
      setError("Start date should not be in the past.");
      return;
    }

    if (endDateObject < startDateObject) {
      setError("End date should not be before start date.");
      return;
    }

    const stipendPerDeveloper = parseInt(stipend) / parseInt(developersRequired);
    const estimatedCost = parseInt(stipend) * parseInt(developersRequired);
    const totalCost = estimatedCost + parseInt(investments);

    setResult({
      projectName,
      targetedAudiences,
      problemStatement,
      technologyUsed,
      startDate,
      endDate,
      stipend,
      developersRequired,
      skillsRequired,
      investments,
      stipendPerDeveloper,
      estimatedCost,
      totalCost,
    });
    setError("");
  };

  const navigate = useNavigate();

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

      {/* Form */}
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
        <h2 className="text-center">Team Leader Dashboard</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="projectName" className="form-label">
              Project Name:
            </label>
            <input
              type="text"
              id="projectName"
              className="form-control"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="targetedAudiences" className="form-label">
              Targeted Audiences:
            </label>
            <textarea
              id="targetedAudiences"
              className="form-control"
              value={formData.targetedAudiences}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="problemStatement" className="form-label">
              Problem Statement:
            </label>
            <textarea
              id="problemStatement"
              className="form-control"
              value={formData.problemStatement}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="technologyUsed" className="form-label">
              Technology Used:
            </label>
            <input
              type="text"
              id="technologyUsed"
              className="form-control"
              value={formData.technologyUsed}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              className="form-control"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              className="form-control"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stipend" className="form-label">
              Stipend (in rupees):
            </label>
            <input
              type="number"
              id="stipend"
              className="form-control"
              value={formData.stipend}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="developersRequired" className="form-label">
              No. of Developers Required:
            </label>
            <input
              type="number"
              id="developersRequired"
              className="form-control"
              value={formData.developersRequired}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="skillsRequired" className="form-label">
              Skills Required:
            </label>
            <input
              type="text"
              id="skillsRequired"
              className="form-control"
              value={formData.skillsRequired}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="investments" className="form-label">
              Investments (in rupees):
            </label>
            <input
              type="number"
              id="investments"
              className="form-control"
              value={formData.investments}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</div>
        </form>

        {error && <p className="text-danger mt-3">{error}</p>}

        {result && (
          <div className="mt-4">
            <h3>Project Details</h3>
            <p>Project Name: {result.projectName}</p>
            <p>Targeted Audiences: {result.targetedAudiences}</p>
            <p>Problem Statement: {result.problemStatement}</p>
            <p>Technology Used: {result.technologyUsed}</p>
            <p>Start Date: {result.startDate}</p>
            <p>End Date: {result.endDate}</p>
            <p>Stipend: ₹{result.stipend}</p>
            <p>No. of Developers Required: {result.developersRequired}</p>
            <p>Skills Required: {result.skillsRequired}</p>
            <p>Investments: ₹{result.investments}</p>
            <p>Stipend per Developer: ₹{result.stipendPerDeveloper.toFixed(2)}</p>
            <p>Estimated Cost: ₹{result.estimatedCost}</p>
            <p>Total Cost: ₹{result.totalCost}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: currentTheme.headerBackground,
          color: currentTheme.textColor,
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <p>&copy; 2025 CollabSphere. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default TeamLeaderDashboard;
