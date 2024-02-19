import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stories from '../components/Stories';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Services />
      <Stories />
      <Footer />
    </div>
  )
}

export default Home