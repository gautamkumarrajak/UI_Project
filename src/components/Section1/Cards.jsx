import React from 'react'

const Cards = (prop) => {
  return (
    <div className='h-150 w-70 bg-amber-200 shrink-0  ml-9 mb-5 rounded-4xl'>
        <div>
            <img  src={prop.image} className='h-150 w-70 rounded-4xl object-cover'  alt="" />
            <span className='h-10 w-10 rounded-full bg-white flex justify-center items-center text-2xl m-5 absolute top-38'>{prop.no}</span>
            <span className='h-150 w-70 font-bold ml-5 absolute top-130 text-lg p-1 wrap-break-word text-white'>{prop.text}</span>
            <span className='flex items-center justify-center  absolute bottom-28 '>
                <button className='h-10 w-40 rounded-4xl bg-blue-400 left-6 ml-10'> {prop.mood} </button>
                <button className='h-10 w-10 rounded-[20px] bg-blue-400'>Ar</button>
                
            </span>
        </div>
       
  
    </div>
)}

export default Cards