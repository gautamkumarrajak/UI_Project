import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

const Section1 = (props) => {
  return (
    <div className=' h-screen w-screen bg-amber-50 '  >
      <Navbar/>
      <Main cards={props.cards}/>
    </div>
  )
}

export default Section1