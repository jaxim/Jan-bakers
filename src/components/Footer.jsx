import "./Styles/Footer/Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <ul>
              <li>
                <h2>Find in fast</h2>
                <ul>
                  <li>Cakes</li>
                  <li>Gift Hampers</li>
                  <li>Chocolates</li>
                  <li>Groceries</li>
                  <li>Decore items</li>
                </ul>
              </li>
              <li>
                <h2>Contact us</h2>
                <ul>
                  <li>
                    If you have any question or <br />
                    suggestions contact us on
                  </li>
                  <li>
                    <i className="fas fa-home"></i>
                    Jan Bakers, Mohanapuram <br />
                    Mangalapuram, Thiruvanthapuram
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    +91 8606307152 +91 8590599396
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div className="foot">
              <p>Copyright ©2024 janbakers All right Reserved</p>
              <ul>
                <li>
                  <i className="fas"></i>
                </li>
                <li>
                  <i className="fas"></i>
                </li>
                <li>
                  <i className="fas"></i>
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fas fa-facebook"></i>
                </li>
                <li>
                  <i className="fas fa-twitter"></i>
                </li>
                <li>
                  <i className="fas fa-instagram"></i>
                </li>
                <li>
                  <i className="fas fa-linkedin"></i>
                </li>
                <li>
                  <i className="fas fa-youtube"></i>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
}
