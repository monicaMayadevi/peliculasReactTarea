 import { makeAutoObservable } from 'mobx'
export default class PeliculasStore
{
	constructor()
	{ makeAutoObservable(this) }
  titulo = "Video centro"
   listado = [
		{ nombre: 'Viernes 13', genero: 'Terror', clasificacion: 'B', img: '../img/peli1.png' },
 		{ nombre: 'Bambi', genero: 'Infantil', clasificacion: 'A', img: '../img/peli2.png' },
    { nombre: 'Rambo', genero: 'Accion', clasificacion: 'B', img: '../img/peli1.png' },
    { nombre: 'XXX', genero: 'Accion', clasificacion: 'C', img: '../img/peli2.png' }
		]


	cambiarNombre( nombre,indice )
	{
/*		this.listado[0].nombre = nombre*/
    this.titulo = nombre
	}
}
