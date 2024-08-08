import React from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadStripe } from '@stripe/stripe-js';

const Cart = ({ cart, updateCart, removeItem, totals }) => {
  const redirectToCheckout = async () => {
    const stripe = await loadStripe('pk_test_51Ovo0GDH16DQa3RUI27zpTHUDIItjatyTGv7UGkuHM2bDgbjvW0T7zxo5GcvUoYq1lO8Sm4IQrNKhQ06Lzf6I9gE00a6BYfFeB');
    
    // Prepare line items for Stripe Checkout
    const lineItems = cart.map(item => ({
      price: item.stripeID, // Replace with the Stripe price ID for your product
      quantity: item.quantity
    }));

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: 'payment',
      successUrl: 'https://nba-trading-cards.vercel.app/', // URL to redirect to after successful payment
      cancelUrl: 'https://nba-trading-cards.vercel.app/', // URL to redirect to if payment is canceled
    });

    // Handle any errors
    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((item) => {
                  const itemPrice = item.salePrice || item.originalPrice;
                  return (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__book">
                        <img
                          className="cart__book--img"
                          src={item.url}
                          alt=""
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {item.title}
                          </span>
                          <span className="cart__book--price">
                            ${itemPrice.toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(item)}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-x" />Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          className="cart__input"
                          min={0}
                          max={10}
                          value={item.quantity}
                          onChange={(event) =>
                            updateCart(item, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        ${(itemPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
                {(!cart || !cart.length) && (
                  <div className="cart__empty">
                    <img className="cart__empty--img" src={EmptyCart} alt="" />
                    <h2>You don't have any cards in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browse Cards</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {cart && cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${totals.tax.toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                <button className="btn btn__checkout" onClick={redirectToCheckout}>
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
