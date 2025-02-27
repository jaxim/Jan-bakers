import "./Styles/Footer/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h2>Find it fast</h2>
          <ul>
            <li>Cakes</li>
            <li>Gift Hampers</li>
            <li>Chocolates</li>
            <li>Groceries</li>
            <li>Decor items</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact us</h2>
          <div className="contact-info">
            <p>If you have any questions or suggestions, contact us on:</p>
            <p>
              <i className="fas fa-home"></i>
              Jan Bakers, Mohanapuram <br />
              Mangalapuram, Thiruvanthapuram
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +91 8606307152 +91 8590599396
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Jan Bakers. All rights reserved.</p>
        <ul className="social-icons">
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i className="fa-brands fa-youtube"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}
