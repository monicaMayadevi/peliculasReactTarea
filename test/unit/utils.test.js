import { expect } from 'chai'
import utils from '../../src/utils'

describe( 'utils', () =>
{
	describe( 'separar', () =>
	{
    it('debe separar una cadena en 3 partes', () =>
    {
		  const resultado = utils.separar( '12:23:00' )
		  expect( resultado ).is.ok
		  expect( resultado ).to.be.an('array')
		  expect( resultado.length ).to.equal( 3 )
		  expect( resultado[0] ).to.equal( '12' )
		  expect( resultado[1] ).to.equal( '23' )
		  expect( resultado[2] ).to.equal( '00' )
		  expect( resultado ).to.deep.equal( [ '12','23','00' ] )
	  })

	  it('debe separar una cadena vacia como un arreglo vacio', () =>
	  {

		  const resultado = utils.separar( '' )
		  expect( resultado ).to.deep.equal([])
	  })

	  it('debe fallar si recibe una cadena nula', () =>
	  {
		  try
		  {
		     utils.separar()
		     expect.fail()
		  }
		  catch (error)
		  {
		  }
	  })
	})

	describe( 'esperar', () =>
  {
	   it('debe continuar despues de 1 segundo', () =>
		 {
			 return utils.esperar(1000)
		 })

		 it('debe fallar si pasamos intervalo 0', async () =>
		 {
			 try
			 {
			    await utils.esperar(0)
					expect.fail()
			 }
			 catch( error )
			 {
					  expect( error ).to.be.ok
						expect( error.message ).to.be.ok
						expect( error.message ).to.equal ('No se indico un tiempo de espera adecuado')
			 }
		 })
	})
})
