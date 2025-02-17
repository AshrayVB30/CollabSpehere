import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const DeveloperDashboard = () => {
  const [profile, setProfile] = useState({ name: "", email: "", skills: "", experience: "" });
  const [search, setSearch] = useState({ keyword: "", technology: "", stipend: "" });
  const [applyData, setApplyData] = useState({ projectName: "", message: "" });
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    // Fetch or generate projects and tasks data
    const mockProjects = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Project ${i + 1}`,
      technology: `Technology ${i + 1}`,
      stipend: `${1000 + i * 100}`,
      status: i % 2 === 0 ? "Completed" : "Ongoing",
    }));

    const mockTasks = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: `Task ${i + 1}`,
      status: i % 2 === 0 ? "Completed" : "Ongoing",
    }));

    setProjects(mockProjects);
    setTasks(mockTasks);
  }, []);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data: ", profile);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Data: ", search);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    console.log("Apply Data: ", applyData);
  };

  return (
    <div style={{ backgroundColor: currentTheme.backgroundColor, minHeight: "100vh" }}>
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

      <div className="container mt-5">
      <h1 className="text-center mb-4">Developer Dashboard</h1>

      {/* Profile Form */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Create Profile</h5>
              <form onSubmit={handleProfileSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="skills" className="form-label">Skills</label>
                  <input
                    type="text"
                    className="form-control"
                    id="skills"
                    value={profile.skills}
                    onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="experience" className="form-label">Experience</label>
                  <input
                    type="text"
                    className="form-control"
                    id="experience"
                    value={profile.experience}
                    onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
                    required
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Save Profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        

        {/* Search Projects Form */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Search Projects</h5>
              <form onSubmit={handleSearchSubmit}>
                <div className="mb-3">
                  <label htmlFor="keyword" className="form-label">Keyword</label>
                  <input
                    type="text"
                    className="form-control"
                    id="keyword"
                    value={search.keyword}
                    onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="technology" className="form-label">Technology</label>
                  <input
                    type="text"
                    className="form-control"
                    id="technology"
                    value={search.technology}
                    onChange={(e) => setSearch({ ...search, technology: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="stipend" className="form-label">Stipend</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stipend"
                    value={search.stipend}
                    onChange={(e) => setSearch({ ...search, stipend: e.target.value })}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <div className="row">
        <div className="col-md-6">
          <h5>Tasks</h5>
          <ul className="list-group">
            {tasks.map((task) => (
              <li key={task.id} className="list-group-item">
                {task.name} - {task.status}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Available Projects Table */}
      <div className="row mt-4">
        <h5>Available Projects</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Technology</th>
              <th>Stipend</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.technology}</td>
                <td>{project.stipend}</td>
                <td>{project.status}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-success"
                      onClick={() => setApplyData({ ...applyData, projectName: project.name })}
                    >
                      Apply
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Apply for a Project Form */}
      <div className="row mt-4">
        <div className="col-md-12">
          <h5>Apply for a Project</h5>
          <form onSubmit={handleApplySubmit}>
            <div className="mb-3">
              <label htmlFor="projectName" className="form-label">Project Name</label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                value={applyData.projectName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                value={applyData.message}
                onChange={(e) => setApplyData({ ...applyData, message: e.target.value })}
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>

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

export default DeveloperDashboard;
