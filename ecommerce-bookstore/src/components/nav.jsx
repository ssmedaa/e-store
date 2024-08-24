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
              Books
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
         <li className="nav__list">
            <Link to="/login" className="nav__link">
              <button type="button" className="btn btn-outline-danger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                </svg>
                Login
              </button>
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
     <Link to="/books" className="menu__link" onClick={closeMenu}>Books</Link>
     </li>
       <li className="menu__list">
     <Link to="/cart" className="menu__link" onClick={closeMenu}>Cart</Link>
     </li>
      <li className="menu__list">
              <Link to="/login" className="menu__link" onClick={closeMenu}>
                Login
              </Link>
            </li>
     </ul>
     </div>
      </div>
    </nav>
  );
}
export default Nav;
