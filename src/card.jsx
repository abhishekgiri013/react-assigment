import React from 'react'

const BasketballPlayerCard = ({name,image,position,data}) => {
  return (
    <div className='card'>
         <img src={image} alt="pic" />
         <h2 className='font-semibold text-3xl'>{name}</h2>
          <h3 className='font-semibold'>{position}</h3>
           <h2>{data}</h2>
           
          
    </div>
  )
}

export default BasketballPlayerCard
