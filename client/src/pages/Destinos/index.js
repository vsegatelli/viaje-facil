import React, { useState, useEffect } from 'react'
import Destino from '../../components/Destino'
import './style.css'

const Destinos = () => {
  const [destinos, setDestinos] = useState([])

  useEffect(() => {
    fetch('/destinos')
      .then(res => res.json())
      .then(json => setDestinos(json))
      .catch(err => console.log(err))
  }, [])

  return (
    <section>
      <h1>Destinos</h1>
      <ul className="destino-list">
        {destinos.map((destino) => <Destino key={destino.id} destino={destino}/>)}
      </ul>
    </section>
  )
}

export default Destinos