import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Services from '../components/Services';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Facilities />
      <Services />
      <Contact />
    </Layout>
  );
};

export default HomePage;