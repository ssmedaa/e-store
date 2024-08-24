import React from "react";
import CardLogo from "../assets/book store (1).png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row1 row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={CardLogo} alt="" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="" className="footer__link">Home</Link>
            <Link to="" className="footer__link no-cursor">About</Link>
            <Link to="/books" className="footer__link">Cards</Link>
            <Link to="/cart" className="footer__link">Cart</Link>
          </div>
          <div className="footer__copyright">
          Copyright &copy; 2024 Book Haven
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
