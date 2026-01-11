import React from 'react'

const Cards = (props) => {
  return (
    <div className='h-150 w-70 bg-amber-200 shrink-0  ml-6 mb-5 rounded-4xl'>
        <div>
            <img  src={props.image} className='h-150 w-70 rounded-4xl object-cover'  alt="" />
            <span className='h-10 w-10 rounded-full bg-white flex justify-center items-center text-2xl m-5 absolute top-38'>{props.no}</span>
            <span className='h-150 w-70 font-bold ml-1 absolute top-130 text-lg p-1 wrap-break-word text-white'>{props.text}</span>
            <span className='flex items-center justify-center  absolute bottom-28 '>
                <button style={{backgroundColor:props.color}} className='h-10 w-40 rounded-4xl left-6 ml-10'> {props.mood} </button>
                <button style={{backgroundColor:props.color}} className='h-10 w-10 rounded-[20px]'>Ar</button>
                
            </span>
        </div>
       
  
    </div>
)}

export default Cards