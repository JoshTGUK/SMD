import React, { useState } from 'react';
import '../../styles/tools/PostDownloader.css';

const PostDownloader = () => {
  const [urls, setUrls] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState('single');

  const platforms = [
    { name: 'Instagram', icon: '📸' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'Facebook', icon: '👥' },
    { name: 'YouTube', icon: '🎥' },
    { name: 'LinkedIn', icon: '💼' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const urlList = mode === 'bulk' ? urls.split('\n').filter(url => url.trim()) : [urls];
      console.log('Downloading from:', urlList);
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (err) {
      setError('Failed to download content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-downloader">
      <div className="tool-header">
        <h1>Post Downloader</h1>
        <p>Download content from multiple social platforms at once</p>
      </div>

      <div className="download-container">
        <div className="mode-toggle">
          <button 
            className={`toggle-button ${mode === 'single' ? 'active' : ''}`}
            onClick={() => setMode('single')}
          >
            Single Download
          </button>
          <button 
            className={`toggle-button ${mode === 'bulk' ? 'active' : ''}`}
            onClick={() => setMode('bulk')}
          >
            Bulk Download
          </button>
        </div>

        <div className="main-content">
          <div className="download-form">
            <h2>Enter URLs {mode === 'bulk' && '(one per line)'}</h2>
            <div className="input-section">
              {mode === 'single' ? (
                <input
                  type="url"
                  value={urls}
                  onChange={(e) => setUrls(e.target.value)}
                  placeholder="Paste your link here..."
                  required
                  className="url-input"
                />
              ) : (
                <textarea
                  value={urls}
                  onChange={(e) => setUrls(e.target.value)}
                  placeholder="Paste your links here, one per line..."
                  required
                  className="url-input bulk"
                  rows={5}
                />
              )}
            </div>
            <div className="download-action">
              <button 
                onClick={handleSubmit}
                className="download-button"
                disabled={loading}
              >
                {loading ? 'Downloading...' : 'Download All'}
              </button>
              {error && <div className="error-message">{error}</div>}
            </div>
          </div>
        </div>

        <div className="section-divider">
          <h3>SUPPORTED PLATFORMS</h3>
        </div>

        <div className="platform-list">
          {platforms.map((platform) => (
            <div key={platform.name} className="platform-item">
              <span className="platform-icon">{platform.icon}</span>
              <span className="platform-name">{platform.name}</span>
            </div>
          ))}
        </div>

        <div className="features-grid">
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <div className="feature-text">
              <h3>Auto-Detection</h3>
              <p>Automatically detects platform from URL</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <div className="feature-text">
              <h3>Batch Processing</h3>
              <p>Download multiple posts at once</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon">✨</span>
            <div className="feature-text">
              <h3>High Quality</h3>
              <p>Get the best available quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDownloader; 