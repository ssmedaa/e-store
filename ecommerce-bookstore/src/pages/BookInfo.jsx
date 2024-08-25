import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import BestCards from "../components/BestCards";

function BookInfo({ books, addItemToCart, added, cart, totals, updateSmallCart, removeItem }) {
  const { id } = useParams();
  const book = books.find((book) => book.id == id);

  function bookExistInCart() {
    const dupe = cart.find((item) => item.id === book.id);
    return dupe;
  }

  function bilal(item, event) {
    updateSmallCart(item, event.target.value);
    setShow();
  }

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(bookExistInCart());
  }, [cart, book]);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">{book.summary1}</p>
                  <p className="book__summary--para">{book.summary2}</p>
                </div>
                {bookExistInCart() ? (
                  <button className="btn" onClick={handleShow}>Checkout</button>
                ) : (
                  <button className="btn" onClick={() => addItemToCart(book)}>Add to Cart</button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              <BestCards id={id} books={books}></BestCards>
            </div>
          </div>
        </div>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>My Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div id="books__body">
              <main id="books__main">
                <div className="books__container">
                  <div className="row">
                    <div className="cart">
                      <div className="cart__header">
                        <span className="cart__book">Card</span>
                      </div>
                      <div className="cart__body">
                        {cart.map((item) => {
                          const itemPrice = parseFloat(item.salePrice || item.originalPrice) || 0;
                          return (
                            <div className="cart__item" key={item.id}>
                              <div className="cart__book1">
                                <img className="cart__book--img" src={item.url} alt="" />
                                <button className="cart__book--remove" onClick={() => removeItem(item)}>
                                  <FontAwesomeIcon icon="fa-solid fa-x" />
                                </button>
                                <div className="cart__book--info">
                                  <span className="cart__book--title1">{item.title}</span>
                                  <span className="cart__book--price1">${itemPrice.toFixed(2)}</span>
                                  <input
                                    type="number"
                                    className="cart__input"
                                    min={0}
                                    max={10}
                                    defaultValue={item.quantity}
                                    onChange={(event) => bilal(item, event)}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        <div className="total">
                          <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            <span>${Number(totals.subtotal || 0).toFixed(2)}</span>
                          </div>
                          <div className="total__item total__tax">
                            <span>Tax</span>
                            <span>${Number(totals.tax || 0).toFixed(2)}</span>
                          </div>
                          <div className="total__item total__price">
                            <span>Total</span>
                            <span>${Number(totals.total || 0).toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="btn_contain">
                          <Link to="/cart">
                            <button className="btn">View Cart</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </main>
    </div>
  );
}

export default BookInfo;