import React from 'react'
import { ImgHTMLAttributes } from "react"

class VerPeliculaCard extends React.Component
{
	render()
	{
		const { nombre, genero, clasificacion, img } = this.props.datos
    return (
			<div class="col">
			<div class="card text-center text-white bg-dark border-light h-100">
				<img src={ img }  class="card-img-top" alt="" />
        <div class="card-body bg-gradient">
			    <h5 className="card-title"> { nombre }</h5>
		  	  <p className="card-text">GENERO:  { genero } <br /> CLASIFICACIÓN: { clasificacion } </p>
			    <a href="#" className="btn btn-primary">Ver Pelicula </a>
        </div>
      </div>
		  </div>
		)
	}
}
export default VerPeliculaCard
