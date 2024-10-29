import React from 'react';
import Footer from './Footer';
import './Layout.css'; 

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Paradisul Mariei</h1>
        <nav>
          <a href="#about">About Us</a>
          <a href="#facilities">Playground Facilities</a>
          <a href="#services">Event Services</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;