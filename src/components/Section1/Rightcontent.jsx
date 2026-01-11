import React from 'react'
import Cards from './Cards'



const Rightcontent = (props) => {
  return (
    <div className='h-150 w-240  flex flex-nowrap content-center items-center '>
      {props.cards.map(function(elem){
        return <div>
          <Cards no={elem.no} image={elem.img} text={elem.text} mood={elem.mood} color={elem.color}/>
        </div>
      })}
      
    </div>
  )
}

export default Rightcontent