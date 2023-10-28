import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="subscribe-bar">
            <p>SIGN UP FOR DAILY INSIDER</p>
            <div className="subscribe-input">
              <input type="email" placeholder="Enter your email" style={{ width: '900px' }}/>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="blue-box">
            <div className="footer-section">
              <h4>Explore</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/questions">Questions</a></li>
                <li><a href="/articles">Articles</a></li>
                <li><a href="/tutorials">Tutorials</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/help">Help</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Stay Connected</h4>
              <div className="social-icons">
                <img src="https://static-00.iconduck.com/assets.00/social-instagram-icon-2048x2048-xuel0xhc.png" alt="logo" height={30} />
                <img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" alt="logo" height={30} />
                <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="logo" height={30} />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>DEV@Deakin 2023</p>
            <div className="horizontal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms</a>
              <a href="/code-of-conduct">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;