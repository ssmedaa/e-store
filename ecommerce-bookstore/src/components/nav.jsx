import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardLogo from "../assets/BasketballLogo.png";
import { Link } from "react-router-dom";
function Nav({numberOfItems}) {
  function openMenu(){
    document.body.classList+=" menu--open"
  }
    function closeMenu(){
    document.body.classList.remove("menu--open")
  }
  return (
    <nav>
      <div className="nav__container">
        <img src={CardLogo} alt="" className="logo" />

        <ul className="nav__links">
          <li className="nav__list">
            <Link to="./" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/Books" className="nav__link">
              Cards
            </Link>
          </li>
           <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
        </button>
           <li className="nav__icon">
        <Link to="/cart" className="nav__link"> 
         <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
          
 {numberOfItems > 0 && (
              <span className="cart__length">{numberOfItems}</span>
            )}
         </Link>
        </li>
            </ul>
     <div className="menu__backdrop">
     <button className="btn__menu btn__menu--close" onClick={closeMenu} >
       <FontAwesomeIcon icon="times"></FontAwesomeIcon>
     </button>
 <ul className="menu__links"> 
     <li className="menu__list">
     <Link to="/" className="menu__link" onClick={closeMenu} >Home</Link>
     </li>
       <li className="menu__list">
     <Link to="/books" className="menu__link" onClick={closeMenu}>Cards</Link>
     </li>
       <li className="menu__list">
     <Link to="/cart" className="menu__link" onClick={closeMenu}>Cart</Link>
     </li>
     </ul>
     </div>
      </div>
    </nav>
  );
}
export default Nav;
