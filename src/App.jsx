import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const cards = [
  {
    no: 1,
    text: "Prime customers with access to credit who are satisfied with the current product and overall banking experience",
    mood: "Satisfied",
    color:"lightblue",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    no: 2,
    text: "Customers who have access to bank credit but are unhappy with service quality and existing financial offerings",
    mood: "Underserved",
    color:"lightyellow",
    img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    no: 3,
    text: "Customers from near prime and sub prime segments without proper access to bank credit facilities",
    mood: "Underbanked",
    color:"orange",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
  }
];
const App = (props,idx) => {
  return (
    <div>
      <Section1 key={idx} cards={cards} />
    </div>
  )
}

export default App