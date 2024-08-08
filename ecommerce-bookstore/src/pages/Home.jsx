import React from 'react'
import Landing from "../components/landing"
import Highlights from '../components/highlights'
import Features from '../components/featured'
import Discounted from '../components/discounted';
import Explore from '../components/Explore';
function Home() {
  return (
    <> 
      <Landing></Landing>
   <Highlights></Highlights>
   <Features></Features>
   <Discounted></Discounted>
   <Explore></Explore>
    </>
  )
}

export default Home