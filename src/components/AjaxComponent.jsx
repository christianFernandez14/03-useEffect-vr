import { useState, useEffect } from 'react'

const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([])


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

  // Datos desde una API 
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

  useEffect(() => {
    // getUsuarios()
    getUsuariosAPI()

  }, [])

  return (
    <div>
      <h2>Listado de usuarios via Ajax</h2>
      <br />
      <ol>
        {
          usuarios.map(usuario => (
            <li key={usuario.id}>
              {usuario.first_name} {usuario.last_name}
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default AjaxComponent