import React from 'react'
import  './Pokemon.css';


const Pokemon = ({name, img}) => {
  return (
    <div className='pokemon-container'>
        <div className='name'>{name}</div>
        <img src={img} alt="pokemon" />
    </div>
  )
}

export default Pokemon