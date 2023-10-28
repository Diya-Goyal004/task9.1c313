import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase'; // Import Firebase authentication module

function Signout() {
  // Add any sign-out logic here (using Firebase or chosen authentication system)
  const handleSignOut = () => {
    auth.signOut().then(() => {
      // Redirect to the login page after sign-out
      // can use window.location or a navigation library to handle the redirection
      window.location.href = '/Login'; // Replace with login route
    });
  };

  useEffect(() => {
    handleSignOut(); // Automatically sign out when the component loads
  }, []);

  return (
    <div>
      <p>Signing out...</p>
      <Link to="/Login">Return to Login</Link>
    </div>
  );
}

export default Signout;
