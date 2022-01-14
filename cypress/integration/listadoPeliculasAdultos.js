describe('listado peliculas de adultos', () =>
{
  it('acceso a la aplicacion', () =>
  {
    cy.visit('http://localhost:8080/#/peliculasAdulto')
  })
  it('titulo de la pagina', () =>
  {
    cy.get('button').contains('Cambiar nombre').click()
    cy.get('h2').should('contain', 'Video Monish')
  })
  })
