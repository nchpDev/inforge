import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Stories from '../components/Stories';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Stories />
      <Footer />
    </div>
  )
}

export default Home