/* global cy */
describe('empty spec', () => {
  it('front page opens', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Home');
  });
  it('on click nav link about us page opens on /about-us', () => {
    cy.visit('http://localhost:3000');
    cy.contains('About us').click();
  });
});
