// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        {/* Additional user details */}
      </div>
    </div>
  );
};

export default UserProfile;
