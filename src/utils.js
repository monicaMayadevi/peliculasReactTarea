const separar = texto => texto === '' ?  [] : texto.split(':')

const esperar = milis =>
{
	if( !milis )
	  return Promise.reject(Error('No se indico un tiempo de espera adecuado'))

	return new Promise( resolve =>
	{
		setTimeout( resolve, milis )
	})
}

export default { separar, esperar }
