const SERVIDOR = 'https://santiagoarriaga.github.io/peliculas.json'
const leerPeliculas = async () =>
{
	const url = `${ SERVIDOR }/peliculas.json`

  const response = await fetch (url)
	if( response.ok )
	  return response.json()
  else
  	throw Error('error al leer las películas')
}
export default { leerPeliculas }
