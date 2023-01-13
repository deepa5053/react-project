import React from 'react'
import  './Pokemon.css';


const Pokemon = ({name, img, hp, attack}) => {
  return (
    <div className='pokemon-container'>
        <div className='name'>{name}</div>
        <img className='pic' src={img} alt="pokemon" />
        <div className='hp'>HP: {hp}</div>
        <button onClick={attack} className='btn' >Attack Opponent</button>
    </div>
  )
}

export default Pokemon