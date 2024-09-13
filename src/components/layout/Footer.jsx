import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    console.log(`Signed up with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <h1 className="footer-logo">Kalki</h1>
          <p className="footer-description">
            Passion | Dedication | Excellence
          </p>
        </div>
        <div className="footer-column quick-links-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-column contact-social-column">
          <h3 className="footer-heading">Contact Info</h3>
          <p className="footer-contact">123 Business Rd, City, Country</p>
          <p className="footer-contact">
            Email: <a href="mailto:info@kalki.com">info@kalki.com</a>
          </p>
          <p className="footer-contact">Phone: +123 456 7890</p>
          <div className="footer-social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-newsletter">
        <h3 className="footer-heading">Newsletter Signup</h3>
        <form onSubmit={handleNewsletterSignup} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
