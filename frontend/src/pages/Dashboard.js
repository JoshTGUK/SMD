import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const tools = [
    {
      id: 1,
      title: 'Social Media Analytics',
      description: 'Track and analyze your social media performance across platforms',
      icon: '📊',
      path: '/tools/analytics'
    },
    {
      id: 2,
      title: 'Content Scheduler',
      description: 'Schedule and manage your social media posts',
      icon: '📅',
      path: '/tools/scheduler'
    },
    {
      id: 3,
      title: 'Media Downloader',
      description: 'Download media from various social platforms',
      icon: '⬇️',
      path: '/tools/downloader'
    },
    {
      id: 4,
      title: 'Trending Content',
      description: 'Discover trending topics and content ideas',
      icon: '🔥',
      path: '/tools/trending'
    }
  ];

  return (
    <div className="dashboard">
      <h1>Welcome to Social Media Tools</h1>
      <p className="dashboard-subtitle">Select a tool to get started</p>
      
      <div className="tools-grid">
        {tools.map((tool) => (
          <Link to={tool.path} key={tool.id} className="tool-card">
            <div className="tool-icon">{tool.icon}</div>
            <h2>{tool.title}</h2>
            <p>{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
