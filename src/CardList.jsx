import React from 'react'
import Card from './Card';
import Data from  "./card.json"
const CardList = () => {
  return (
    <div className='card-list'>
        {Data.map((element,key)=>(
            <Card props={element} key={key}></Card>
        ))}
    </div>
  )
}

export default CardList;