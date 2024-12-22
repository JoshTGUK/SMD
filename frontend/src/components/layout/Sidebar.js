import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { path: '/tools/analytics', icon: '📊', label: 'Analytics' },
    { path: '/tools/scheduler', icon: '📅', label: 'Scheduler' },
    { path: '/tools/downloader', icon: '⬇️', label: 'Downloader' },
    { path: '/tools/trending', icon: '🔥', label: 'Trending' },
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
