import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L21.5 4.5L27 9L21.5 13.5L16 18L10.5 13.5L5 9L10.5 4.5L16 0Z" fill="url(#paint0_linear)"/>
          <path d="M16 14L21.5 18.5L27 23L21.5 27.5L16 32L10.5 27.5L5 23L10.5 18.5L16 14Z" fill="url(#paint1_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="5" y1="9" x2="27" y2="9" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F5A0"/>
              <stop offset="1" stopColor="#00D9F5"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="5" y1="23" x2="27" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F5A0"/>
              <stop offset="1" stopColor="#00D9F5"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="logo-text">SocialPro</span>
    </div>
  );
};

export default Logo; 