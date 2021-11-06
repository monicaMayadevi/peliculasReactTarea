import React from 'react'

class VerPeliculaCard extends React.Component
{
	render()
	{
		const { nombre, genero, clasificacion } = this.props.datos
    return (
			<td>
			<div className="card" >
       <div class="text-center"  >
				<img src="../img/peli1.PNG"  width="250" height="200" />
       </div>
			 <h5 className="card-title"> { nombre }</h5>
			<p className="card-text">GENERO:  { genero } <br /> CLASIFICACIÓN: { clasificacion } </p>
			<a href="#" className="btn btn-primary">Ver Pelicula </a>
     </div>
    </td>
		)
	}
}
export default VerPeliculaCard
