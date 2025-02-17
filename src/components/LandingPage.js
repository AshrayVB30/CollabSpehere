import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/LandingPage.css';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme colors
  const lightTheme = {
    backgroundColor: '#CB9DF0',
    headerBackground: '#F0C1E1',
    cardBackground: '#FDDBBB',
    textColor: '#000000',
  };

  const darkTheme = {
    backgroundColor: '#09122C',
    headerBackground: '#872341',
    cardBackground: '#BE3144',
    textColor: '#FFFFFF',
  };
  
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          backgroundColor: currentTheme.headerBackground,
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <h1>CollabSphere</h1>

        {/* Hamburger menu moved to the top-right corner */}
        <div style={{ position: 'absolute', top: '1rem', right: '4rem' }}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: currentTheme.textColor,
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '3rem',
                right: '1rem',
                backgroundColor: currentTheme.cardBackground,
                color: currentTheme.textColor,
                borderRadius: '8px',
                padding: '1rem',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/login" style={{ color: currentTheme.textColor, textDecoration: 'none' }}>
                    Login
                  </a>
                </li>
                <li>
                  <a href="/register" style={{ color: currentTheme.textColor, textDecoration: 'none' }}>
                    Register
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Theme toggle button moved to the right side of the page */}
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: currentTheme.textColor,
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <div className="container py-5" style={{ flex: 1 }}>
        <section className="mb-5 text-center">
          <h2>CollabSphere</h2>
          <h3>Welcome to the future of collaboration</h3>
          <p>
            CollabSphere is your go-to platform for collaboration, creativity, and innovation. Our
            goal is to empower teams and individuals to achieve more together. Whether you're working on a small project or a large-scale initiative, CollabSphere offers the tools you need to succeed. From real-time collaboration to seamless communication, we provide everything to foster teamwork and drive results.
          </p>
          <p>
            Our platform integrates the best features for teams, enabling better workflow management, task delegation, and tracking. With a user-friendly interface and powerful tools, CollabSphere ensures that everyone in your team is on the same page. Join us today and experience the future of collaborative workspaces.
          </p>
        </section>

        <section>
  <h3 className="text-center mb-4">FEATURES</h3>
  <div className="row justify-content-center">
  <div className="col-md-4 mb-3">
  <div
    className="p-4 rounded shadow d-flex flex-column feature-box"
    style={{
      backgroundColor: currentTheme.cardBackground,
      minHeight: '290px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <h4 className="text-center">Team Leader</h4>
    <div className="feature-content">
      <ul>
        <li>Organize team members and assign tasks with ease.</li>
        <li>Track project progress with real-time updates.</li>
        <li>Gain insights through analytics to make data-driven decisions.</li>
        <li>Foster collaboration and communication within your team.</li>
      </ul>
    </div>
  </div>
</div>

    <div className="col-md-4 mb-3">
  <div
    className="p-4 rounded shadow d-flex flex-column feature-box"
    style={{
      backgroundColor: currentTheme.cardBackground,
      minHeight: '250px',
      position: 'relative',
      overflow: 'hidden', // Ensures the content doesn't overflow when sliding
    }}
  >
    <h4 className="text-center">Developer</h4>
    <div className="feature-content">
      <ul>
        <li>Collaborate on coding projects with version control.</li>
        <li>Share and review code efficiently with built-in tools.</li>
        <li>Access detailed documentation and guidelines for seamless development.</li>
        <li>Track bugs, tasks, and improvements in one place.</li>
      </ul>
    </div>
  </div>
</div>
<div className="col-md-4 mb-3">
  <div
    className="p-4 rounded shadow d-flex flex-column feature-box"
    style={{
      backgroundColor: currentTheme.cardBackground,
      minHeight: '250px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <h4 className="text-center">Investor</h4>
    <div className="feature-content">
      <ul>
        <li>Monitor project milestones and key performance indicators.</li>
        <li>Stay informed about the status and health of ongoing projects.</li>
        <li>Review detailed reports and forecasts to make informed investment decisions.</li>
        <li>Receive timely updates on team progress and challenges.</li>
      </ul>
    </div>
  </div>
</div>
  </div>
</section>
      </div>

      <footer
        style={{
          backgroundColor: currentTheme.headerBackground,
          color: currentTheme.textColor,
          padding: '1rem',
          textAlign: 'center',
          marginTop: 'auto',
        }}
      >
        <p>&copy; 2025 CollabSphere</p>
      </footer>
    </div>
  );
};

export default LandingPage;
