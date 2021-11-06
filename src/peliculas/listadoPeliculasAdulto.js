import { inject,observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'
import VerPeliculaLista from './VerPeliculaLista'
import VerPeliculaCard from './VerPeliculaCard'

class ListadoPeliculasAdulto extends React.Component
{
	renombrarPelicula()
	{
		this.props.peliculas.cambiarNombre("Video Monish",0)
	}
	render()
	{
		const { peliculas } = this.props
	/*	const peliculasAyA = peliculas.listado.filter( pelicula => pelicula.clasificacion != 'A' ) */
		return (
      <div>

				<h1>{ peliculas.titulo }</h1> <button type="button" onClick={ () => this.renombrarPelicula() }>Cambiar nombre</button>
				 <h2>Listado de peliculas</h2>

				<br/>
				<table class="table">
         <tbody>
          <tr>
 		    		{ peliculas.listado.map(pelicula => (
							<VerPeliculaCard datos={ pelicula }/>
		       ))}
          </tr>
	       </tbody>
	      </table>
				<div>
					 <ul>
		            { peliculas.listado.map(pelicula => (
			             <VerPeliculaLista datos={ pelicula }/>
								 ))}
				   </ul>
	    	</div>
           <br />
					 <div class="text-center"  >
				     <Link to="/">
	             <img src="../img/home.png"  width="50" height="50" />
				     </Link>
				   </div>
		      </div>
		   )
	  }
 }
export default inject( 'peliculas' )( observer ( ListadoPeliculasAdulto ))
