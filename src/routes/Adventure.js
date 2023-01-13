import React, { useState } from 'react'
import Footer from "../components/Footer";
import image2 from "../assets/eevee.png"
import image3 from "../assets/pikachu.png"
import Pokemon from '../components/Pokemon';

const Adventure = () => {
const [eeveeHP, seteeveeHP] = useState(120)
const [pikachuHP, setpikachuHP] = useState(100)

const eeveeAttack = () => {
  setpikachuHP(pikachuHP - 30)
}
const pikachuAttack = () => {
  seteeveeHP(eeveeHP - 25)
}

  return (
    <>
        <div className="container">
    <Pokemon name='Eevee:' img={image2} hp={eeveeHP} attack={eeveeAttack}/>
    <Pokemon name='Pikachu:' img={image3} hp={pikachuHP} attack={pikachuAttack} />
  </div>
  
   <div> <Footer /></div>
   </>
  )
}

export default Adventure