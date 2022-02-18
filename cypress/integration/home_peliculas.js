describe('home peliculas', () =>
{
  beforeEach( () =>
  {
    cy.visit('http://localhost:8080')
  })
  it('listar enlances a los listados de peliculas', () =>
  {
    cy.get('h1')
    .should('contain', 'Video Monish')
    cy.get('a').contains('Peliculas Infantiles')
    cy.get('a').contains('Peliculas para Adolescentes')
    cy.get('a').contains('Peliculas para Adultos')
  })
  })
