const SERVIDOR = 'https://monicamayadevi.github.io'
const leerPeliculas = async () =>
{
	const url = `${ SERVIDOR }/pelis.json`

  const response = await fetch (url)
	if( response.ok )
	  return response.json()
  else
  	throw Error('error al leer las películas')
}
export default { leerPeliculas }
