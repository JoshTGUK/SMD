import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId = null;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsToolsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsToolsOpen(false);
    }, 300); // 300ms delay before closing
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsToolsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tools = {
    'Content Creation': [
      { name: 'AI Writing Assistant', path: '/tools/ai-writer' },
      { name: 'Caption Creator', path: '/tools/captions' },
      { name: 'Hashtag Generator', path: '/tools/hashtags' },
      { name: 'Content Idea Generator', path: '/tools/ideas' }
    ],
    'Media Tools': [
      { name: 'Post Downloader', path: '/tools/downloader' },
      { name: 'Image & Video Editor', path: '/tools/editor' },
      { name: 'Media Library', path: '/tools/library' },
      { name: 'Custom Widgets', path: '/tools/widgets' }
    ],
    'Planning & Scheduling': [
      { name: 'Post Scheduler', path: '/tools/scheduler' },
      { name: 'Content Planner', path: '/tools/planner' },
      { name: 'Auto-Reposting', path: '/tools/reposting' },
      { name: 'Team Collaboration', path: '/tools/team' }
    ],
    'Analytics & Research': [
      { name: 'Analytics Dashboard', path: '/tools/analytics' },
      { name: 'Competitor Analysis', path: '/tools/competitors' },
      { name: 'Social Listening', path: '/tools/listening' },
      { name: 'Monetization Insights', path: '/tools/monetization' }
    ],
    'Growth & Optimization': [
      { name: 'Engagement Booster', path: '/tools/engagement' },
      { name: 'AI Post Optimization', path: '/tools/optimization' },
      { name: 'Account Manager', path: '/tools/accounts' },
      { name: 'Custom Branding', path: '/tools/branding' }
    ],
    'Trending & Discovery': [
      { name: 'Trending Content Explorer', path: '/tools/trending' },
      { name: 'Social Media Trends', path: '/tools/newsletter' },
      { name: 'API Integrations', path: '/tools/api' }
    ]
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-group">
          <Link to="/" className="nav-link brand">SocialPro</Link>
          <div 
            ref={dropdownRef}
            className="dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">Tools</span>
            {isToolsOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {Object.entries(tools).map(([category, items]) => (
                  <div key={category} className="dropdown-category">
                    <h3>{category}</h3>
                    <div className="dropdown-items">
                      {items.map((tool) => (
                        <Link 
                          key={tool.path} 
                          to={tool.path}
                          className="dropdown-item"
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
        <div className="nav-group">
          <Link to="/auth" className="nav-link">Login</Link>
          <Link to="/auth/register" className="nav-button">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
