import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/highlight";
function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Book Haven</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the Books you purchased online instantly."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ Books"
              para="Uncover rare and unique books
        in our extensive collection."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Find select books starting at
        just $1."
            ></Highlight>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Highlights;
