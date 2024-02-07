import { useEffect } from "react"
import { useState } from "react"

const PruebasComponent = () => {

  const [usuario, setUsuario] = useState('Christian Fernandez')

  useEffect(() => {
    // console.log('Se a cargado el componente Principal ')
  }, [])

  useEffect(() => {
    // console.log('Estas actualizando el usuario ')
  }, [usuario])

  const handleUsuario = e => {
    let dato = e.target.value
    setUsuario(dato)
  }

  const handlebutton = e => {
    setUsuario('Christian Fernandez')

  }

  return (
    <div>
      <h2>From Test Component</h2>
      <strong>{usuario}</strong>
      <form >
        <input
          type="text"
          placeholder="Cambia el nombre"
          onChange={handleUsuario}
          name=""
          id=""
        />
      </form>
      <button
        onClick={handlebutton}
      >Reiniciar
      </button>
    </div>
  )
}

export default PruebasComponent