import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component
{
	render()
	{
		const usuario = { nombre: 'Santiago', email: 'santiago@correo.com', edad: '20' }
		const titulos = [ 'Viernes 13', 'Bambi', 'XXX' ]
		/*const arreglo = [ ]

		{ for( const titulo of titulos  )
			arreglo.push( <div>{ titulo }</div> )
    }
		titulos.forEach(
			          titulo => arreglo.push( <div>{ titulo }</div>)
					   )*/
	 const arreglo = titulos.map( titulo => ( <div>{ titulo }</div> ) )

		return (
      <div>
			  <h1>Página home</h1>
				<br/>
				<Link to="/peliculas">Peliculas</Link>
				<br />
				<div>
			    Nombre: { usuario.nombre }
			  </div>
				<div>
			    Correo: { usuario.email.toUpperCase() }
			  </div>
			  <div>
			    Edad: { usuario.edad > 50 ? 'VIEJO' : 'JOVEN' }
			  </div>
				<div>
		  		<h3>Titulos</h3>
						{/* { arreglo } */}
						{ titulos.map( titulo => ( <div>{ titulo }</div> ) ) }
				</div>
		  </div>
		)
	}
}
export default Home
