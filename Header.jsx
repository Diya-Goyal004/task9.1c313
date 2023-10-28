import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './Header.css';

function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, [auth]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setLoggedIn(false);
        navigate('/login'); // Redirect to the login page after sign-out
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div className="navbar">
      <div className="company-name">DEV DEAKIN</div>
      <div className="nav-items">
        <input type="text" id="search-input" placeholder="Search" />
        {isLoggedIn ? (
          <button id="signout-button" onClick={handleSignout}>
            Signout
          </button>
        ) : (
          <Link to="/login">
            <button id="login-button">Login</button>
          </Link>
        )}
        <button id="post-button">Post</button>
      </div>
    </div>
  );
}

export default Header;
