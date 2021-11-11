import { makeAutoObservable } from 'mobx'
import servicioPeliculas from '../services/ServicioPeliculas'
export default class PeliculasStore
{
	constructor()
	{ makeAutoObservable(this) }
   titulo = "Video centro"
   listadoCargado = false
   listado = []

   async cargarListado()
   {
     try
     {
        this.listado = await servicioPeliculas.leerPeliculas()
        this.listadoCargado = true
     }
     catch (error)
     {
        console.error(error)
        this.listadoCargado = false
     }
   }

   limpiar()
   {
     this.listado = []
     this.cargarListado = false
   }

	cambiarNombre( nombre,indice )
	{
/*		this.listado[0].nombre = nombre*/
    this.titulo = nombre
	}
}
