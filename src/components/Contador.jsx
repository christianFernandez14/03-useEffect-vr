import { useState, useEffect } from 'react'

const Contador = () => {

  const [contador, setContador] = useState(0)

  useEffect(()=> {
    console.log(`Se ha modificado ${contador} veces`)

  },[contador])

  return (
    <div>
      <h2>Prueba del contador con useEffect</h2>
      <br />

      <div className={contador < 5 ? 'contenedor' : 'contenedor cambioColor'}>
        <h2>{contador}</h2>
        <div>
          <button
            onClick={() => setContador(contador + 1)}
          >mas</button>
          <button
            onClick={() => setContador(contador - 1)}
          >menos</button>
        </div>
      </div>

    </div>
  )
}

export default Contador