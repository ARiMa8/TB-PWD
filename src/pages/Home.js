import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <section className="home"  id="home">
      <div className="home-text">
        <h1 className='font-Poppins'>Wisata <br /> Pulau Seribu</h1>
        <p className='font-Paytone'>Explore thousands of islands in the land of Jakarta</p>
        <Link to="/destinations" className="home-btn">See More!</Link>
      </div>
    </section>
  );
};

export default Home;
