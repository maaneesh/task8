import React from "react";

function Footer() {
  return (
    <footer className="footer p-10 text-red-50 bg-cyan-600">
      <div>
        <span className="footer-title">Contact</span>
        <p>Email: contact@company.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <div>
        <span className="footer-title">Address</span>
        <p>1234 Business Rd</p>
        <p>Business City, BC 56789</p>
      </div>
      <div>
        <span className="footer-title">Careers</span>
        <a href="#careers" className="link link-hover">
          Join Our Team
        </a>
        <a href="#jobs" className="link link-hover">
          Current Openings
        </a>
      </div>
      <div>
        <span className="footer-title">FAQ</span>
        <a href="#faq1" className="link link-hover">
          What is your return policy?
        </a>
        <a href="#faq2" className="link link-hover">
          How do I track my order?
        </a>
        <a href="#faq3" className="link link-hover">
          Do you offer technical support?
        </a>
      </div>
      <div className="pt-10">
        <p className="text-center">
          &copy; 2024 Manish Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
