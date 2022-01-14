describe('listado peliculas infantiles', () =>
{
  it('acceso a la aplicacion', () =>
  {
    cy.visit('http://localhost:8080/#/peliculasInfantil')
  })
  it('listado de peliculas', () =>
  {
    cy.get('h2').should('contain', 'Listado de peliculas')
    cy.get('ul').find('li').should('have.length', 1)

  })
  })
