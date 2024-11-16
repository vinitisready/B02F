import React from "react";
import {
  FaMeta,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>How We Help?</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Plagiarism Checker</li>
            <li>Free Publications</li>
            <li>Provides Books</li>
            <li>Provides PDF</li>
            <li>Paraphraser</li>
          </ul>
        </div>
        <div className="offering">
          <h3>Our Offering</h3>
          <ul>
            <li>Free IELTS Masterclass</li>
            <li>Talk to Counsellor</li>
            <li>IELTS Exam Overview</li>
            <li>Important IELTS Articles</li>
          </ul>
        </div>
        <div className="newsletter" style={{ marginTop: "100px" }}>
          <h3>Newsletter</h3>
          <p>You can trust us. We only send promo offers.</p>
          <div className="newsletter-input">
            <input type="email" value="Your email here" onChange={() => x} />
            <button>Subscribe</button>
          </div>
          <div className="f-s">
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
      </div>
    </footer>
  );
};

export default Footer;