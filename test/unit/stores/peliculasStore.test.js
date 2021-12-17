import { expect } from 'chai'
import sinon from 'sinon'
import PeliculasStore from '../../../src/stores/PeliculasStore'
import servicioPeliculas from '../../../src/services/ServicioPeliculas'

const sandbox = sinon.createSandbox()
const listadoPrueba = [ 'Dumbo', 'Rambo' ]

describe( 'PeliculasStore', () =>
{
	//esto deshabilita el error de BUM
	beforeEach(() =>
	{
		sandbox.stub( console, 'error' )
	})

	afterEach(() => sandbox.restore() )

   describe('cargar listado', () =>
   {

			 it('debe cargar listado de peliculas', async () =>
	  	 {
				 sandbox.stub( servicioPeliculas, 'leerPeliculas' ).resolves( listadoPrueba )
				 const store = new PeliculasStore()
				 await store.cargarListado()

         expect( store.listadoCargado).to.be.true
				 expect( store.errorListado ).to.be.false
				 expect( store.listado ).to.deep.equal( listadoPrueba )

        sinon.assert.calledOnce(servicioPeliculas.leerPeliculas)
		   })

			 it('debe indicar que hubo error al cargar listado de pelicuas', async () =>
	  	 {
				 sandbox.stub( servicioPeliculas, 'leerPeliculas' ).rejects( Error('BUM') )
				 const store = new PeliculasStore()
				 await store.cargarListado()

         expect( store.listadoCargado).to.be.false
				 expect( store.errorListado ).to.be.true
				 expect( store.listado ).to.deep.equal( [] )

				 sinon.assert.calledOnce(servicioPeliculas.leerPeliculas)

		   })

	 })

	 describe('limpiar', () =>
   {

			 it('debe limpiar el listado de peliculas', async () =>
	  	 {
				 sandbox.stub( servicioPeliculas, 'leerPeliculas' ).resolves( listadoPrueba )
				 const store = new PeliculasStore()

				 await store.cargarListado()
         expect( store.listadoCargado ).to.be.true


				 store.limpiar()
  			 expect( store.listadoCargado ).to.be.false
				 expect( store.errorListado ).to.be.false
				 expect( store.listado ).to.deep.equal( [] )


		   })



	 })



})
