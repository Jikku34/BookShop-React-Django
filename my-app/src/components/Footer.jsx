// src/Footer.js
import './Footer.css';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We are a leading company in providing the best services and products to our customers. Our mission is to deliver excellence in all we do.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Follow Us</h5>
            <ul className="footer-social-links">
              <li><a href="#"><i className="bi bi-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="bi bi-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="bi bi-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="footer-copy">&copy; 2024 PremiumBrand. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
