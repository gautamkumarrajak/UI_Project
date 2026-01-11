import React from 'react'
import Cards from './Cards'
const cards = [
  {
    no: 1,
    text: "Prime customers with access to credit who are satisfied with the current product and overall banking experience",
    mood: "Satisfied",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    no: 2,
    text: "Customers who have access to bank credit but are unhappy with service quality and existing financial offerings",
    mood: "Underserved",
    img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    no: 3,
    text: "Customers from near prime and sub prime segments without proper access to bank credit facilities",
    mood: "Underbanked",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
  }
];


const Rightcontent = (prop) => {
  return (
    <div className='h-150 w-240  flex flex-nowrap content-center items-center '>
      <Cards no={cards[0].no} mood={cards[0].mood} text={cards[0].text} image={cards[0].img} />
      <Cards no={cards[1].no} mood={cards[1].mood} text={cards[1].text} image={cards[1].img} />
      <Cards no={cards[2].no} mood={cards[2].mood} text={cards[2].text} image={cards[2].img} />
      
    </div>
  )
}

export default Rightcontent