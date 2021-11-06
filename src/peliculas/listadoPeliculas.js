import { inject,observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'
import VerPeliculaCard from './VerPeliculaCard'

class ListadoPeliculas extends React.Component
{
	renombrarPelicula()
	{
		console.log("ejecutado");
		this.props.peliculas.cambiarNombre("El señor de los anillos",0)
	}
	render()
	{
		const { peliculas } = this.props
		const clasificar=this.props.match.params.clasificacion
		console.log("params "+ clasificar )
    const peliculasFiltradas = peliculas.listado.filter( pelicula => pelicula.clasificacion == clasificar )

		return (
      <div>
			  <h1>Listado de peliculas</h1>
				<h2>{ peliculas.nombre }</h2>
				<button type="button" onClick={ () => this.renombrarPelicula() }>Cambiar nombre</button>
				<br/>
				<div class="text-center">
				                <div class="row">
				                    <div class="col fs-3 text-center mb-3">
				                        Titulos {clasificar=="A"?"Infantil":(clasificar=="B"?"Adolescentes":"Adultos")}
				                    </div>
				                </div>
				            <div class="row row-cols-1 row-cols-md-4 g-4">
				            { peliculasFiltradas.map(pelicula => (
				             <VerPeliculaCard datos={ pelicula }/>
				            ))}
				            </div>
				                <Link to="/" class="btn btn-outline-light mt-5 mb-5"><i class="bi-house-fill display-4"></i></Link>
				            </div>
				   <br />
				<Link to="/">Home</Link>
		  </div>
		)
	}
}
export default inject( 'peliculas' )( observer ( ListadoPeliculas ))
