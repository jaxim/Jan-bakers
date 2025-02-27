import "./Styles/Navbar/Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <ul className="main">
          <li className="contact">
            <span>Call Us</span>
            <a href="tel:+91 8606307152">+91 8606307152</a>
          </li>
          <li className="brand">
            <h1 className="logo-text">Jan Bakers.</h1>
          </li>
          <li className="icons">
            <i className="fas fa-search" aria-label="Search"></i>
            <i className="fas fa-shopping-cart" aria-label="Cart"></i>
            <i className="fas fa-user" aria-label="User"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}
