import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Navbar/Navbar.css";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/items?search=${searchQuery}`);
  };

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
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <i className="fas fa-shopping-cart" aria-label="Cart"></i>
            <i className="fas fa-user" aria-label="User"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}
