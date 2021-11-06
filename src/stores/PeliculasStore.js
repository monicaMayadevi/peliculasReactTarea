 import { makeAutoObservable } from 'mobx'
export default class PeliculasStore
{
	constructor()
	{ makeAutoObservable(this) }
  titulo = "Video centro"
   listado = [
		{ nombre: 'Viernes 13', genero: 'Terror', clasificacion: 'B' },
 		{ nombre: 'Bambi', genero: 'Infantil', clasificacion: 'A' },
    { nombre: 'Rambo', genero: 'Accion', clasificacion: 'B' },
    { nombre: 'XXX', genero: 'Accion', clasificacion: 'C' }
		]


	cambiarNombre( nombre,indice )
	{
/*		this.listado[0].nombre = nombre*/
    this.titulo = nombre
	}
}
