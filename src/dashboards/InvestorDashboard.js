import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InvestorDashboard = () => {
  // Mock Data for Projects and Investors
  const [projects] = useState(
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      title: `Project ${i + 1}`,
      category: "Technology",
      description: "This is a sample project description.",
      currentFunding: `$${(i + 1) * 1000}`,
      goalFunding: "$10000",
    }))
  );

  const [investors] = useState(
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      name: `Investor ${i + 1}`,
      rating: "4.5/5",
    }))
  );

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

  // Handlers for forms and buttons
  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value;
    const category = e.target.category.value;
    console.log("Search Keyword:", keyword, "Category:", category);
  };

  const handleInvestment = (projectId) => {
    console.log(`Investing in Project ${projectId}`);
  };

  const handleNegotiation = (projectId) => {
    console.log(`Negotiating for Project ${projectId}`);
  };

  return (
    <div style={{ backgroundColor: currentTheme.backgroundColor, minHeight: "100vh" }}>
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
        <h1 style={{ cursor: "pointer", color: currentTheme.textColor }}>CollabSphere</h1>

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
                  <a href="/" style={{ color: currentTheme.textColor, textDecoration: "none" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/register" style={{ color: currentTheme.textColor, textDecoration: "none" }}>
                    Register
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

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

      {/* Main Content */}
      <main className="container py-5">
        {/* Search Form */}
        <section className="mb-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Search Projects</h5>
              <form onSubmit={handleSearch}>
                <div className="mb-3">
                  <label htmlFor="keyword" className="form-label">
                    Keyword
                  </label>
                  <input type="text" className="form-control" id="keyword" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select className="form-select" id="category" required>
                    <option value="">Select category</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Project Listings */}
        <section className="mb-5">
          <h5 className="mb-3">Project Listings</h5>
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-4" key={project.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">Category: {project.category}</p>
                    <p className="card-text">{project.description}</p>
                    <p className="card-text">Current Funding: {project.currentFunding}</p>
                    <p className="card-text">Goal Funding: {project.goalFunding}</p>
                    <div className="d-flex justify-content-around">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleInvestment(project.id)}
                      >
                        Invest
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleNegotiation(project.id)}
                      >
                        Negotiate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investor Ratings */}
        <section className="mb-5">
          <h5 className="mb-3">Investor Ratings</h5>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Investor Name</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {investors.map((investor) => (
                <tr key={investor.id}>
                  <td>{investor.id}</td>
                  <td>{investor.name}</td>
                  <td>{investor.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

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

export default InvestorDashboard;
