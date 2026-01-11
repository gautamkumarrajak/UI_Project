import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Main = (props) => {
  return (
    <div className='flex justify-between items-center m-10'>
        <Leftcontent/>
        <Rightcontent cards={props.cards}/>
    </div>
  )
}

export default Main