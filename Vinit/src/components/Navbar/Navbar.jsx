import React, { useState } from "react";
import "../Navbar/Navbar.css";
import {
  FaMeta,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar-container ${menuOpen ? "menu-open" : ""}`}>
      <div id="nav-top">
        <div id="nav-top-contents">
          <a
            href="https://www.linkedin.com/company/theassigner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMeta className="icon" />
          </a>
          <a
            href="https://www.instagram.com/theassigner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://twitter.com/the_assigner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="icon" />
          </a>
          <a
            href="https://whatsapp.com/channel/0029VaaJiRRKAwEshFl9r30c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" />
          </a>
          <a
            href="https://t.me/assigmentmaker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="icon" />
          </a>
        </div>
      </div>
      <div id="nav-bottom">
        <img src="theASSignerlogo 2.png" alt="The Assigner Logo" id="logo" />

        <div id="nav-links" className={menuOpen ? "open" : ""}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#blog">Blog</a>
          <a href="#services">Our Services</a>
          <a href="#ielts">IELTS & PTE</a>
          <a href="#contact">Contact Us</a>
        </div>

        <button id="login-button">Login</button>
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;