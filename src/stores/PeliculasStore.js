import { makeAutoObservable } from 'mobx'
import servicioPeliculas from '../services/ServicioPeliculas'


export default class PeliculasStore
{
	constructor()
	{ makeAutoObservable(this) }
   titulo = "Video centro"
	 errorListado = false
   listadoCargado = false
   listado = []
   seleccionado = {}

   async cargarListado()
   {
		 this.errorListado = false
     try
     {
        this.listado = await servicioPeliculas.leerPeliculas()
        this.listadoCargado = true
     }
     catch (error)
     {
        console.error(error)
				this.errorListado = true
        this.listadoCargado = false
     }
   }

   limpiar()
   {
     this.listado = []
		 this.errorListado = false
     this.listadoCargado = false
   }
  seleccionar(id)
	{
		const registro = this.listado.find(actual => actual.id == id)
		if(registro)
		  this.seleccionado = { ...registro }  //esto hace una copia del registro
	}

	cambiarNombre( nombre,indice )
	{
/*		this.listado[0].nombre = nombre*/
    this.titulo = nombre
	}
}
