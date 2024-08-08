import React from "react";
import { Link } from "react-router-dom";

function Explore() {
  return (
    <section id="explore">
      <div className="container">
        <div className="row">
          <h2>
            Explore more <span className="purple">Books</span>
          </h2>
          <div className="btn__wrapper"> 
          <Link to="/books">
            <button className="btn">Explore Books</button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
