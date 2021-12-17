import { expect } from 'chai'
import sinon from 'sinon'
import utilsClock from '../../src/utils-clock'

const sandbox = sinon.createSandbox()

describe( 'utilsClock', () =>
{
	let clock = null

	beforeEach(() =>
  {
		clock = sandbox.useFakeTimers()
	})

	afterEach(() =>
  {
		clock.restore()
		sandbox.restore()
	})

	xdescribe('ejecutarDespuesVer1', () =>
	{
		it( 'debe ejecutar despues version 1', done =>
		{
			 let variable = 0
			 utilsClock.ejecutarDespues(100, () => { variable++ })

			 const verificacion = () =>
			 {
				 expect( variable ).equal( 1 )
				 done()
			 }

	    setTimeout( verificacion, 110 )
		})
	})

	describe('ejecutarDespues', () =>
	  {
			it( 'debe ejecutar despues', () =>
			{
		     let variable = 0
				 //utilsClock.ejecutarDespues(100, () => { variable++ })
				 //clock.tick(100)
				 utilsClock.ejecutarDespues(300000, () => { variable++ })
				 clock.tick(300000)

				 expect( variable ).equal( 1 )

			})
		})

	describe('ejecutasRepetido', () =>
   {
		 it('debe ejecutar repetidamente', () =>
		 {
			 let variable = 0
			 utilsClock.ejecutarRepetido( 300000, () => { variable++ })

       clock.tick(300000)

 			 expect( variable ).equal( 1 )
			 clock.tick(300000)

			 expect( variable ).equal( 2 )

		 })
	 })


})
