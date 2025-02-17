import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// Components
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
// Dashboards
import TeamLeaderDashboard from "./dashboards/TeamLeaderDashboard";
import DeveloperDashboard from "./dashboards/DeveloperDashboard";
import InvestorDashboard from "./dashboards/InvestorDashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const handleLogin = (status, userRole) => {
    setIsLoggedIn(status);
    setRole(userRole);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Team Leader Dashboard Route */}
        <Route
          path="/team-leader-dashboard"
          element={
            isLoggedIn && role === "Team Leader" ? (
              <TeamLeaderDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Developer Dashboard Route */}
        <Route
          path="/developer-dashboard"
          element={
            isLoggedIn && role === "Developer" ? (
              <DeveloperDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Investor Dashboard Route */}
        <Route
          path="/investor-dashboard"
          element={
            isLoggedIn && role === "Investor" ? (
              <InvestorDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
