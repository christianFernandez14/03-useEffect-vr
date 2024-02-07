import { useEffect } from 'react'

const AvisoComponent = ({ cambios }) => {

  useEffect(() => {
    console.log('Componente MONTADO')

    return () => {
      console.log('Componente DESMONTADO')
    }
  }, [])
  
  return (
    <div>
      <h2>{`Hemos superado los ${cambios} cambios`}</h2>
    </div>
  )
}

export default AvisoComponent