import { useState, useEffect } from 'react'

const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)


  // Datos duros (estaticos)
  const getUsuarios = () => {
    setUsuarios([
      {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg"
      }
    ])
  }

  // Datos desde una API con Promesa (solo fetch)
  const getUsuariosAPI = () => {
    const URL = 'https://reqres.in/api/users?page=1'
    fetch(URL)
      .then(respuesta => respuesta.json())
      .then(
        resultado => {
          setUsuarios(resultado.data)
        },
        error => {
          console.log(error);
        }
      )
  }

  // Datos desde una API con Async Await
  const getUsuariosAPIAW = () => {

    setTimeout(async () => {
      const URL = 'https://reqres.in/api/users?page=2'
      const peticion = await fetch(URL)
      const { data } = await peticion.json()

      setUsuarios(data)
      setCargando(false)
    }, 4000);

  }


  useEffect(() => {
    // getUsuarios()
    // getUsuariosAPI()
    getUsuariosAPIAW()

  }, [])

  return (
    <div>
      <h2>Listado de usuarios via Ajax</h2>
      <br />
      {
        cargando
          ? 'Cargando datos...'
          : (
            <ol>
              {
                usuarios.map(usuario => (
                  <li key={usuario.id}>
                    <img 
                    src={usuario.avatar} 
                    alt={`Imaagen de ${usuario.first_name}`} 
                    width={30}
                    />
                    &nbsp;
                    {usuario.first_name} {usuario.last_name}
                  </li>
                ))
              }
            </ol>
          )
      }

    </div>
  )
}

export default AjaxComponent