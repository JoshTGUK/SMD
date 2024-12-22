import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Analytics',
      description: 'Track your social media performance with real-time analytics'
    },
    {
      icon: '⚡',
      title: 'Scheduling',
      description: 'Schedule posts across multiple platforms effortlessly'
    },
    {
      icon: '💫',
      title: 'Content Download',
      description: 'Download and save content from any social platform'
    },
    {
      icon: '🔥',
      title: 'Trend Analysis',
      description: 'Stay ahead with AI-powered trend predictions'
    }
  ];

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1>
            <span className="gradient-text">Next-Gen</span>
            <br />
            Social Media Management
          </h1>
          <p className="header-subtitle">
            Elevate your social presence with AI-powered tools and analytics
          </p>
          <div className="header-actions">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Watch Demo</button>
          </div>
        </div>
        <div className="header-visual">
          <div className="geometric-shape"></div>
          <div className="floating-elements">
            <span className="floating-icon">⚡</span>
            <span className="floating-icon">🚀</span>
            <span className="floating-icon">💫</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">
          <span className="gradient-text">Powerful Features</span>
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="gradient-text">10M+</h3>
            <p>Posts Analyzed</p>
          </div>
          <div className="stat-card">
            <h3 className="gradient-text">50K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-card">
            <h3 className="gradient-text">99%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Transform Your Social Media?</h2>
        <p>Join thousands of creators and businesses using our platform</p>
        <button className="primary-button">Start Free Trial</button>
      </div>
    </div>
  );
};

export default Dashboard;
