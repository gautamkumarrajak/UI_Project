import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[50px] flex items-center justify-between p-15'>
        <h2 className='h-[30px] w-[170px] text-white  bg-black rounded-xl uppercase text-lg pl-1.5 '>Target Audiance</h2>
        <button className='h-[30px] w-[270px] text-black  bg-gray-200 rounded-xl uppercase text-lg '>digital banking platform</button>
    </div>
  )
}

export default Navbar