import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Login from './Login'; 
import Signup from './SignUp';
import SignOut from './SignOut';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/SignOut" element={<SignOut/>} />
          {/* Add other routes for different pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
