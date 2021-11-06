import React from 'react'
import { Link } from 'react-router-dom'
import DetallePelicula from './detallePelicula'

class Home extends React.Component
{
	render()
	{
		const usuario = { nombre: 'Santiago', email: 'santiago@correo.com', edad: '20' }


 	const peliculas = [
		{ nombre: 'Viernes 13', genero: 'Terror', clasificacion: 'C' },
		{ nombre: 'Bambi', genero: 'Infantil', clasificacion: 'A' },
		{ nombre: 'XXX', genero: 'Accion', clasificacion: 'B' },
	]

	const peliculasAyA = peliculas.filter( pelicula => pelicula.clasificacion != 'A' )


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
						{/* { arreglo }
						{ titulos.map( titulo => ( <div>{ titulo }</div> ) ) }  */}
	          <ul>
	      			{ peliculasAyA.map(pelicula => (
				         	<li>Titulo: { pelicula.nombre }, Genero: { pelicula.genero }</li>
					  	  ))
							}
						</ul>
	 			</div>
				<div>
		      <h3>Titulos desde un componente</h3>
							 <ul>
		                { peliculasAyA.map(pelicula => (
			                    <DetallePelicula datos={ pelicula }/>
								 ))}
							</ul>
	    	</div>
		  </div>
		)
	}
}
export default Home
