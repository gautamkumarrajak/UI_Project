import React from 'react'

const Cards = () => {
  return (
    <div className='h-150 w-70 bg-amber-200 ml-9 mb-5 rounded-4xl'>
        <div>
            <img  src="https://images.unsplash.com/photo-1767978918959-3a68a4a57d1b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D" className='h-150 w-70 rounded-4xl'  alt="" />
            <span className='h-10 w-10 rounded-full bg-white flex justify-center items-center text-2xl m-5 absolute top-38'>1</span>
            <span className='h-150 w-70 font-bold ml-5 absolute top-100 text-2xl text-white'>Lorem ipsum dolor sit amet dolore ipsum animi. Natus neque necessitatibus quod. Dolor laborum sequi rerum porro!</span>
            <span className='flex items-center justify-center  absolute bottom-28 '>
                <button className='h-10 w-40 rounded-4xl bg-blue-400 left-6 ml-10'> Satisfied</button>
                <button className='h-10 w-10 rounded-[20px] bg-blue-400'>Ar</button>
                
            </span>
        </div>
       
  
    </div>
)}

export default Cards