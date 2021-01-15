import React from 'react'
import './style.css'

const Destino = ({ destino }) => {

  const {
    id,
    cidade,
    uf,
    img,
    promo
  } = destino

  return (
    <li className="destino-card" id={id}>
      <h2>{cidade}/{uf}</h2>
      {promo ? <span className="promo">PROMO!!!</span> : <span>CONFIRA!</span>}
      <div className="city-img">
        <img src={img} alt={cidade} />
      </div>
    </li>
  )
}

export default Destino