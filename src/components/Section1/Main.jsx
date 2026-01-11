import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Main = () => {
  return (
    <div className='flex justify-between items-center m-10'>
        <Leftcontent/>
        <Rightcontent/>
    </div>
  )
}

export default Main