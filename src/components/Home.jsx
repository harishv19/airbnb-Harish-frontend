// src/components/Home.jsx
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className="home-container">
        <h1>Welcome to our Airbnb Clone!</h1>
        <p>Find your perfect accommodation for your next trip.</p>
        <p>Search through thousands of listings worldwide.</p>
        <p>Book with confidence and enjoy your stay!</p>
      </div>
    </div>
  );
};

export default Home;
