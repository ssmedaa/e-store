import React from 'react'
import cardInfographic from "../assets/file.png";

function Landing() {
 return ( 
 
 
  <section id="landing">
 <header>
 <div className="header__container">
 <div className="header__description">
 <h1>Collect Timeless Tales One Book at a Time</h1>
  <h2>Score Rare Finds & Iconic Stories with <span className="purple"> <br />Book Haven</span> </h2>
<a href="#recent"> 
 <button className="btn">Browse Books</button>
 </a>
<figure className="header__img--wrapper">

<img src={cardInfographic} alt="" />

</figure>
 
 </div>
 </div>
 </header>
 </section>
)
}







export default Landing;