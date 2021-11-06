import React from 'react'

class VerPeliculaLista extends React.Component
{
	render()
	{
		const { nombre, genero, clasificacion } = this.props.datos
    return (
      <li>Titulo: { nombre }, Genero: { genero }, Clasificacion: { clasificacion }</li>
		)
	}
}
export default VerPeliculaLista
