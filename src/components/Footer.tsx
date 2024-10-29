import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Paradisul Mariei. All rights reserved.</p>
      <div>
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;