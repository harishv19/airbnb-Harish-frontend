// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const user = { // Sample user data, replace with actual user data from your state/store
    username: 'john_doe',
    email: 'john@example.com',
    // Additional user details
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/profile" element={<UserProfile user={user} />} /> {/* Pass user data as props */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
